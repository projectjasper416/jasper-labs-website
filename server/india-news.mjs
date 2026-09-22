import Parser from 'rss-parser';
import { readFile, writeFile, rename, mkdir } from 'node:fs/promises';
export const SOURCES = [
  { name:'SMEStreet', url:'https://smestreet.in/rss', host:'smestreet.in' },
  { name:'Small Enterprise India', url:'https://smallenterpriseindia.com/feed/', host:'smallenterpriseindia.com' },
  { name:'Zoho Blog', url:'https://www.zoho.com/blog/feed', host:'www.zoho.com', toolGuides:true },
  { name:'Razorpay Learn', url:'https://razorpay.com/learn/feed/', host:'razorpay.com', toolGuides:true },
];
const CACHE_PATH = new URL('../data/india-news-cache.json', import.meta.url);
const LIBRARY_PATH = new URL('../data/india-news-library.json', import.meta.url);
const ALLOWED_HOSTS = new Set([...SOURCES.map(s=>s.host),'cio.economictimes.indiatimes.com','www.psa.gov.in','www.nsic.co.in']);
const TOOL_GUIDE = /\b(?:crm|erp|invoic(?:e|es|ing)|inventory|bookkeeping|payment gateway|payment links?|online payments?|workflow|google sheets|trello)\b/i;
const GUIDE_ACTION = /\b(?:how|guide|integration|integrate|connects?|automat(?:ic|ically|ion|e)|set up|manage|simplif(?:y|ies))\b/i;
const HALF_HOUR = 30 * 60 * 1000;
const parser = new Parser({ timeout: 10000, headers: { 'User-Agent': 'JasperLabs-NewsReader/1.0' } });
let cache;
let lastAttempt = 0;
let pending;
// This is a conservative metadata screen, not full-article semantic analysis.
const INDIA = /\b(?:india|indian|bharat|bharatiya|indiaai|msmes? in india)\b/i;
const AUDIENCE = /\b(?:entrepreneurs?|solopreneurs?|founders?|start[ -]?ups?|msmes?|smes?|smbs?|small(?:[ -](?:and|to)[ -]medium(?:[ -]sized)?)?[ -](?:business(?:es)?|enterprises?|firms?|retailers?|manufacturers?)|medium[ -](?:sized[ -])?(?:business(?:es)?|enterprises?|firms?)|micro[ -](?:business(?:es)?|enterprises?)|kiranas?)\b/i;
const TECHNOLOGY = /\b(?:ai|artificial intelligence|machine learning|automation|automat(?:e|es|ed|ing)|digital(?:isation|ization| tools?| payments?| commerce)?|digitisation|digitization|technology|software|saas|cloud|crm|erp|e[ -]?commerce|chatbots?|voice agents?|point[ -]of[ -]sale|pos|no[ -]code|low[ -]code|upi)\b/i;
const ADOPTION = /\b(?:using|uses?|used|choos(?:e|es|ing)|select(?:s|ed|ing)?|evaluat(?:e|es|ed|ing)|compar(?:e|es|ed|ing)|adopt(?:s|ed|ing)?|implement(?:s|ed|ing)?|deploy(?:s|ed|ing)?|integrat(?:e|es|ed|ing)|automat(?:e|es|ed|ing)|digiti[sz](?:e|es|ed|ing)|set(?:ting)? up|switch(?:es|ed|ing)? to|build(?:s|ing)? with)\b/i;
const VALUE = /\b(?:scal(?:e|es|ing)|growth|grow(?:s|ing)?|expand(?:s|ed|ing)?|productivity|efficiency|costs?|save(?:s|d)? time|time sav(?:ed|ings)|sales|revenue|customers?|inventory|invoic(?:e|es|ing)|billing|orders?|bookkeeping|workflow(?:s)?|operations?|lead generation|reduce(?:s|d)? errors?|reduce(?:s|d)? waste)\b/i;
// These are finance/deal headlines, even when a startup's product is described below.
const FINANCE_HEADLINE = /\b(?:funding|fundrais(?:e|es|ing)|funded|rais(?:e|es|ed)\s+(?:[$₹€£]|rs\.?|inr\b|usd\b|\d)|series [a-f]|valuation|ipo|stock (?:market|price)|stocks (?:rise|fall|jump|surge)|share price|shares (?:rise|fall|jump|surge)|earnings|investment round|acquisition|acquires?|merger)\b/i;
const ANNOUNCEMENT_HEADLINE = /\b(?:launch(?:es|ed)?|unveil(?:s|ed)?|announc(?:e|es|ed)|partners?|partnership|deal|policy|regulat(?:ion|ions|ory)|rules?|liability|model release|gadgets?|smartphones?|laptops?)\b/i;
// An announcement/policy item needs a concrete use or usable guidance, not a promise.
const PRACTICAL_EVIDENCE = /\b(?:how|guide|checklist|steps|case study|using|uses?|used|adopted|implemented|deployed|integrated|automated|digitised|digitized|set up)\b/i;
const OTHER_AUDIENCE = /\b(?:large (?:banks|enterprises|companies|corporations)|multinationals?|big tech|fortune 500|telecom operators?)\b/i;
const NO_TECH_USE = /\b(?:no (?:software|technology|digital tools)|without (?:using )?(?:ai|software|technology|digital tools))\b/i;
const SPECULATIVE = /\b(?:aims? to|plans? to|promises? to|expected to|set to|will help|will enable|could help|may help)\b/i;

