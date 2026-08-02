import type { APIRoute } from "astro";
import { getPublishedPosts, postPath, tagPath } from "../lib/posts";
import { SITE_CONFIG } from "../site.config";

const escapeXml = (value: string): string =>
  value.replace(/[<>&'"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[character]!);

interface SitemapEntry {
  path: string;
  lastmod?: string;
}

export const GET: APIRoute = async ({ site }) => {
  const baseURL = site ?? new URL(SITE_CONFIG.url);
  const posts = await getPublishedPosts();
  const tags = [...new Set(posts.flatMap((post) => post.data.tags))];

  const entries: SitemapEntry[] = [
    ...["/", "/search/", "/rss.xml"].map((path) => ({ path })),
    ...tags.map((tag) => ({ path: tagPath(tag) })),
    ...posts.map((post) => ({
      path: postPath(post),
      lastmod: post.data.date.toISOString(),
    })),
  ];

  const urls = entries.map(({ path, lastmod }) => {
    const location = escapeXml(new URL(path, baseURL).href);
    const modified = lastmod ? `<lastmod>${lastmod}</lastmod>` : "";
    return `<url><loc>${location}</loc>${modified}</url>`;
  }).join("");

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    urls,
    "</urlset>",
  ].join("");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
};
