# India business reading list

## Sources

- SMEStreet: https://smestreet.in/rss (50 entries at verification)
- Small Enterprise India: https://smallenterpriseindia.com/feed/ (10 entries)
- Zoho Blog: https://www.zoho.com/blog/feed (practical business-tool guides)
- Razorpay Learn: https://razorpay.com/learn/feed/ (practical merchant-tool guides)

Feeds were fetched successfully on 15 September 2026. Discovery used publishers' advertised feed links and verified RSS endpoints. SME Futures returned 403; indiansme.in did not resolve, so neither is configured. ET/Gadgets 360 feeds with personal-use RSS terms are not added. No full articles or publisher images are republished; each item links to its publisher.

## Relevance

General news must explicitly connect India, smaller businesses, technology use, and operational/growth value. Funding, acquisitions, enterprise-only news, generic AI announcements, consumer gadgets, and speculative claims remain excluded. New RSS entries have a 90-day freshness window.

Zoho and Razorpay tool guides can qualify by concrete business software + an actionable integration/setup/use explanation, without requiring every headline to repeat “India” or “SME”. This is a relevance judgement for tools used by Indian businesses, not a claim that the article discusses India. Supplier guides are labelled **Tool guide**. Tax-only/GST explainers and OS/gadget updates are excluded from that exception.

## No blank state

Fresh qualifying items are followed by previously screened readings in `data/india-news-cache.json` and reviewed guides in `data/india-news-library.json`. Display three links with at most two from a publisher. Canonical URLs are deduplicated; only HTTPS allowlisted publisher origins are accepted. Older saved articles retain their dates and are labelled selected reading; evergreen guides do not receive invented publication dates.

The client immediately renders bundled guides, including before the first fetch, if the endpoint fails, or if it returns an empty/invalid response. Later failures preserve the last good list. A single failed RSS source does not discard successful sources. Successful fetches with no qualifying articles do not erase history.

Verified fallback resources include the World Economic Forum/Office of the PSA AI playbook for India's SMEs, NSIC digital services, and Small Enterprise India's rural e-commerce marketplace article. These are clearly distinguished from fresh RSS stories.

## Refresh behaviour

Local development fetches upstream feeds every 30 minutes on demand. The Sites deployment is still a static website: it publishes the latest saved list at build time. The page labels this accurately. It does not claim the deployed list refreshes live. Stored readings keep it populated between deployments; no background automation was created.

## Validation

`node --test server/india-news.test.mjs server/india-news-fallback.test.mjs` covers relevance, origin checks, deduplication, source variety, empty results, all-source failure, partial failures, and saved-reading retention.
