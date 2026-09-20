import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import library from '../data/india-news-library.json';
type Reading = { title: string; url: string; publishedAt: string | null; source: string; kind: string; dateLabel?: string };
type News = { fetchedAt: string | null; stale: boolean; partial?: boolean; mode: 'snapshot' | 'polling'; sources?: {name:string;url:string}[]; items: Reading[] };
const formatDate = (value: string) => new Date(value).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' });
const fallback = library as Reading[];
const allowedHosts = new Set(['smestreet.in','smallenterpriseindia.com','www.zoho.com','razorpay.com','www.psa.gov.in','www.nsic.co.in']);
export function validReading(item: Reading) {
  try { const url = new URL(item.url); return url.protocol==='https:' && allowedHosts.has(url.hostname) && !url.username && !url.password && typeof item.title==='string' && !!item.title && typeof item.source==='string'; } catch { return false; }
}
export default function IndiaNews() {
  const [news, setNews] = useState<News | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch('/india-ai-news.json', { signal: controller.signal, cache: 'no-store' });
        if (!response.ok) throw new Error('Feed unavailable');
        const data = await response.json();
        if (!Array.isArray(data.items)) throw new Error('Invalid feed');
        const items = data.items.filter(validReading);
        // Keep a previously loaded good list on empty or malformed updates.
        setNews(previous => items.length ? {...data,items} : previous);
        setError(items.length===0);
      } catch { if (!controller.signal.aborted) setError(true); }
    }
    load();
    const interval = setInterval(load, 30 * 60 * 1000);
    return () => { controller.abort(); clearInterval(interval); };
  }, []);
  const readings = news?.items.length ? news.items : fallback;
  const items = [...new Map([...readings,...fallback].map(item=>[item.url,item])).values()].slice(0,3);
  const old = news?.fetchedAt && Date.now() - Date.parse(news.fetchedAt) > 86400000;
  return <section className="india-news jl-wrap" aria-labelledby="news-heading">
    <div className="news-intro"><span className="eyebrow">04 / INDIA BUSINESS BRIEF</span><h2 id="news-heading">Tools for <em>growth.</em></h2><p>Practical AI and technology ideas for entrepreneurs and smaller businesses in India.</p></div>
    <div className="news-content"><div className="news-list">{items.map(item => <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.url}><div><span>{item.source} · {item.kind}{item.publishedAt ? <> · <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time></> : item.dateLabel ? ` · ${item.dateLabel}` : ''}</span><h3>{item.title}</h3></div><ArrowUpRight size={18}/></a>)}</div>
      <p className="news-update">RSS stories and selected practical guides. {news?.mode === 'polling' ? 'Checked every 30 minutes while this page is open.' : 'Saved reading list; refreshed when the site is updated.'}{news?.fetchedAt ? ` Last checked ${formatDate(news.fetchedAt)}.` : ''}{(news?.stale || error || old) ? ' Showing saved readings while updates are unavailable.' : ''} Publisher articles open on their own websites.</p>
      {!!news?.sources?.length && <details className="news-sources"><summary>RSS sources</summary><ul>{news.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.name}</a></li>)}</ul></details>}
    </div>
  </section>;
}
