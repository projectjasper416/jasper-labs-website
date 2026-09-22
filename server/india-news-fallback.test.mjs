import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { SOURCES, composeReadingList, refreshIndiaNews, selectIndiaItems, assessSmallBusinessRelevance } from './india-news.mjs';
const guides = JSON.parse(await readFile(new URL('../data/india-news-library.json',import.meta.url),'utf8'));
const now=Date.parse('2026-09-15T18:00:00Z');
const guide={title:'How to connect Google Sheets to CRM',contentSnippet:'Connect your Google Sheets workflow to CRM and automatically update customer records.',link:'https://www.zoho.com/blog/crm/guide.html',isoDate:'2026-09-14T10:00:00Z',feedSource:'Zoho Blog'};
test('approved practical tool feeds can qualify without repeating India in every headline',()=>{
 assert.equal(selectIndiaItems([guide],now).length,1);
 assert.equal(assessSmallBusinessRelevance(guide).eligible,false);
 assert.equal(selectIndiaItems([{...guide,link:'https://untrusted.example/guide'}],now).length,0);
 assert.equal(selectIndiaItems([{...guide,title:'New iOS CRM app launches',contentSnippet:'A guide to Apple updates'}],now).length,0);
});
test('all feeds failing still supplies three real, dated or clearly evergreen readings',async()=>{
 const data=await refreshIndiaNews({now,guides,fetchFeed:async()=>{throw new Error('offline')}});
 assert.equal(data.stale,true);assert.equal(data.items.length,3);assert.deepEqual(data.items,guides);
});
test('empty but successful feeds retain screened history and fill with practical guides',async()=>{
 const saved=selectIndiaItems([guide],now);
 const data=await refreshIndiaNews({now,saved,guides,fetchFeed:async()=>({items:[]})});
 assert.equal(data.stale,false);assert.equal(data.items.length,3);assert.equal(data.items[0].url,guide.link);
});
test('one broken publisher does not discard another publisher’s results',async()=>{
 const data=await refreshIndiaNews({now,guides,fetchFeed:async url=>{
  if(url===SOURCES.find(s=>s.name==='Zoho Blog').url)return {items:[guide]};
  throw new Error('unavailable');
 }});
 assert.equal(data.partial,true);assert.equal(data.stale,false);assert.equal(data.items.length,3);assert.equal(data.items[0].url,guide.link);
});
test('deduplicates tracking variants and enforces source variety',()=>{
 const fresh=[1,2,3].map(n=>({title:`CRM guide ${n}`,url:`https://www.zoho.com/blog/guide${n}.html`,source:'Zoho Blog',publishedAt:'2026-09-14T10:00:00Z',kind:'Tool guide'}));
 const list=composeReadingList([fresh[0],{...fresh[0],url:fresh[0].url+'?utm_source=x'},...fresh],[],guides);
 assert.equal(list.length,3);assert.equal(list.filter(i=>i.source==='Zoho Blog').length,2);assert.equal(new Set(list.map(i=>i.url)).size,3);
 assert.equal(composeReadingList([{...fresh[0],url:'javascript:alert(1)'}],[],guides).length,3);
});
