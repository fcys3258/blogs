# 计算数学博客 · 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 搭建一个基于 Astro 的计算数学个人博客，支持 Markdown + LaTeX 渲染、标签分类、文章末尾嵌入 Plotly.js 交互式数值实验。

**Architecture:** Astro 静态站点，内容通过 Content Collections 管理，KaTeX 服务端渲染数学公式，Plotly.js 客户端渲染交互图表。交互组件通过 Astro Island (`client:load`) 嵌入文章底部，与正文 Markdown 分离。

**Tech Stack:** Astro 4, KaTeX (remark-math + rehype-katex), Plotly.js (CDN), vanilla CSS (极简现代 B 风格)

---

## 文件结构

```
blogs/
├── astro.config.mjs                  # Astro 配置 + KaTeX 插件
├── package.json                      # 依赖声明
├── tsconfig.json                     # TypeScript 配置
├── .gitignore                        # 忽略 node_modules, dist
├── src/
│   ├── env.d.ts                      # Astro 类型声明
│   ├── content/
│   │   ├── config.ts                 # Content Collection schema 定义
│   │   └── posts/
│   │       └── finite-difference/
│   │           └── index.md          # 示例文章：有限差分精度分析
│   ├── layouts/
│   │   └── BaseLayout.astro          # 全局布局：<html> + <head> + Header + Footer
│   ├── pages/
│   │   ├── index.astro               # 首页：文章列表 + 标签筛选
│   │   ├── tags/
│   │   │   └── [tag].astro           # 标签筛选页
│   │   └── posts/
│   │       └── [...slug].astro       # 文章详情页（含交互区）
│   ├── components/
│   │   ├── Header.astro              # 顶栏导航
│   │   ├── ArticleCard.astro         # 首页文章卡片
│   │   ├── TagBadge.astro            # 标签徽章
│   │   └── demos/
│   │       └── FiniteDifferenceDemo.astro  # 有限差分数值实验组件
│   └── styles/
│       └── global.css                # 全局样式（B 风格）
├── public/
│   └── favicon.svg                   # 网站图标
└── design-overview.html              # 设计概览（已存在，供参考）
```

---

### Task 1: 初始化 Astro 项目并安装依赖

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `astro.config.mjs`
- Create: `src/env.d.ts`
- Create: `.gitignore`

- [ ] **Step 1: 创建 package.json**

```json
{
  "name": "numerical-notes",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.0",
    "astro": "^4.16.0",
    "katex": "^0.16.0",
    "rehype-katex": "^7.0.0",
    "remark-math": "^6.0.0",
    "typescript": "^5.5.0"
  }
}
```

- [ ] **Step 2: 安装依赖**

Run: `npm install`

- [ ] **Step 3: 创建 tsconfig.json**

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

- [ ] **Step 4: 创建 astro.config.mjs**

```javascript
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://yourname.github.io',
  base: '/numerical-notes',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
```

- [ ] **Step 5: 创建 src/env.d.ts**

```typescript
/// <reference path="../.astro/types.d.ts" />
```

- [ ] **Step 6: 创建 .gitignore**

```
node_modules/
dist/
.astro/
```

- [ ] **Step 7: 提交**

```bash
git init
git add -A
git commit -m "chore: init Astro project with KaTeX and content deps"
```

---

### Task 2: 配置 Content Collections

**Files:**
- Create: `src/content/config.ts`

- [ ] **Step 1: 创建 Content Collection schema**

```typescript
import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    demo: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
```

- [ ] **Step 2: 提交**

```bash
git add src/content/config.ts
git commit -m "feat: add content collection schema for posts"
```

---

### Task 3: 全局样式（B 风格 · 极简现代风）

**Files:**
- Create: `src/styles/global.css`

- [ ] **Step 1: 创建 global.css**

