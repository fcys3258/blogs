import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  // Canonical production URL. Vercel handles DNS and deployments.
  site: 'https://zephyrise.cn',
  base: '/',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  // Plotly's basic bundle is intentionally lazy-loaded by demo pages (~984 kB).
  vite: {
    build: { chunkSizeWarningLimit: 1100 },
  },
});
