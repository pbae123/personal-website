import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/Some Thoughts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    year: z.number(),
    order: z.number().optional(),
    semester: z.string().optional(),
    github: z.string().url().optional(),
    demos: z.array(z.object({ url: z.string(), label: z.string() })).optional(),
  }),
});

export const collections = { blog, projects };