```css
/* === Reset & Base === */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #ffffff;
  --bg-soft: #f7f8fa;
  --text: #1a1a1a;
  --text-muted: #666666;
  --text-light: #999999;
  --border: #e8e8e8;
  --border-light: #f0f0f0;
  --accent: #333333;
  --accent-bg: #f5f5f5;
  --code-bg: #f4f4f5;
  --demo-bg: #fafafa;
  --max-width: 680px;
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans SC", sans-serif;
  --font-mono: "SF Mono", "Fira Code", "Consolas", monospace;
}

body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

/* === Typography === */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.3;
  color: #111;
}

h1 { font-size: 1.75rem; margin-bottom: 0.5rem; }
h2 { font-size: 1.35rem; margin: 2rem 0 0.75rem; }
h3 { font-size: 1.15rem; margin: 1.5rem 0 0.5rem; }

p { margin-bottom: 1rem; color: var(--text); }

a {
  color: #2563eb;
  text-decoration: none;
}
a:hover { text-decoration: underline; }

strong { font-weight: 600; color: #111; }

blockquote {
  border-left: 3px solid var(--border);
  padding: 0.5rem 0 0.5rem 1rem;
  margin: 1.25rem 0;
  color: var(--text-muted);
}

/* === Code === */
code {
  font-family: var(--font-mono);
  font-size: 0.875em;
  background: var(--code-bg);
  padding: 0.15em 0.35em;
  border-radius: 3px;
}

pre {
  background: #1e1e2e;
  color: #cdd6f4;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  overflow-x: auto;
  margin: 1.25rem 0;
  font-size: 0.85rem;
  line-height: 1.6;
}
pre code {
  background: none;
  padding: 0;
  color: inherit;
}

/* === KaTeX === */
.katex-display {
  margin: 1.25rem 0;
  overflow-x: auto;
  overflow-y: hidden;
}

/* === Table === */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.9rem;
}
th, td {
  text-align: left;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid var(--border);
}
th { font-weight: 600; color: var(--text-muted); font-size: 0.8rem; }

/* === Article body (Markdown rendered content) === */
.article-body {
  font-size: 0.95rem;
  line-height: 1.85;
  color: var(--text);
}
.article-body p {
  margin-bottom: 1rem;
}

/* === Demo section (at end of article) === */
.demo-section {
  margin-top: 2.5rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}
.demo-heading {
  background: var(--bg-soft);
  padding: 0.85rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-bottom: 1px solid var(--border);
  margin: 0;
}
.demo-body {
  padding: 1.25rem;
}

/* === Utility === */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}
```

- [ ] **Step 2: 提交**

```bash
git add src/styles/global.css
git commit -m "feat: add global styles (B style - minimal modern)"
```

---

### Task 4: BaseLayout 布局组件

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/Header.astro`

- [ ] **Step 1: 创建 Header.astro**

```astro
---
export interface Props {
  title?: string;
}

const { title = "📐 数值笔记" } = Astro.props;
---

<header class="header">
  <div class="header-inner">
    <a href="/" class="brand">{title}</a>
    <nav class="nav">
      <a href="/">文章</a>
      <a href="/tags">标签</a>
    </nav>
  </div>
</header>

<style>
  .header {
    border-bottom: 1px solid var(--border-light);
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(8px);
    z-index: 100;
  }
  .header-inner {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.85rem 1.5rem;
  }
  .brand {
    font-weight: 700;
    font-size: 1rem;
    color: #111;
    text-decoration: none;
  }
  .brand:hover { text-decoration: none; }
  .nav {
    display: flex;
    gap: 1.25rem;
  }
  .nav a {
    font-size: 0.85rem;
    color: var(--text-muted);
    text-decoration: none;
  }
  .nav a:hover { color: var(--text); }
</style>
```

- [ ] **Step 2: 创建 BaseLayout.astro**

```astro
---
import Header from "../components/Header.astro";
import "../styles/global.css";

export interface Props {
  title?: string;
  description?: string;
}

const { title, description } = Astro.props;
const pageTitle = title ? `${title} · 数值笔记` : "数值笔记";
---

<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{pageTitle}</title>
    {description && <meta name="description" content={description} />}
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
  </head>
  <body>
    <Header />
    <main>
      <slot />
    </main>
    <footer class="footer">
      <div class="footer-inner">
        <span>&copy; {new Date().getFullYear()} 数值笔记</span>
      </div>
    </footer>
  </body>
</html>

<style>
  .footer {
    margin-top: 4rem;
    padding: 1.5rem 0;
    border-top: 1px solid var(--border-light);
  }
  .footer-inner {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1.5rem;
    font-size: 0.8rem;
    color: var(--text-light);
  }
</style>
```

- [ ] **Step 3: 提交**

```bash
git add src/components/Header.astro src/layouts/BaseLayout.astro
git commit -m "feat: add BaseLayout and Header with B-style design"
```

---

### Task 5: 创建 public 资源

**Files:**
- Create: `public/favicon.svg`

- [ ] **Step 1: 创建 favicon.svg**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <text y="80" font-size="80">📐</text>
</svg>
```

