# Blog SEO Checklist Skill

## When to Use
Use this skill when creating, editing, or reviewing blog posts for the Superlend blog. This ensures every blog post meets SEO and quality standards before publishing.

## Blog Post Structure

### File Location & Naming
- Blog posts live in `_posts/` as `.md` files
- **Slugs MUST use hyphens**, never underscores or mixed case (e.g., `my-blog-post.md`)
- The filename becomes the URL slug: `/posts/my-blog-post`

### Required Frontmatter
Every blog post MUST have this frontmatter structure:

```yaml
---
title: "Descriptive Title Under 60 Characters for SEO"
excerpt: "Compelling 150-160 character description that serves as meta description"
coverImage: "/assets/blog/covers/slug-name.webp"
date: "YYYY-MM-DDTHH:mm:ss.sssZ"
modifiedDate: "YYYY-MM-DDTHH:mm:ss.sssZ"  # Optional, add when updating existing posts
published: true
category: "Guides"  # One of: Guides, Insights, Tutorials, News
author:
  name: "Superlend Team"
  picture: "/assets/blog/authors/superlend-team.png"
ogImage:
  url: "/assets/blog/covers/slug-name.webp"
---
```

### Frontmatter Validation Rules
1. **title**: Under 60 characters, keyword-rich, no trailing periods
2. **excerpt**: 150-160 characters, serves as meta description — make it compelling for search results
3. **coverImage** and **ogImage.url**: Must point to the same WebP file in `/assets/blog/covers/`
4. **date**: ISO 8601 format with timezone
5. **modifiedDate**: Set this when editing an existing post (used for `dateModified` in JSON-LD and `og:modified_time`)
6. **published**: Must be `true` for the post to appear on the site
7. **category**: Must match one of the TinaCMS options: `Guides`, `Insights`, `Tutorials`, `News`

### Cover Images
- Format: **WebP only** (not PNG or JPG) — target under 200KB
- Location: `public/assets/blog/covers/`
- Filename must match the post slug with hyphens (e.g., `my-blog-post.webp`)
- Recommended dimensions: 1200x630px (optimal for OG sharing)

### Content Best Practices
1. Start with an H2 (`##`), never H1 — the title serves as H1
2. Use proper heading hierarchy: H2 → H3 → H4 (never skip levels)
3. Include internal links to other blog posts where relevant (helps SEO cross-linking)
4. Keep paragraphs short (3-4 sentences max)
5. Use descriptive alt text if embedding images within content

### Category Mapping
The TinaCMS schema (`tina/config.ts`) and TypeScript types (`src/interfaces/post.ts`) both define categories. If adding a new category:
1. Add to `options` array in `tina/config.ts` (line ~71)
2. Add to `BLOG_CATEGORIES` in `src/interfaces/post.ts` (line ~4)
3. Run `tinacms build` to regenerate `tina/tina-lock.json`
4. Commit the updated lock file

### SEO Architecture (for reference)
- **RSS Feed**: Auto-generated at `/feed.xml` from all published posts
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **JSON-LD**: `BlogPosting` + `BreadcrumbList` schema on every post page
- **Homepage Schema**: `CollectionPage` with `ItemList` on homepage
- **Site Schema**: `Organization` + `WebSite` in root layout
- **Related Posts**: 3 posts from same category shown at bottom of each post
- **ISR**: Pages revalidate every hour (`revalidate = 3600`)

### Pre-Publish Checklist
Before marking a post as published, verify:
- [ ] Slug uses hyphens only, all lowercase
- [ ] Title under 60 characters
- [ ] Excerpt is 150-160 characters
- [ ] Cover image is WebP, under 200KB, in correct path
- [ ] `coverImage` and `ogImage.url` paths match
- [ ] Category is one of the valid options
- [ ] Content starts with H2, proper heading hierarchy
- [ ] `published: true` is set
- [ ] No broken internal links