function plainText(value) {
  if (typeof value !== 'string') return '';
  return value.slice(0,20000)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ')
    .replace(/<[^>]*>/g,' ')
    .replace(/&(?:nbsp|amp|quot|apos|lt|gt);|&#(?:x[\da-f]+|\d+);/gi, entity => {
      const named = { '&nbsp;':' ', '&amp;':'&', '&quot;':'"', '&apos;':"'", '&lt;':'<', '&gt;':'>' };
      if (named[entity.toLowerCase()]) return named[entity.toLowerCase()];
      const hex = /^&#x/i.test(entity);
      const point = parseInt(entity.slice(hex ? 3 : 2,-1),hex ? 16 : 10);
      return point > 0 && point <= 0x10ffff ? String.fromCodePoint(point) : ' ';
    }).replace(/\s+/g,' ').trim();
}

export function assessSmallBusinessRelevance(item, source = {}) {
  const title = plainText(item.title);
  // rss-parser exposes RSS description as content/contentSnippet. Support other
  // common normalized feed fields too; never use a full content:encoded article.
  const summary = plainText(item.contentSnippet || item.summary || item.description || item.content);
  const metadata = `${title} ${summary}`;
  if (!title) return { eligible:false, reason:'insufficient-metadata' };
  const toolGuide = source.toolGuides && TOOL_GUIDE.test(title) && GUIDE_ACTION.test(metadata) && !/\b(?:apple|ios|ipad|macos|gst|tax)\b/i.test(title);
  if (!INDIA.test(metadata) && !toolGuide) return { eligible:false, reason:'no-explicit-india-context' };
  if (!AUDIENCE.test(metadata) && !toolGuide) return { eligible:false, reason:'no-small-business-audience' };
  if (FINANCE_HEADLINE.test(title)) return { eligible:false, reason:'finance-or-acquisition-headline' };
  if (toolGuide) return { eligible:true, reason:'practical-business-tool-guide-available-in-india' };
  // Keep the audience, technology, adoption and value connected: title plus at
  // most one summary sentence, rather than unrelated mentions across the feed.
  const windows = [title, ...summary.split(/(?<=[.!?])\s+/)
    .filter(sentence => !OTHER_AUDIENCE.test(sentence) || AUDIENCE.test(sentence))
    .map(sentence => `${title} ${sentence}`)];
  const connected = windows.filter(text => AUDIENCE.test(text) && TECHNOLOGY.test(text) && ADOPTION.test(text) && VALUE.test(text) && !NO_TECH_USE.test(text) && !SPECULATIVE.test(text));
  if (!connected.length) return { eligible:false, reason:'insufficient-practical-adoption-metadata' };
  if (ANNOUNCEMENT_HEADLINE.test(title) && !connected.some(text => PRACTICAL_EVIDENCE.test(text) && !SPECULATIVE.test(text))) {
    return { eligible:false, reason:'announcement-without-practical-evidence' };
  }
  return { eligible:true, reason:'india-small-business-practical-technology-use' };
}