- [ ] **Step 2: 提交**

```bash
git add public/favicon.svg
git commit -m "feat: add favicon"
```

---

### Task 6: 首页 — 文章列表

**Files:**
- Create: `src/components/ArticleCard.astro`
- Create: `src/components/TagBadge.astro`
- Create: `src/pages/index.astro`

- [ ] **Step 1: 创建 TagBadge.astro**

```astro
---
const { tag } = Astro.props;
---

<a href={`/tags/${tag}`} class="tag-badge">{tag}</a>

<style>
  .tag-badge {
    display: inline-block;
    font-size: 0.7rem;
    color: var(--text-muted);
    background: var(--accent-bg);
    padding: 0.15em 0.55em;
    border-radius: 4px;
    text-decoration: none;
    line-height: 1.5;
  }
  .tag-badge:hover {
    background: #e0e0e0;
    color: var(--text);
    text-decoration: none;
  }
</style>
```

- [ ] **Step 2: 创建 ArticleCard.astro**

```astro
---
import TagBadge from "./TagBadge.astro";

export interface Props {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  description?: string;
}

const { title, date, slug, tags, description } = Astro.props;
const formattedDate = date.toISOString().slice(0, 10);
---

<article class="card">
  <a href={`/posts/${slug}`} class="card-link">
    <h2 class="card-title">{title}</h2>
  </a>
  <div class="card-meta">
    <time datetime={formattedDate}>{formattedDate}</time>
    {tags.length > 0 && (
      <span class="card-tags">
        {tags.map((tag) => <TagBadge tag={tag} />)}
      </span>
    )}
  </div>
  {description && <p class="card-desc">{description}</p>}
</article>

<style>
  .card {
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--border-light);
  }
  .card:first-child {
    padding-top: 0;
  }
  .card-link { text-decoration: none; }
  .card-link:hover { text-decoration: none; }
  .card-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: #111;
    margin-bottom: 0.35rem;
    transition: color 0.15s;
  }
  .card-link:hover .card-title { color: #2563eb; }
  .card-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.8rem;
    color: var(--text-light);
    margin-bottom: 0.25rem;
  }
  .card-tags {
    display: flex;
    gap: 0.35rem;
    flex-wrap: wrap;
  }
  .card-desc {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 0.4rem;
    margin-bottom: 0;
  }
</style>
```

- [ ] **Step 3: 创建首页 index.astro**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import ArticleCard from "../components/ArticleCard.astro";
import { getCollection } from "astro:content";

const allPosts = await getCollection("posts");
const posts = allPosts
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

// Collect all unique tags
const allTags = [...new Set(posts.flatMap((p) => p.data.tags))].sort();
---

<BaseLayout description="计算数学学习笔记">
  <div class="container">
    <section class="hero">
      <h1 class="hero-title">数值笔记</h1>
      <p class="hero-sub">计算数学学习笔记 · 理论推导 + 交互式数值实验</p>
    </section>

    {allTags.length > 0 && (
      <nav class="tag-filter">
        <a href="/" class="tag-filter-item active">全部</a>
        {allTags.map((tag) => (
          <a href={`/tags/${tag}`} class="tag-filter-item">{tag}</a>
        ))}
      </nav>
    )}

    <section class="post-list">
      {posts.length === 0 ? (
        <p class="empty">还没有文章，开始写第一篇吧 ✍️</p>
      ) : (
        posts.map((post) => (
          <ArticleCard
            title={post.data.title}
            date={post.data.date}
            slug={post.slug}
            tags={post.data.tags}
            description={post.data.description}
          />
        ))
      )}
    </section>
  </div>
</BaseLayout>

<style>
  .hero {
    padding: 3rem 0 1.5rem;
  }
  .hero-title {
    font-size: 2rem;
    margin-bottom: 0.35rem;
  }
  .hero-sub {
    color: var(--text-light);
    font-size: 0.95rem;
  }
  .tag-filter {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-light);
    margin-bottom: 0.5rem;
  }
  .tag-filter-item {
    font-size: 0.8rem;
    color: var(--text-muted);
    text-decoration: none;
    padding: 0.2rem 0.65rem;
    border-radius: 4px;
    background: var(--accent-bg);
  }
  .tag-filter-item:hover,
  .tag-filter-item.active {
    background: var(--accent);
    color: white;
    text-decoration: none;
  }
  .post-list {
    padding: 0.5rem 0 2rem;
  }
  .empty {
    padding: 3rem 0;
    color: var(--text-light);
    text-align: center;
  }
