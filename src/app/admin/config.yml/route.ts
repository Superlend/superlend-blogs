import { NextResponse } from "next/server";

/**
 * Serve Decap CMS config.yml via API route
 * This works around Next.js not serving .yml files from public/
 */
export async function GET() {
  const config = `# Decap CMS Configuration for Superlend Blog
# Documentation: https://decapcms.org/docs/

backend:
  name: github
  repo: Tezsure/superlend-blogs
  branch: development
  base_url: /api
  auth_endpoint: auth

media_folder: "public/assets/blog/covers"
public_folder: "/assets/blog/covers"

site_url: https://superlend-blogs-git-development-superlend-devs.vercel.app/
display_url: https://superlend-blogs-git-development-superlend-devs.vercel.app/

# Logo for the CMS (optional)
logo_url: /assets/blog/authors/superlend-team.png

collections:
  - name: "posts"
    label: "Blog Posts"
    label_singular: "Blog Post"
    folder: "_posts"
    create: true
    slug: "{{slug}}"
    extension: "md"
    format: "frontmatter"
    sortable_fields: ["date", "title"]
    summary: "{{title}} - {{date}}"
    
    fields:
      - label: "Title"
        name: "title"
        widget: "string"
        required: true
        hint: "The main headline of your blog post"

      - label: "Excerpt"
        name: "excerpt"
        widget: "text"
        required: true
        hint: "A brief description shown on blog cards (1-2 sentences)"

      - label: "Cover Image"
        name: "coverImage"
        widget: "image"
        required: true
        hint: "Main image displayed at the top of the post"
        media_folder: "/public/assets/blog/covers"
        public_folder: "/assets/blog/covers"

      - label: "Publication Date"
        name: "date"
        widget: "datetime"
        required: true
        date_format: "YYYY-MM-DD"
        time_format: "HH:mm"
        format: "YYYY-MM-DDTHH:mm:ss.SSSZ"

      - label: "Category"
        name: "category"
        widget: "select"
        required: true
        options:
          - "DeFi Basics"
          - "Yield Strategies"
          - "Product Updates"
          - "Guides"
        hint: "Choose the most relevant category for this post"

      - label: "Author"
        name: "author"
        widget: "object"
        fields:
          - label: "Name"
            name: "name"
            widget: "string"
            default: "Superlend Team"
          - label: "Picture"
            name: "picture"
            widget: "image"
            default: "/assets/blog/authors/superlend-team.png"
            media_folder: "/public/assets/blog/authors"
            public_folder: "/assets/blog/authors"

      - label: "OG Image"
        name: "ogImage"
        widget: "object"
        collapsed: true
        fields:
          - label: "URL"
            name: "url"
            widget: "image"
            hint: "Image for social media sharing (uses cover image if not set)"
            media_folder: "/public/assets/blog/covers"
            public_folder: "/assets/blog/covers"

      - label: "Body"
        name: "body"
        widget: "markdown"
        required: true
        hint: "The main content of your blog post"
`;

  return new NextResponse(config, {
    headers: {
      "Content-Type": "text/yaml",
    },
  });
}
