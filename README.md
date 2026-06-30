# Portfolio + Newsletter with CMS

- Astro static site front end
- SveltiaCMS single page site back end for WYSIWYG managment

## TODO
- Clean up CSS
- Fix image sizing (mainly heights) on various pages
- Fix main page on mobile
- Add JS to randomize order of content on main page
- Add Github action to build and deploy to Cloudflare Worker
- optimize size of uploaded images
- customize SveltiaCMS logo and title
- Add Component for Contact form
- Add Component for MailChimp newsletter signup form
- Add Mailchimp RSS integration for Newsletter
- Move Sveltia config out of Astro config into a dedicated config file
- Create custom Github App to handle Sveltia authentication (https://github.com/sveltia/sveltia-cms-auth)

Based on Self Esteem (Astro Template), magazine-style editorial template built with [Astro](https://astro.build). Original layout by [Aysenur Turk](https://codepen.io/TurkAysenur/pen/gOmMgpx), re-implemented here as a full project.

## Quick start

Scaffold a new project from this template:

```bash
# npm
npm create astro@latest -- --template m-durana/self-esteem-astro

# pnpm
pnpm create astro@latest --template m-durana/self-esteem-astro

# yarn
yarn create astro --template m-durana/self-esteem-astro

# bun
bun create astro@latest --template m-durana/self-esteem-astro
```

Or use the "Use template" button in the top right or clone directly:

```bash
git clone https://github.com/m-durana/self-esteem-astro.git
cd self-esteem-astro
npm install
```

Then:

```bash
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
```

## Features

- Full-viewport magazine homepage (`/`)
- `/newsletter` index + `/newsletter/[slug]` MDX post pages with prev/next
- `/categories/[category]` pages generated from post frontmatter
- `/about`, `/work` (data-driven), `/404`
- RSS at `/rss.xml`, OG/Twitter meta in `BaseLayout`
- `PageLayout` + `_template.astro.example` for creating new pages

## Structure

```
src/
├── components/      Menu, Footer, PortfolioItem, Sidebar, StickyHeader
├── content/         newsletter/ (md+mdx), work/
├── content.config.ts
├── layouts/         BaseLayout, PageLayout
├── pages/           index, newsletter/, categories/, about, work, 404, rss.xml
└── styles/global.scss
```

See [STYLEGUIDE.md](STYLEGUIDE.md) for tokens, type scale, and a guide for staying on-brand.

## Authoring a post

Drop a `.md` or `.mdx` file in `src/content/newsletter/`:

```md
---
title: 'Your Article Title'
bigTitle: 'Main Title'
emphasis: 'Word' # optional, italicised inside the headline
headline: 'Sharing The {emphasis} Acclaim About Motivation'
excerpt: 'Teaser shown on the image and in /blog.'
author: 'Jane Doe'
date: 2026-01-01
image: 'https://images.unsplash.com/...'
categories: ['attention', 'quiet']
pageNumber: 'NO. 01' # optional, used by the sticky header
---

Long-form body.
```

Sidebar entries (`src/content/newsletter/`) and portfolio items (`src/content/work/`) use smaller schemas; see `content.config.ts`.

## Adding a subpage

Copy `src/pages/_template.astro.example` to `src/pages/<name>.astro`, edit the props, add a link in `src/components/Menu.astro` if it should appear in nav.

## License

MIT License. Original CodePen layout © Aysenur Turk
