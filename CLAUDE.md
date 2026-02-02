# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SuperLend Blog - A DeFi educational content platform for the SuperLend ecosystem (non-custodial DeFi lending aggregator). Live at https://blog.superlend.xyz

## Build Commands

```bash
npm run dev      # TinaCMS + Next.js dev server (Turbopack) at localhost:3000
npm run build    # Production build (tinacms build && next build)
npm start        # Start production server
```

## Architecture

**Stack:** Next.js 16 (App Router) + TinaCMS (Git-backed headless CMS) + Tailwind CSS + Amplitude Analytics

**Key directories:**
- `_posts/*.md` - Blog content (markdown with YAML frontmatter)
- `src/app/posts/[slug]/` - Dynamic post pages (server + client components)
- `src/app/admin/` - TinaCMS admin panel at `/admin`
- `src/lib/` - Utilities: markdown processing, reading time, heading extraction
- `src/components/` - React components
- `public/assets/blog/` - Cover images (1300x630px) and author photos
- `public/assets/screenshots/` - App screenshots for articles
- `tina/config.ts` - CMS schema (post fields, categories)

**Data flow:** Markdown files → TinaCMS client → Server components → Remark/Rehype pipeline → HTML

**Post frontmatter fields:** title, excerpt, coverImage, date, published, category (Guides/Insights/Tutorials/News), author, ogImage, body

## Content Guidelines (from BLOG_GUIDELINES.md)

**URL standards - all product links use unified app:**
- `app.superlend.xyz/vaults` (NOT funds.superlend.xyz or loop.superlend.xyz)
- `app.superlend.xyz/discover` for rate discovery
- Internal links use `/posts/` prefix (NOT `/blog/`)

**Writing style:**
- Lead with conclusions, answer main question in first 1-2 sentences
- Superlend is a "non-custodial DeFi lending aggregator" - state once per article
- Include 1-2 quotable definitions per article (bold key sentence)
- Decision-oriented framing (help users choose, not just understand)

**Avoid:**
- Generic AI filler ("Let's dive in", "At its core", "You've come to the right place")
- Static APY numbers in tables (use screenshots or descriptive text instead)
- Yield hype or implied guarantees

**Verification commands:**
```bash
grep -r "funds.superlend.xyz" _posts/    # Should return nothing
grep -r "loop.superlend.xyz" _posts/     # Should return nothing
grep -r "(/blog/" _posts/                # Should return nothing (use /posts/)
```

## Environment Variables

Required:
- `NEXT_PUBLIC_TINA_CLIENT_ID` - TinaCMS client ID
- `TINA_TOKEN` - TinaCMS auth token
- `NEXT_PUBLIC_AMPLITUDE_API_KEY` - Analytics

## Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json)