</style>
```

- [ ] **Step 4: 提交**

```bash
git add src/components/TagBadge.astro src/components/ArticleCard.astro src/pages/index.astro
git commit -m "feat: add homepage with article list and tag filter"
```

---

### Task 7: 文章详情页（含交互实验区）

**Files:**
- Create: `src/pages/posts/[...slug].astro`

- [ ] **Step 1: 创建文章页 [...slug].astro**

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import TagBadge from "../../components/TagBadge.astro";
import { getCollection, type CollectionEntry } from "astro:content";

export async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

type Props = {
  post: CollectionEntry<"posts">;
};

const { post } = Astro.props;
const { Content } = await post.render();
const { title, date, tags, demo } = post.data;
const formattedDate = date.toISOString().slice(0, 10);

// Dynamically load demo component if specified in frontmatter
let DemoComponent: any = null;
if (demo) {
  const modules = import.meta.glob<{ default: any }>(
    "../../components/demos/*.astro",
    { eager: true }
  );
  const matchKey = Object.keys(modules).find((key) =>
    key.endsWith(`/${demo}.astro`)
  );
  if (matchKey) {
    DemoComponent = modules[matchKey]!.default;
  }
}
---

<BaseLayout title={title} description={post.data.description}>
  <div class="container">
    <article class="article">
      <header class="article-header">
        <h1 class="article-title">{title}</h1>
        <div class="article-meta">
          <time datetime={formattedDate}>{formattedDate}</time>
          {tags.length > 0 && (
            <span class="article-tags">
              {tags.map((tag) => <TagBadge tag={tag} />)}
            </span>
          )}
        </div>
      </header>

      <div class="article-body">
        <Content />
      </div>
    </article>

    {DemoComponent && (
      <div class="demo-section">
        <h2 class="demo-heading">🧪 实验区</h2>
        <div class="demo-body">
          <DemoComponent client:load />
        </div>
      </div>
    )}

    <nav class="back-nav">
      <a href="/">&larr; 返回文章列表</a>
    </nav>
  </div>
</BaseLayout>

<style>
  .article {
    padding: 2.5rem 0 1rem;
  }
  .article-header {
    margin-bottom: 2rem;
  }
  .article-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #111;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }
  .article-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.82rem;
    color: var(--text-light);
  }
  .article-tags {
    display: flex;
    gap: 0.35rem;
  }
  .back-nav {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-light);
  }
  .back-nav a {
    font-size: 0.85rem;
    color: var(--text-muted);
  }
</style>
```

- [ ] **Step 2: 提交**

```bash
git add src/pages/posts/\[...slug\].astro
git commit -m "feat: add article page with dynamic demo loading"
```

---

### Task 8: 标签筛选页

**Files:**
- Create: `src/pages/tags/[tag].astro`

- [ ] **Step 1: 创建标签页 [tag].astro**

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import ArticleCard from "../../components/ArticleCard.astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const posts = await getCollection("posts");
  const allTags = [...new Set(posts.flatMap((p) => p.data.tags))];
  return allTags.map((tag) => ({
    params: { tag },
    props: { tag },
  }));
}

const { tag } = Astro.props;
const allPosts = await getCollection("posts");
const posts = allPosts
  .filter((p) => p.data.tags.includes(tag))
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
---

<BaseLayout title={`#${tag}`}>
  <div class="container">
    <section class="tag-header">
      <h1>#{tag}</h1>
      <p>{posts.length} 篇文章</p>
    </section>

    <section class="post-list">
      {posts.map((post) => (
        <ArticleCard
          title={post.data.title}
          date={post.data.date}
          slug={post.slug}
          tags={post.data.tags}
          description={post.data.description}
        />
      ))}
    </section>

    <nav class="back-nav">
      <a href="/">&larr; 返回首页</a>
    </nav>
  </div>
</BaseLayout>

<style>
  .tag-header {
    padding: 2.5rem 0 1rem;
  }
  .tag-header h1 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }
  .tag-header p {
    color: var(--text-light);
    font-size: 0.9rem;
  }
  .post-list {
    padding: 0.5rem 0 1rem;
  }
  .back-nav {
    padding: 1.5rem 0 3rem;
    border-top: 1px solid var(--border-light);
  }
  .back-nav a {
    font-size: 0.85rem;
    color: var(--text-muted);
  }
