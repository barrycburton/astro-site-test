import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const newsletter = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/newsletter' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    categories: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    categories: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    inmenu: z.boolean().default(true),
  }),
});

const settings = defineCollection({
  loader: file('./src/content/settings.yaml'),
  schema: z.string(),
});

export const collections = { newsletter, work, pages, settings };
