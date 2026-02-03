# Superlend Blog Guidelines & Best Practices

This document captures lessons learned and best practices for creating and maintaining blog content for Superlend. Reference this when writing new articles or fixing existing ones.

---

## Table of Contents

1. [Style, Tone & AI-SEO Guidelines](#style-tone--ai-seo-guidelines) ⭐ **Start here for writing**
2. [URL & Link Standards](#url--link-standards)
3. [Table Formatting](#table-formatting)
4. [Screenshot Best Practices](#screenshot-best-practices)
5. [Product Messaging](#product-messaging)
6. [Internal Linking Strategy](#internal-linking-strategy)
7. [Cover Images](#cover-images)
8. [Content Pillars](#content-pillars)
9. [SEO Checklist](#seo-checklist)
10. [Common Mistakes to Avoid](#common-mistakes-to-avoid)

---

## Style, Tone & AI-SEO Guidelines

This section defines how Superlend content should read. Every blog post should pass these checks before publishing.

### Things That Are Nice

**Consistent Superlend positioning:**
- Superlend is a non-custodial DeFi lending aggregator
- Superlend helps users compare rates, risk, and markets across established protocols
- State this clearly once per article

**Writing style:**
- Declarative, confident statements
- Lead with conclusions – answer the main question in the first 1-2 sentences
- Decision-oriented framing – help users choose, not just understand
- Structured sections with question-style headers

**Internal linking:**
- Link to related Superlend guides using descriptive anchors
- Reinforces topic authority and helps SEO

**Short, quotable definitions (1-2 per article):**
- Bold the key definition sentence
- Make it something an AI overview could cite verbatim
- Example: "**Stablecoin yield is interest earned by lending USDC or USDT on DeFi protocols.**"

---

### Things to Avoid

**Generic AI filler language:**
- ❌ "At its core…"
- ❌ "The beauty of this system…"
- ❌ "Let's be honest…"
- ❌ "In this guide, we'll explore…"
- ❌ "Looking for [X]? You've come to the right place."
- ❌ "Let's dive in…"

**Overly academic or encyclopedic tone:**
- No textbook-style explanations
- No exhaustive coverage for its own sake
- Cut sections that don't change user behavior or understanding

**Overlong intros:**
- Answer the main question immediately
- Don't build up to the answer – lead with it

**Neutral, journalist-style writing:**
- Superlend content should sound like it's written by builders and users, not reporters

**Repeated disclaimers throughout the article:**
- One clear disclaimer section at the end is enough
- Don't restate "this is risky" in every subsection

**Inconsistent naming:**
- Do not alternate between "Superlend," "the app," "our platform," etc.
- Use "Superlend" consistently

**Yield hype or implied guarantees:**
- No "best," "guaranteed," or "safe like a bank" language
- No emotional persuasion around returns

---

### Obvious Errors

| Error | Fix |
|-------|-----|
| Talking about "DeFi" abstractly | Always anchor claims to concrete protocols, mechanisms, or risks |
| Describing Superlend as a custodian | Funds always go directly to underlying protocols. Superlend never controls user assets |
| Burying key answers mid-paragraph | Important conclusions should appear early and explicitly |
| Overusing stats without meaning | When citing TVL or other metrics, state why it matters |

---

### Protocol-Specific Rules

**CRITICAL:** These rules prevent outdated or inaccurate protocol information.

| Protocol | ❌ Never Use | ✅ Always Use |
|----------|--------------|---------------|
| **Morpho** | Optimisers, Optimizers, peer-to-peer matching | Morpho Blue, Morpho Vaults |
| **Euler** | Euler v1, "Euler" without version | Euler v2 |
| **Aave** | Aave v1, Aave v2 (for current products) | Aave v3, Aave v4 (upcoming) |

**Morpho Details:**
- Morpho Optimisers are deprecated – never reference them
- Morpho Blue is the base layer (permissionless lending primitive)
- Morpho Vaults are curated strategies on top of Morpho Blue
- Use [docs.morpho.org](https://docs.morpho.org) for accurate information
- Never describe Morpho as "peer-to-peer matching" – that was the old Optimisers

**Euler Details:**
- Only discuss Euler v2 for product/yield information
- Euler v1 was exploited and deprecated

**Aave Details:**
- For current lending products, only discuss Aave v3
- May mention Aave v4 for upcoming features

---

### Quality Checklist

Before publishing, verify:

- [ ] **Main question answered explicitly?** – Ideally in the intro or first major section
- [ ] **At least 3 sentences quotable verbatim by an AI?** – If not, article is too narrative
- [ ] **Superlend's role clear in one sentence?** – Non-custodial, aggregator, comparison + execution layer
- [ ] **Protocol tradeoffs stated plainly?** – Yield vs security, liquidity vs experimentation, simplicity vs optimization
- [ ] **Every section changes user behavior or understanding?** – If a section doesn't help someone decide or avoid a mistake, cut it
- [ ] **Conclusion summarizable in 2-3 sentences?** – If not, it's too long or too vague

---

### Final Check

> **"Could this article have been written by any generic DeFi blog?"**
>
> If yes → rewrite.

Superlend content should have:
- Clear product positioning (non-custodial aggregator)
- Decision-oriented framing (not just education)
- Quotable definitions for AI citation
- Builder/user voice (not journalist voice)

---

## URL & Link Standards

### Consolidated App URL

All product links should point to the unified app at `app.superlend.xyz`:

| Old URL (DO NOT USE) | New URL |
|---------------------|---------|
| `funds.superlend.xyz` | `app.superlend.xyz/vaults` |
| `funds.superlend.xyz/super-fund/base` | `app.superlend.xyz/vaults` |
| `loop.superlend.xyz` | `app.superlend.xyz/vaults` |
| `loop.superlend.xyz/earn` | `app.superlend.xyz/vaults` |
| `loop.superlend.xyz/multiply` | `app.superlend.xyz/vaults` |

### App Sections

- **Discover** - `app.superlend.xyz/discover` - Rate discovery, market browsing
- **Markets** - `app.superlend.xyz/markets` - Direct market access
- **Vaults** - `app.superlend.xyz/vaults` - SuperFund & Loop Vaults
- **Portfolio** - `app.superlend.xyz/portfolio` - User positions

### Verification Command

After editing, verify no old URLs remain:
```bash
grep -r "funds.superlend.xyz" blog-repo/_posts/
grep -r "loop.superlend.xyz" blog-repo/_posts/
```

---

## Table Formatting

### Problem: Markdown Tables Don't Render

**CRITICAL:** Markdown tables do NOT render properly in the Superlend blog. They display as broken raw text like:
```
| Action | Ethereum Mainnet | Base | |--------|------------------|------| | Token Approval | $3-15 | $0.001 |
```

This applies to ALL markdown tables, not just APY data.

### Solution: NEVER Use Markdown Tables

**Use bullet lists instead:**
```markdown
<!-- DON'T DO THIS -->
| Protocol | APY |
|----------|-----|
| Aave | 5.2% |
| Compound | 4.8% |

<!-- DO THIS INSTEAD -->
- **Aave:** 5.2% APY
- **Compound:** 4.8% APY
```

**Or use prose:**
```markdown
On Ethereum mainnet, token approvals cost $3-15 and deposits run $10-50.
On Base, the same actions cost fractions of a cent.
```

**Or use screenshots for comparisons:**
```markdown
![WBTC lending rates on Superlend](/assets/screenshots/superlend-wbtc-markets.png)
*Compare WBTC lending rates across protocols on Superlend*
```

### Alternatives for Different Content

- **Comparisons** → Use bullet lists or screenshots
- **Rate data** → Use prose with "view current rates on Superlend" links
- **Step-by-step** → Use numbered lists
- **Feature lists** → Use bullet points with bold headers

### Verification Command

Check for remaining markdown tables:
```bash
grep -r "\|[-]{3,}\|" blog-repo/_posts/
```

---

## Screenshot Best Practices

### Available Screenshots

Located in `public/assets/screenshots/`:

| File | Use For |
|------|---------|
| `superlend-discover-all.png` | General market overview, protocol comparisons |
| `superlend-eth-markets.png` | ETH lending articles |
| `superlend-wbtc-markets.png` | WBTC/BTC lending articles |
| `superlend-vaults.png` | SuperFund, Loop Vaults, yield strategies |
| `superlend-markets-rates.png` | Markets page, rate comparisons |
| `superlend-dashboard.png` | General app overview |

### Taking New Screenshots

Use `agent-browser` for clean screenshots:

```bash
# Navigate and wait for load
agent-browser open https://app.superlend.xyz/discover
agent-browser wait --load networkidle

# Close any popups
agent-browser snapshot -i | grep -i close
agent-browser click @e46  # (use actual ref from snapshot)

# Scroll to show data (hide reward cards, show table)
agent-browser scroll down 350

# Filter if needed
agent-browser click @e17  # ETH filter
agent-browser click @e18  # BTC filter

# Take screenshot
agent-browser screenshot /path/to/screenshots/filename.png
```

### Screenshot Checklist

- [ ] No popup overlays (Access Gate, Cross-chain Deposits notification)
- [ ] Scrolled to show maximum data rows (not just header cards)
- [ ] Correct filter applied (Stablecoins, ETH, BTC)
- [ ] Clean URL bar not visible
- [ ] Current/realistic data visible
- [ ] **Content matches article** – screenshot must show protocol/asset discussed in the article
- [ ] **Protocol visible** – if discussing Morpho yields, Morpho must appear in screenshot

### Screenshot-Content Matching Rules

**CRITICAL:** Never post a screenshot that doesn't match the article content.

| Article Topic | Screenshot Must Show |
|---------------|---------------------|
| Morpho yields | Morpho protocol visible in the screenshot |
| cbETH lending | cbETH markets/positions visible |
| Arbitrum guide | Arbitrum chain selected |
| Stablecoin yields | Stablecoins filter applied |

**Verification:** Before publishing, verify each screenshot shows the protocol/asset/chain discussed in that section.

### Common Popups to Close

1. **"Cross-chain Deposits now live!"** - Bottom right notification
2. **"Missing the Old App?"** - Dialog with "Love the New App" button
3. **"Access Gate"** - Bottom center button (part of UI, usually OK to show)

---

## Product Messaging

### Unified App Language

**Old messaging (DON'T USE):**
> Visit [SuperFund](https://funds.superlend.xyz) to optimize your stablecoin yields

**New messaging:**
> Access SuperFund in the [Vaults section on Superlend](https://app.superlend.xyz/vaults) to optimize your stablecoin yields

**Old messaging (DON'T USE):**
> Try [Loop Vaults](https://loop.superlend.xyz/earn) for leveraged yield

**New messaging:**
> Explore Loop Vaults in the [Vaults section on Superlend](https://app.superlend.xyz/vaults) for leveraged yield

### Product Descriptions

- **SuperFund** - "Automated yield optimization for stablecoins" (in Vaults section)
- **Loop Vaults** - "Leveraged yield made simple" (in Vaults section)
- **Discover** - "Find the best rates across 350+ markets"
- **Markets** - "Direct access to lending protocols"

---

## Internal Linking Strategy

### Pillar Content

`/blog/complete-guide-to-defi-lending` is the pillar article. Link to it from all other posts.

### Link Mapping

| From Article | Link To |
|--------------|---------|
| Asset guides (USDC, ETH, WBTC) | complete-guide, is-defi-lending-safe |
| Protocol comparisons (Aave vs Compound) | understanding-lending-protocols, asset guides |
| Strategy articles | usdc-lending-guide, is-defi-lending-safe |
| Best yields articles | All asset guides |
| Safety/risk articles | complete-guide, specific asset guides |

### Link Format

```markdown
For a deeper understanding of how DeFi lending works, check out our
[complete guide to DeFi lending](/blog/complete-guide-to-defi-lending).
```

### Target: 2-3 Internal Links Per Post

Place links naturally within the content, typically:
- Early in the article (context setting)
- In relevant sections (cross-references)
- Near the end (further reading)

---

## Cover Images

### Display Fix

Cover images use different display modes:
- **Cards/Thumbnails**: `object-cover` (crops to fill)
- **Article page**: `object-contain` (shows full image)

This is configured in:
- `src/app/_components/cover-image.tsx`
- `src/app/_components/post-header.tsx`

### Cover Image Specs

- **Dimensions**: 1300x630px recommended
- **Format**: PNG or WebP
- **Location**: `/assets/blog/covers/`
- **Naming**: `article-slug.png`

### Frontmatter

```yaml
coverImage: "/assets/blog/covers/eth-lending-rates.png"
ogImage:
  url: "/assets/blog/covers/eth-lending-rates.png"
```

---

## Content Pillars

Distribution targets from brand guidelines:

| Pillar | % | Examples |
|--------|---|----------|
| Education | 40% | DeFi concepts, yield strategies, risk education |
| Product | 30% | Features, tutorials, updates |
| Thought Leadership | 20% | Market insights, builder updates |
| Community | 10% | Shoutouts, celebrations |

---

## SEO Checklist

### For Each New Article

- [ ] **Title**: Include primary keyword, under 60 characters
- [ ] **Excerpt**: Compelling summary with keyword, 150-160 characters
- [ ] **H1**: Match title, include keyword
- [ ] **H2s**: Include secondary keywords naturally
- [ ] **Internal links**: 2-3 links to related posts
- [ ] **External links**: Link to Superlend app with descriptive anchor text
- [ ] **Images**: Alt text describes content, includes keywords where natural
- [ ] **URL slug**: Short, keyword-rich, lowercase with hyphens

### Keyword Targets by Article Type

| Article Type | Primary Keywords |
|--------------|-----------------|
| Asset guides | "[asset] lending", "[asset] yield", "earn on [asset]" |
| Protocol comparisons | "[protocol] vs [protocol]", "best defi lending" |
| Strategy guides | "defi yield strategies", "stablecoin yield" |
| Educational | "what is defi lending", "how to earn yield" |

---

## Common Mistakes to Avoid

### Content

| Don't | Do Instead |
|-------|------------|
| Static APY numbers in tables | Screenshots or "view current rates" text |
| Old product URLs (funds., loop.) | Unified app.superlend.xyz URLs |
| "Visit SuperFund at..." | "Access SuperFund in the Vaults section..." |
| Generic CTAs | Specific CTAs with correct section links |
| Missing internal links | 2-3 relevant cross-links per post |

### Technical

| Don't | Do Instead |
|-------|------------|
| Markdown tables for rates | Screenshots or prose |
| Screenshots with popups | Close all overlays before capturing |
| Uncropped cover images | Use object-contain for article pages |
| Broken table syntax | Verify rendering in preview |
| Internal links with `/blog/` prefix | Use `/posts/` prefix (e.g., `/posts/usdc-lending-guide`) |
| Em dashes (—) | En dashes with spaces ( – ) for parenthetical breaks |
| Title over 60 characters | Keep titles under 60 chars for SEO |
| Excerpt under 150 characters | Aim for 150-160 chars for optimal SEO snippets |
| Outdated date references | Remove "As of [date]" or keep dates current |
| Positive use of "guaranteed" | Only use negatively: "not guaranteed", "no guarantees" |

### Protocol Accuracy

| Don't | Do Instead |
|-------|------------|
| "Morpho peer-to-peer matching" | "Morpho Blue" or "Morpho Vaults" |
| "Morpho Optimiser/Optimizer" | "Morpho Blue" (base layer) or "Morpho Vaults" (curated) |
| "Euler" without version | "Euler v2" |
| "Aave v1" or "Aave v2" for current products | "Aave v3" |
| Screenshot showing Aave when discussing Morpho | Screenshot must match content topic |
| Describing old/deprecated protocol versions | Use current versions only |

### Brand Voice (from CLAUDE.md)

| Don't | Do Instead |
|-------|------------|
| Financial advice language | Educational, informational tone |
| "Guaranteed returns", "risk-free" | Accurate risk disclaimers |
| Bashing competitors | Focus on Superlend's strengths |
| FOMO/urgency tactics | Educational value proposition |
| Rocket/moon emojis | Professional, minimal emoji use |

---

## Required Disclaimers

### For APY Mentions
> Rates are variable and subject to change. Past performance does not guarantee future results.

### For Investment Content
> Not financial advice. DeFi involves risks including smart contract vulnerabilities and impermanent loss. DYOR.

### For Leverage/Loop Vaults
> Leveraged positions carry additional risk of liquidation. Only use funds you can afford to lose.

---

## File Locations

```
blog-repo/
├── _posts/                    # Blog articles (markdown)
├── public/
│   └── assets/
│       ├── blog/covers/       # Cover images
│       └── screenshots/       # App screenshots
├── src/app/_components/       # React components
│   ├── cover-image.tsx        # Image display logic
│   ├── post-header.tsx        # Article header layout
│   └── post-preview.tsx       # Card/thumbnail layout
└── BLOG_GUIDELINES.md         # This file
```

---

## Commands Reference

### Build & Preview
```bash
npm run build          # Build static site
npm run dev            # Start dev server (localhost:3000)
```

### Content Verification
```bash
# Check for old URLs
grep -r "funds.superlend.xyz" _posts/
grep -r "loop.superlend.xyz" _posts/

# Check for broken internal links (must use /posts/ not /blog/)
grep -r "(/blog/" _posts/

# Check for broken tables
grep -r "\|[-]{3,}\|" _posts/

# Count app.superlend.xyz links
grep -c "app.superlend.xyz" _posts/*.md

# Check for em dashes (should use en dashes)
grep -r "—" _posts/

# Check for banned words used positively
grep -ri "guaranteed\|risk-free\|100x" _posts/

# Check for outdated date references
grep -ri "as of 202[0-4]\|as of early 202" _posts/

# Check for deprecated Morpho Optimiser references
grep -ri "peer-to-peer matching\|p2p matching\|optimiser\|optimizer" _posts/ | grep -i morpho

# Check for Euler without version
grep -r "Euler[^v ]" _posts/ | grep -v "Euler v2"

# Check for old Aave versions
grep -ri "aave v1\|aave v2" _posts/
```

### Frontmatter Validation
```bash
# Check title length (should be under 60 chars)
for f in _posts/*.md; do
  title=$(grep -m1 "^title:" "$f" | sed 's/title: "//;s/"$//')
  len=${#title}
  if [ $len -gt 60 ]; then
    echo "$f: Title is $len chars (over 60): $title"
  fi
done

# Check excerpt length (should be 150-160 chars)
for f in _posts/*.md; do
  excerpt=$(grep -m1 "^excerpt:" "$f" | sed 's/excerpt: "//;s/"$//')
  len=${#excerpt}
  if [ $len -lt 150 ] || [ $len -gt 170 ]; then
    echo "$f: Excerpt is $len chars (target 150-160)"
  fi
done
```

### External Link Validation (Anti-Phishing)

**IMPORTANT:** Always verify external protocol links against DeFiLlama's official database before publishing.

```bash
# Fetch official protocol URLs from DeFiLlama
curl -s "https://api.llama.fi/protocols" | jq -r '.[] | select(.name | test("PROTOCOL_NAME"; "i")) | "\(.name): \(.url)"'

# Example: Verify Aave, Morpho, Lido links
curl -s "https://api.llama.fi/protocols" | jq -r '.[] | select(.name | test("Aave|Morpho|Lido|Rocket Pool|Uniswap"; "i")) | "\(.name): \(.url)"'
```

**Approved External Link Domains:**

| Protocol | Official Domain | Docs Domain |
|----------|-----------------|-------------|
| Aave | aave.com | docs.aave.com |
| Morpho | morpho.org | docs.morpho.org |
| Lido | lido.fi | docs.lido.fi |
| Rocket Pool | rocketpool.net | docs.rocketpool.net |
| Uniswap | uniswap.org | docs.uniswap.org |
| Compound | compound.finance | docs.compound.finance |
| Arbitrum | arbitrum.io | docs.arbitrum.io |
| Base | base.org | docs.base.org |
| Ethereum | ethereum.org | - |
| Coinbase | coinbase.com | - |

**Never link to:**
- Unofficial mirrors or forks
- URLs not matching DeFiLlama database
- Shortened URLs (bit.ly, t.co, etc.)
- Social media links as primary sources

### Screenshot Workflow
```bash
agent-browser open https://app.superlend.xyz/discover
agent-browser wait --load networkidle
agent-browser snapshot -i | grep close
agent-browser click @[ref]           # Close popups
agent-browser scroll down 350        # Show table data
agent-browser screenshot output.png
```

---

## Related Documents

- **Brand Guidelines**: `/brand/` directory in main marketing repo
- **Content Templates**: `/templates/blog/` in main marketing repo
- **Original Fix Plan**: Session from 2026-01-29 covering URL consolidation, table fixes, screenshot updates

---

*Last updated: February 3, 2026*