</style>
```

- [ ] **Step 2: 提交**

```bash
git add src/pages/tags/\[tag\].astro
git commit -m "feat: add tag filter page"
```

---

### Task 9: 创建示例文章 — 有限差分精度分析

**Files:**
- Create: `src/content/posts/finite-difference/index.md`

- [ ] **Step 1: 创建示例文章 index.md**

```markdown
---
title: "有限差分格式的精度分析"
date: 2024-03-20
tags: ["有限差分", "数值分析"]
description: "分析向前差分、向后差分和中心差分格式的截断误差与收敛阶，并通过数值实验验证理论预测。"
demo: "FiniteDifferenceDemo"
---

对一阶导数 $f'(x)$ 的数值逼近是有限差分方法的核心。本文从 Taylor 展开出发，分析三种基本差分格式的截断误差，并通过数值实验直观展示不同格式的收敛速度差异。

## 差分格式的定义

令 $h > 0$ 为步长，在点 $x$ 处定义：

$$
\begin{aligned}
\text{向前差分：}\quad D_+ f(x) &= \frac{f(x+h)-f(x)}{h} \\[4pt]
\text{向后差分：}\quad D_- f(x) &= \frac{f(x)-f(x-h)}{h} \\[4pt]
\text{中心差分：}\quad D_0 f(x) &= \frac{f(x+h)-f(x-h)}{2h}
\end{aligned}
$$

## 截断误差分析

### 向前差分

将 $f(x+h)$ 在 $x$ 处作 Taylor 展开：

$$
f(x+h) = f(x) + h f'(x) + \frac{h^2}{2} f''(x) + \frac{h^3}{6} f'''(\xi_+)
$$

代入向前差分的定义：

$$
\frac{f(x+h)-f(x)}{h} = f'(x) + \frac{h}{2} f''(x) + O(h^2)
$$

因此，向前差分的截断误差为：

$$
\tau_+ = \left| D_+ f(x) - f'(x) \right| = \frac{h}{2} |f''(x)| + O(h^2) = O(h)
$$

该格式具有 **一阶精度**。

### 向后差分

类似地，将 $f(x-h)$ 展开：

$$
f(x-h) = f(x) - h f'(x) + \frac{h^2}{2} f''(x) - \frac{h^3}{6} f'''(\xi_-)
$$

得到：

$$
\tau_- = \left| D_- f(x) - f'(x) \right| = \frac{h}{2} |f''(x)| + O(h^2) = O(h)
$$

向后差分同样具有 **一阶精度**。

### 中心差分

将 $f(x+h)$ 与 $f(x-h)$ 的展开式相减：

$$
f(x+h) - f(x-h) = 2h f'(x) + \frac{2h^3}{6} f'''(x) + O(h^5)
$$

整理得：

$$
\tau_0 = \left| D_0 f(x) - f'(x) \right| = \frac{h^2}{6} |f'''(x)| + O(h^4) = O(h^2)
$$

中心差分格式具有 **二阶精度**，收敛速度远快于单侧差分。

## 收敛阶的数值验证

对于具有足够光滑性的函数 $f$，当步长 $h \to 0$ 时，误差与 $h$ 满足幂律关系：

$$
\log(\text{error}) \approx C + p \cdot \log(h)
$$

其中 $p$ 即为收敛阶。在双对数坐标系下，误差曲线的斜率即为 $p$。

> **实验提示：** 在下方实验区选择测试函数，观察不同差分格式在双对数图（$\log h$ vs $\log$ error）中的表现。向前/向后差分的斜率约为 $1$，中心差分的斜率约为 $2$。
```

- [ ] **Step 2: 提交**

```bash
git add src/content/posts/finite-difference/index.md
git commit -m "feat: add sample article on finite difference accuracy"
```

---

### Task 10: 创建交互式 Demo — 有限差分数值实验

**Files:**
- Create: `src/components/demos/FiniteDifferenceDemo.astro`

该组件使用 Plotly.js（CDN 加载）在浏览器中渲染。`client:load` 确保组件仅在客户端运行。

- [ ] **Step 1: 创建 FiniteDifferenceDemo.astro**

```astro
---
// This component runs client-side only (client:load)
---

