import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const katexMacros = {
  // Average integral. KaTeX does not include the esint package's \fint command.
  '\\fint':
    '\\mathop{\\rlap{\\raisebox{0.18em}{\\hspace{0.18em}\\scriptsize-}}\\int}\\nolimits',
};

export default defineConfig({
  // Canonical production URL. Vercel handles DNS and deployments.
  site: 'https://zephyrise.cn',
  base: '/',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { macros: katexMacros }]],
    }),
  },
  // Plotly's basic bundle is intentionally lazy-loaded by demo pages (~984 kB).
  vite: {
    build: { chunkSizeWarningLimit: 1100 },
  },
});
