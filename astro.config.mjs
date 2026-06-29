import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { excerpt } from './src/remark.mjs'
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap(), markdoc()],
  markdown: {
    remarkPlugins: [excerpt],
  },
});