<div id="fd-demo-root">
  <div class="controls">
    <label class="control-group">
      <span class="control-label">测试函数</span>
      <select id="fd-func-select">
        <option value="sin">f(x) = sin(x)</option>
        <option value="exp">f(x) = eˣ</option>
        <option value="cubic">f(x) = x³</option>
      </select>
    </label>
    <label class="control-group">
      <span class="control-label">求值点 x₀ =</span>
      <input id="fd-x0" type="number" value="1.0" step="0.1" />
    </label>
    <div class="control-group">
      <span class="control-label">差分格式</span>
      <div class="format-btns">
        <button class="format-btn" data-format="forward">向前</button>
        <button class="format-btn active" data-format="central">中心</button>
        <button class="format-btn" data-format="backward">向后</button>
      </div>
    </div>
  </div>
  <div id="fd-plot" class="plot-container"></div>
  <p class="plot-note">横轴: log₁₀(h) · 纵轴: log₁₀(error) · 斜率 = 收敛阶 p</p>
</div>

<script>
  function initFiniteDifferenceDemo() {
    const funcSelect = document.getElementById("fd-func-select");
    const x0Input = document.getElementById("fd-x0");
    const formatBtns = document.querySelectorAll("#fd-demo-root .format-btn");
    const plotDiv = document.getElementById("fd-plot");

    let currentFormat = "central";

    // Define test functions and their exact derivatives
    const functions = {
      sin: {
        f: (x) => Math.sin(x),
        df: (x) => Math.cos(x),
        name: "sin(x)",
      },
      exp: {
        f: (x) => Math.exp(x),
        df: (x) => Math.exp(x),
        name: "eˣ",
      },
      cubic: {
        f: (x) => x * x * x,
        df: (x) => 3 * x * x,
        name: "x³",
      },
    };

    // Finite difference formulas
    function forwardDiff(f, x, h) {
      return (f(x + h) - f(x)) / h;
    }
    function backwardDiff(f, x, h) {
      return (f(x) - f(x - h)) / h;
    }
    function centralDiff(f, x, h) {
      return (f(x + h) - f(x - h)) / (2 * h);
    }

    const diffMethods = {
      forward: { fn: forwardDiff, label: "向前差分 Forward" },
      backward: { fn: backwardDiff, label: "向后差分 Backward" },
      central: { fn: centralDiff, label: "中心差分 Central" },
    };

    function computeErrors(funcKey, x0, format) {
      const { f, df } = functions[funcKey];
      const exact = df(x0);
      const diffFn = diffMethods[format].fn;

      // h from 10^0 down to 10^-14
      const hs = [];
      const errors = [];
      for (let exp = 0; exp >= -14; exp -= 0.2) {
        const h = Math.pow(10, exp);
        const approx = diffFn(f, x0, h);
        const error = Math.abs(approx - exact);
        hs.push(h);
        errors.push(error);
      }
      return { hs, errors };
    }

    function updatePlot() {
      const funcKey = funcSelect.value;
      const x0 = parseFloat(x0Input.value) || 1.0;
      const { hs, errors } = computeErrors(funcKey, x0, currentFormat);
      const { label } = diffMethods[currentFormat];

      const logH = hs.map((h) => Math.log10(h));
      const logErr = errors.map((e) => Math.max(e, 1e-16)).map((e) => Math.log10(e));

      // Compute slope reference lines
      const h1 = [1, 1e-1];
      const errO1 = h1.map((h) => 0.1 * h);
      const errO2 = h1.map((h) => 0.05 * h * h);

      const traceMain = {
        x: logH,
        y: logErr,
        type: "scatter",
        mode: "lines+markers",
        name: label,
        line: { color: "#2563eb", width: 2 },
        marker: { size: 3 },
      };

      const traceO1 = {
        x: [0, -4],
        y: [-1, -5],
        type: "scatter",
        mode: "lines",
        name: "斜率 1 O(h)",
        line: { color: "#e94560", width: 1.5, dash: "dash" },
      };

      const traceO2 = {
        x: [0, -4],
        y: [-1, -9],
        type: "scatter",
        mode: "lines",
        name: "斜率 2 O(h²)",
        line: { color: "#22c55e", width: 1.5, dash: "dash" },
      };

      const layout = {
        xaxis: {
          title: "log₁₀(h)",
          zeroline: false,
          gridcolor: "#f0f0f0",
        },
        yaxis: {
          title: "log₁₀(error)",
          zeroline: false,
          gridcolor: "#f0f0f0",
        },
        margin: { l: 50, r: 30, t: 20, b: 50 },
        legend: {
          x: 0.02,
          y: 0.02,
          xanchor: "left",
          yanchor: "bottom",
          bgcolor: "rgba(255,255,255,0.9)",
          bordercolor: "#e0e0e0",
          font: { size: 11 },
        },
        height: 380,
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(0,0,0,0)",
      };

      const config = {
        responsive: true,
        displayModeBar: true,
        modeBarButtonsToRemove: ["lasso2d", "select2d"],
        displaylogo: false,
      };

      Plotly.newPlot(plotDiv, [traceMain, traceO1, traceO2], layout, config);
    }

    // Event listeners
    funcSelect.addEventListener("change", updatePlot);
    x0Input.addEventListener("change", updatePlot);

    formatBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        formatBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentFormat = btn.dataset.format;
        updatePlot();
      });
    });

    // Load Plotly from CDN then render
    if (window.Plotly) {
      updatePlot();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdn.plot.ly/plotly-2.32.0.min.js";
      script.onload = updatePlot;
      document.head.appendChild(script);
    }
  }

  // Run when component mounts
  initFiniteDifferenceDemo();
