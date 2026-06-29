import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { excerpt } from './src/remark.mjs'
import markdoc from '@astrojs/markdoc';
import sveltia from "astro-loader-sveltia-cms";

export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    sitemap(),
    markdoc(),
    sveltia({
      // Find docs here https://sveltiacms.app/llms.txt
      route: "/cms",
      title: "My Custom CMS",
      config: {
        backend: {
          name: "github",
          repo: "barrycburton/astro-site-test",
          branch: "main",
        },

        media_folder: "/public/uploads",
        public_folder: "/public",
        editor: { preview: false, },

        singletons: [
          {
            name: "settings",
            label: "Site Settings",
            file: "src/content/settings.yaml",
            fields: [
              { label: "Site Title", name: "site_title" },
              { label: "Description", name: "description", widget: "text" },
            ],
          },
        ],
        
        collections: [
          {
            name: "newsletter",
            label: "Newsletter",
            folder: "src/content/newsletter",
            create: true,
            sortable_fields: ["title", "date"],
            preview_path: "/newsletter/{{slug}}/",
            preview_path_date_field: "date",
            fields: [
              { label: "Title", name: "title", widget: "string", required: "true" },
              { label: "Date", name: "date", widget: "datetime" },
              {
                label: "Draft",
                name: "draft",
                widget: "boolean",
                default: true,
              },
              {
                name: "categories",
                label: "Categories",
                widget: "list",
              },
              {
                label: "Image",
                name: "image",
                widget: "image",
                required: false,
              },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
          {
            name: "work",
            label: "Work",
            folder: "src/content/work",
            create: true,
            sortable_fields: ["title", "date"],
            preview_path: "/work/{{slug}}/",
            preview_path_date_field: "date",
            fields: [
              { label: "Title", name: "title", widget: "string", required: "true" },
              { label: "Date", name: "date", widget: "datetime" },
              {
                label: "Featured",
                name: "featured",
                widget: "boolean",
                default: false,
              },
              {
                name: "categories",
                label: "Categories",
                widget: "list",
              },
              {
                label: "Image",
                name: "image",
                widget: "image",
                required: true,
              },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
        ],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [excerpt],
  },
});





// @ts-check
import { defineConfig } from "astro/config";




