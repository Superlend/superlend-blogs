import { defineConfig } from "tinacms";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "development";

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
      static: false,
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "_posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Guides", "Insights", "Tutorials", "News"],
          },
          {
            type: "object",
            name: "author",
            label: "Author",
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "image", name: "picture", label: "Picture" },
            ],
          },
          {
            type: "object",
            name: "ogImage",
            label: "OG Image",
            fields: [{ type: "image", name: "url", label: "URL" }],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/posts/${document._sys.filename}`,
        },
      },
    ],
  },
});
