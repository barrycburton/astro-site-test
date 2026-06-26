import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    cover: z.string().url(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
  title: z.string(),
  date: z.coerce.date(),
  cover: z.string().url(),
  tags: z.array(z.string()).default([]),
  summary: z.string(),
  url: z.string().url().optional(),
  }),
});

export const collections = { posts, work };
