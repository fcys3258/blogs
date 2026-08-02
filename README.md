# 数值笔记

部署在 [zephyrise.cn](https://zephyrise.cn) 的计算数学静态博客。项目使用 Astro、Markdown、KaTeX 和 Plotly；推送到 GitHub 后由 Vercel 自动构建并发布。

## 本地开发

需要 Node.js 22.12 或更高版本。

```bash
npm ci
npm run dev
```

提交前运行：

```bash
npm run check
npm run build
```

## 添加文章

复制 `src/content/posts/_template.md`，或在 `src/content/posts/<slug>/index.md` 新建文件：

```md
---
title: "文章标题"
date: 2026-08-02
tags: ["数值分析"]
description: "用于列表、搜索和 SEO 的简短摘要"
draft: false
---

## 第一节

正文支持 Markdown 和 LaTeX：

$$
f''(x) \approx \frac{f(x+h)-f(x-h)}{2h}.
$$
```

文件夹名会成为文章 URL。设置 `draft: true` 后，文章不会进入页面、搜索索引、RSS 或 sitemap。

如需在文末加载交互实验，添加：

```yaml
demo: "FiniteDifferenceDemo"
```

该名称必须对应 `src/components/demos/FiniteDifferenceDemo.astro`；名称错误会让构建失败，以免静默发布缺失的实验。

## 自动部署

Vercel 已关联 GitHub 仓库和 `zephyrise.cn`。向生产分支推送后，Vercel 会执行 `npm run build` 并自动更新站点。域名和 DNS 继续在 Vercel 控制台管理；代码中的 `site` 用于 canonical URL、Open Graph、RSS 和 sitemap。

## 主要目录

- `src/content/posts/`：Markdown 文章
- `src/components/demos/`：文章交互实验
- `src/pages/`：首页、文章、标签、搜索和 XML 端点
- `src/site.config.ts`：站点名称、作者和分页等配置
- `public/`：头像、图标和 robots.txt