export function safeReading(item) {
  try {
    const url = new URL(item.url);
    if (url.protocol !== 'https:' || !ALLOWED_HOSTS.has(url.hostname) || url.username || url.password || !item.title || !item.source) return null;
    url.hash = '';
    for (const key of [...url.searchParams.keys()]) if (/^(utm_|fbclid$|gclid$)/.test(key)) url.searchParams.delete(key);
    if (item.publishedAt && (!Number.isFinite(Date.parse(item.publishedAt)) || Date.parse(item.publishedAt) > Date.now())) return null;
    return {...item, title:plainText(item.title), source:plainText(item.source), url:url.href};
  } catch { return null; }
}
export function selectIndiaItems(items, now = Date.now(), limit = 3) {
  const seen = new Set();
  return items.flatMap(item => {
    const title = plainText(item.title);
    const date = Date.parse(item.isoDate || item.pubDate);
    const source = SOURCES.find(s=>s.name===item.feedSource);
    let url;
    try { url = new URL(item.link); } catch { return []; }
    if (url.protocol !== 'https:' || url.hostname !== (source?.host || 'cio.economictimes.indiatimes.com') || url.username || url.password ||
      !Number.isFinite(date) || date > now || now - date > 90 * 86400000 ||
      !assessSmallBusinessRelevance(item,source).eligible) return [];
    url.hash = '';
    for (const key of [...url.searchParams.keys()]) if (/^(utm_|fbclid$|gclid$)/.test(key)) url.searchParams.delete(key);
    if (seen.has(url.href)) return [];
    seen.add(url.href);
    return [{ title, url: url.href, publishedAt: new Date(date).toISOString(), source: source?.name || 'ET CIO', kind: source?.toolGuides ? 'Tool guide' : 'RSS story' }];
  }).sort((a,b) => Date.parse(b.publishedAt)-Date.parse(a.publishedAt)).slice(0,limit);
}
// Only previously screened readings and reviewed guides can fill quiet periods.
// Their actual dates and reading type are always retained.
export function composeReadingList(fresh = [], saved = [], guides = [], limit = 3) {
  const result = [], seen = new Set(), counts = new Map();
  const candidates = [...fresh,...saved.map(i=>({...i,kind:i.kind==='RSS story'?'Selected reading':i.kind})),...guides];
  for (const candidate of candidates) {
    const item = safeReading(candidate);
    if (!item || seen.has(item.url) || (counts.get(item.source)||0) >= 2) continue;
    seen.add(item.url); counts.set(item.source,(counts.get(item.source)||0)+1); result.push(item);
    if (result.length >= limit) break;
  }
  return result;
}
async function readJson(url, fallback = []) {
  try { const value = JSON.parse(await readFile(url,'utf8')); return Array.isArray(value) ? value : fallback; } catch { return fallback; }
}
export async function refreshIndiaNews({ fetchFeed = url => parser.parseURL(url), now = Date.now(), saved = [], guides = [] } = {}) {
  const results = await Promise.allSettled(SOURCES.map(async source => {
    const feed = await fetchFeed(source.url);
    return feed.items.map(item=>({...item,feedSource:source.name}));
  }));
  const fresh = selectIndiaItems(results.flatMap(r=>r.status==='fulfilled'?r.value:[]),now,30);
  const failures = results.filter(r=>r.status==='rejected').length;
  return { fetchedAt:new Date(now).toISOString(), stale:failures===SOURCES.length, partial:failures>0,
    sources:SOURCES.map(({name,url})=>({name,url})), items:composeReadingList(fresh,saved,guides), fresh };
}
export async function getIndiaNews() {
  if (pending) return pending;
  if (cache && Date.now() - lastAttempt < HALF_HOUR) return cache;
  lastAttempt = Date.now();
  pending = (async () => {
    const [saved,guides] = await Promise.all([readJson(CACHE_PATH),readJson(LIBRARY_PATH)]);
    const result = await refreshIndiaNews({saved,guides});
    if (result.fresh.length) {
      const history = [...new Map([...result.fresh,...saved].map(i=>[i.url,i])).values()].slice(0,60);
      try { await mkdir(new URL('../data/',import.meta.url),{recursive:true}); await writeFile(new URL('india-news-cache.tmp',CACHE_PATH),JSON.stringify(history,null,2)+'\n'); await rename(new URL('india-news-cache.tmp',CACHE_PATH),CACHE_PATH); } catch { /* Read-only deployments still use bundled readings. */ }
    }
    const {fresh,...payload} = result;
    cache = payload;
    return cache;
  })();
  try { return await pending; } finally { pending = undefined; }
}
export function indiaNewsPlugin() {
  return {
    name: 'india-ai-news',
    configureServer(server) {
      server.middlewares.use('/india-ai-news.json', async (_req,res) => {
        res.setHeader('Content-Type','application/json');
        res.setHeader('Cache-Control','no-store');
        res.end(JSON.stringify({ ...await getIndiaNews(), mode: 'polling' }));
      });
    },
    async generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'india-ai-news.json', source: JSON.stringify({ ...await getIndiaNews(), mode: 'snapshot' }) });
    }
  };
}
