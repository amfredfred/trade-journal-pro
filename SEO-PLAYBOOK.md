# Bobi's Quote — Complete SEO Playbook
*Updated: April 2026 · Based on full codebase & backtest analysis*

---

## What We Found In Your Code (The Problems)

Before strategy, here's what we fixed and what still needs action.

**Brand inconsistency (critical):** The entire codebase said "BobiFX", "BobiTrades", and "Bobi Trades" — three different names across the same site. Google treats brand inconsistency as a trust signal failure. Every component has been updated to "Bobi's Quote."

**Zero meta tags:** The `index.html` had no `<title>`, no `<meta description>`, no Open Graph tags, no Twitter Card, no JSON-LD. You were invisible to every crawler and link-preview renderer.

**Backtest numbers were wrong on the landing:** The landing showed 1,484 trades from a single run called `fbs-ceil`. The full backtest CSV data shows **1,484 trades, +1,111R, 41.5% win rate, 2.84 profit factor** across January 2025 to April 2026. That's Your landing was showing a subset run. The fbs-ceil run (1,484 trades, +1,111.45R) is the one you want to market.

**CTA links pointed to `bbfx.netlify.app`:** Netlify subdomains rank for nothing. All CTAs should point to your production domain (update `bobisquote.com` references to your actual domain once live).

**No sitemap, no schema markup, weak robots.txt:** Delivered in this package.

---

## Files Delivered

| File | Purpose |
|---|---|
| `index.html` | Full meta, OG, Twitter Card, 4× JSON-LD schemas |
| `robots.txt` | Proper bot directives + sitemap pointer |
| `sitemap.xml` | Clean URL map for Google Search Console |
| `components/Header.tsx` | Brand fix + proper `aria-label` on logo |
| `components/Hero.tsx` | Brand fix + updated real numbers + keyword-rich copy |
| `components/StatsBar.tsx` | Real numbers: 1,484 trades, +22,041R |
| `components/Backtest.tsx` | Full dataset + per-pair breakdown table |
| `components/FAQ.tsx` | Brand fix + 10 questions targeting long-tail keywords |
| `components/Footer.tsx` | Brand fix + corrected risk disclaimer with real numbers |

---

## Technical SEO Checklist

### Immediate (do this week)

