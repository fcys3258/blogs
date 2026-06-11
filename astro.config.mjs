import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  // TODO: 部署前修改为实际域名和路径
  // site: 'https://yourname.github.io',
  // base: '/your-repo-name',
  site: 'http://localhost:4321',
  base: '/',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