</script>

<style>
  #fd-demo-root {
    font-size: 0.85rem;
  }
  .controls {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    align-items: flex-end;
  }
  .control-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .control-label {
    font-size: 0.72rem;
    color: var(--text-muted);
  }
  .control-group select,
  .control-group input {
    padding: 0.35rem 0.6rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 0.82rem;
    font-family: inherit;
    background: #fff;
  }
  .format-btns {
    display: flex;
    gap: 0.25rem;
  }
  .format-btn {
    padding: 0.3rem 0.7rem;
    border: 1px solid var(--border);
    border-radius: 5px;
    font-size: 0.78rem;
    font-family: inherit;
    color: var(--text-muted);
    background: #fff;
    cursor: pointer;
    transition: all 0.15s;
  }
  .format-btn:hover {
    border-color: #999;
  }
  .format-btn.active {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
  }
  .plot-container {
    width: 100%;
  }
  .plot-note {
    font-size: 0.72rem;
    color: var(--text-light);
    margin-top: 0.25rem;
    text-align: center;
  }
</style>
```

- [ ] **Step 2: 提交**

```bash
git add src/components/demos/FiniteDifferenceDemo.astro
git commit -m "feat: add finite difference convergence demo with Plotly.js"
```

---

### Task 11: 构建验证

- [ ] **Step 1: 运行开发服务器检查编译**

```bash
npm run dev
```
Expected: 服务器在 `http://localhost:4321` 启动，无编译错误。

- [ ] **Step 2: 运行生产构建**

```bash
npm run build
```
Expected: 构建成功，输出到 `dist/` 目录。

- [ ] **Step 3: 检查构建产物**

```bash
ls dist/
```
Expected: 包含 `index.html`、`posts/`、`tags/` 目录。

- [ ] **Step 4: 提交最终版本**

```bash
git add -A
git commit -m "chore: finalize initial blog setup"
```
```

---

### 计划自检

**1. Spec 覆盖:**
- ✅ Markdown + LaTeX 渲染 — Task 1 (remark-math + rehype-katex), Task 9 (示例文章)
- ✅ 文章列表 + 标签系统 — Task 6 (首页), Task 8 (标签页)
- ✅ 文末交互实验区 — Task 7 (文章页 demo 加载), Task 10 (示例 demo)
- ⏭ 深色模式 — P1，后续迭代
- ⏭ RSS 订阅 — P1，后续迭代
- ⏭ 全文搜索 — P2，后续迭代

**2. Placeholder 扫描:** 无 TBD/TODO，所有代码完整。

**3. 类型一致性:**
- Content collection schema (Task 2) 定义了 `title`, `date`, `tags`, `description`, `demo` → Task 9 的 frontmatter 使用了全部字段
- `[...slug].astro` (Task 7) 读取 `post.data.demo` → 与 schema 匹配
- `demo: "FiniteDifferenceDemo"` → Task 7 的 glob 匹配 `FiniteDifferenceDemo.astro` → 文件名一致
- CSS 变量 (Task 3) 命名一致，所有组件引用 `var(--xxx)` 的变量名均在 `:root` 中定义