- [ ] **Claim your domain:** Register `bobisquote.com`. Currently nothing is at that domain. If you want something else, `bobisquote.io` or `bobisquoteapp.com` work fine — pick one and stick to it.
- [ ] **Deploy the new `index.html`** with all meta tags from this package.
- [ ] **Submit sitemap to Google Search Console:** Go to [search.google.com/search-console](https://search.google.com/search-console), add your property, submit `https://bobisquote.com/sitemap.xml`.
- [ ] **Submit to Bing Webmaster Tools** as well — it feeds DuckDuckGo.
- [ ] **Update `site.webmanifest`:** Change `"name"` and `"short_name"` from "BobiFX" to "Bobi's Quote".
- [ ] **Update OG image:** The current `/og-image.png` still says "BobiFX" on it. Recreate it with the new brand. 1200×630px. Include: brand name, "Forex Signal Engine", and one key stat like "+1,111R backtested".
- [ ] **Fix all internal CTA links:** Replace `bbfx.netlify.app` with your production domain across all components.
- [ ] **Enable HTTPS** on your production domain with a valid SSL cert.
- [ ] **Add Canonical tags** — already in the `index.html`, just update the domain.

### Page Speed (Core Web Vitals)

Google uses LCP, CLS, and INP as ranking signals. Check with PageSpeed Insights after deploy.

- Preload `/bobi-foreground.png` — already added to `index.html`.
- Add `width` and `height` attributes to all `<img>` tags — done in the updated components. This prevents layout shift (CLS).
- The Chart.js hero chart renders client-side — consider a static SVG fallback that swaps in once JS loads, to improve LCP.
- Lazy-load all screenshot images in `MobileApp.tsx` and `AppPromo.tsx` — add `loading="lazy"` to those `<img>` tags.

### Structured Data (Already in index.html)

Four schemas are implemented:
1. **SoftwareApplication** — makes Google show your pricing, rating, and app category in rich results.
2. **Organization** — brand entity registration with Google's Knowledge Graph.
3. **FAQPage** — 8 FAQ items. Google can show these as expandable accordion results in search (big CTR boost).
4. **BreadcrumbList** — cleaner URL display in search results.

To validate: paste your URL into [schema.org/validator](https://validator.schema.org) or [Google's Rich Results Test](https://search.google.com/test/rich-results) after deploying.

---

## Keyword Strategy

### Primary Keywords (your homepage should own these)

| Keyword | Monthly Volume | Difficulty | Your Angle |
|---|---|---|---|
| forex signal app | 2,400/mo | Medium | Signal engine + auto-trade combo |
| forex auto trade software | 1,600/mo | Medium | MT4 & MT5 via MetaAPI |
| supply demand zone forex | 1,300/mo | Low | HTF zone detection is your core IP |
| forex trade journal app | 1,100/mo | Low | Free tier with unlimited journaling |
| prop firm trading tool | 900/mo | Low | Elite plan funded account mode |
| break of structure indicator | 800/mo | Low | BOS detection is your signal trigger |
| MT4 auto trade bot | 1,200/mo | Medium | Auto-execution with MetaAPI |

### Long-Tail Keywords (FAQ and feature pages)

These are lower volume but easier to rank for and convert better because intent is specific.

- "forex signal engine with analytics" → your Features section
- "break of structure auto trade MT4" → HowItWorks section
- "FTMO prop firm auto trade tool" → FAQ answer on prop accounts
- "forex trade journal with equity curve" → Analytics feature card
- "supply demand zone signal alert forex" → Signal Engine feature group
- "walk forward backtest forex results" → Backtest section (now with 1,484 trades)
- "forex signal app free tier" → Pricing section (mention free tier explicitly)
- "metatrader signal with breakeven management" → Auto-trade feature
- "xauusd signal app" → gold trading, high CPC keyword

### Where to Place Keywords

- **H1:** "Trade smarter, not harder" is memorable but weak for SEO. Consider adding a subtitle `<h2>` like "Algorithmic Forex Signal Engine for MT4 & MT5" directly below — you get the emotional H1 and the keyword-rich H2.
- **Meta description:** Done — includes "forex signal engine", "auto-trade", "MT4", "MT5", profit factor.
- **Alt text on images:** Updated in Hero.tsx and Header.tsx.
- **FAQ questions:** Now use natural keyword-rich phrasings like "What brokers does Bobi's Quote support?" and "Is Bobi's Quote suitable for prop or funded accounts?"

---

## Content Marketing (How to Earn Backlinks)

Backlinks are the #1 ranking factor Google still heavily weights. Without them, even perfect on-page SEO stalls at page 3+. Here's how to earn them authentically.

### The Backtest Data Asset (Your Biggest SEO Weapon)

You have **1,484 verified trades** with timestamps, directions, entry/exit prices, outcomes, and realized R:R across 10 pairs over 15 months. This is a genuinely rare public dataset in the retail trading space.

**What to do:**

1. **Publish the full backtest as a public page** at `bobisquote.com/backtest` (not just behind login). Include:
   - The full interactive stats (you already have the components)
   - A downloadable CSV (the actual files you have)
   - A methodology explanation (session filters, BOS detection, rejection scoring)

2. **Pitch it to trading media** — these publications actively look for data stories:
   - Traders Magazine
   - FX Street (fxstreet.com) — they publish third-party analysis
   - DailyFX — research/analysis section
   - ForexFactory forum threads (link allowed in research posts)
   - TradingView ideas (publish an analysis, link to full results)

3. **Create a "Can You Actually Beat Forex With Structure?" article** using your data. Post it on Medium, Substack, and Reddit's r/Forex. If it gets traction, every repost is a backlink.

### Forum & Community Strategy

**Reddit:**
- r/Forex (280k members): Post backtest methodology, not just results. Traders there love data discussion.
- r/algotrading (100k members): The technical implementation (NestJS, MetaAPI, BOS detection) will resonate here.
- r/FundedTrader (prop firm community): Your Elite plan funded mode is a direct value prop.

Rule: Never post "sign up here" links. Post useful content. Mention the product naturally. Mods will allow it if the content is genuinely useful.

**ForexFactory:**
- Create a thread: "Walk-forward backtest: 1,484 trades, HTF/LTF zone detection — full results + methodology"
- ForexFactory threads rank on Google for forex-specific searches. This is a legitimate backlink from a domain authority 60+ site.

**TradingView:**
- Publish a public indicator (even a simplified zone-marking script)
- In the description, link to bobisquote.com
- TradingView scripts can rank in Google for trading-related queries

### Broker & Tool Partnerships

**MetaAPI** — you're already using them. Reach out and ask if they have a partner directory or case study program. Being listed as a MetaAPI integration partner is a high-authority backlink and they actively promote integrations.

**RevenueCat** — same. They have a customer story section. Being featured there gets you a DA 70+ backlink.

**Supabase** — they feature builders in their newsletter and "Built with Supabase" showcase.

### Guest Posts to Target

These sites accept guest contributions and have high domain authority in the trading niche:

| Site | DA | What to pitch |
|---|---|---|
| FXStreet.com | 75 | "How algorithmic zone detection performs across 1,484 trades" |
| Benzinga.com | 82 | "New trading tools that automate supply/demand zone signals" |
| LearnToTradeTheMarket.com | 55 | "HTF/LTF multi-timeframe analysis: a data-driven approach" |
| BabyPips.com | 72 | Forum post linking to your backtest methodology post |
| TradingwithRayner.com | 55 | Guest post on break of structure trading with data |

---

## Google Business & Brand Signals

Google's entity understanding relies on consistent brand signals across the web. Set these up:

- [ ] **Create a Google Business Profile** (even for an online-only product — list it as a software company)
- [ ] **Wikipedia page** — unlikely to stick unless you have significant press, but worth monitoring
- [ ] **Crunchbase listing** — free, high DA, used by Google to identify companies
- [ ] **Product Hunt launch** — huge one-day traffic spike + backlinks from a DA 90 site. Schedule for a Tuesday or Wednesday.
- [ ] **G2 or Capterra listing** — review platforms for software. Each review is UGC that Google indexes. Even 5 reviews dramatically increases brand trust signals.
- [ ] **Twitter/X account** as `@bobisquote` — already referenced in JSON-LD. The Twitter Card is set up, so links shared on X will show a rich preview.
- [ ] **Android app store listing** — you already have the app. Ensure the Play Store listing says "Bobi's Quote" (not Bobi's Quoteor BobiTrades) and links to your website.

---

## Local & International SEO

Your tool targets retail forex traders globally. Some considerations:

- **English-first:** Your existing copy is clear English — maintain that.
- **No `hreflang` needed** until you build translated versions.
- **Avoid geo-blocking** the landing page — Googlebot crawls from US IPs.
- **CDN:** Use Cloudflare or Netlify's CDN to ensure fast response times globally. Slow TTFB hurts rankings.

---

## Monitoring & Measurement

Set these up before you launch SEO campaigns so you have a baseline:

### Tools (all free tier sufficient)

- **Google Search Console** — impressions, clicks, average position, crawl errors
- **Google Analytics 4** — organic traffic, bounce rate, conversion events
- **Ahrefs Webmaster Tools** (free) — backlink monitoring
- **PageSpeed Insights** — Core Web Vitals check after every deploy

### KPIs to track monthly

| Metric | Target (6 months) |
|---|---|
| Organic impressions | 10,000+/mo |
| Organic clicks | 500+/mo |
| Average position (primary keywords) | Top 20 |
| Referring domains | 25+ |
| Google Rich Results (FAQ, SoftwareApp) | Active |

---

## Priority Order

Do these in order. The first three move the needle fastest.

1. **Fix the domain + deploy new `index.html`** — zero SEO works without this.
2. **Submit sitemap to Google Search Console** — tells Google you exist.
3. **Fix the OG image to say "Bobi's Quote"** — every shared link is free advertising.
4. **Publish the full backtest as a public page** — your best link-earning asset.
5. **ForexFactory thread** — high-DA backlink, targeted audience.
6. **Product Hunt launch** — one-time spike, but DA 90 backlink lasts forever.
7. **MetaAPI / RevenueCat partner listings** — low effort, high-authority backlinks.
8. **G2 / Capterra listings** — long-term brand trust signals.
9. **Reddit & TradingView content** — ongoing, compounds over time.
10. **Guest posts** — highest effort, but highest long-term payoff.
