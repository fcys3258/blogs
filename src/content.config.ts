import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/posts",
    generateId: ({ entry }) =>
      entry
        .replace(/\\/g, "/")
        .replace(/\/index\.md$/i, "")
        .replace(/\.md$/i, ""),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    demo: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts,
};

