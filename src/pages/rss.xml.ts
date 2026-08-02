import type { APIRoute } from "astro";
import { getPublishedPosts, postPath } from "../lib/posts";
import { SITE_CONFIG } from "../site.config";

const escapeXml = (value: string): string =>
  value.replace(/[<>&'"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[character]!);

export const GET: APIRoute = async ({ site }) => {
  const baseURL = site ?? new URL(SITE_CONFIG.url);
  const posts = await getPublishedPosts();
  const selfURL = new URL("/rss.xml", baseURL).href;
  const items = posts.map((post) => {
    const url = new URL(postPath(post), baseURL).href;
    return [
      "<item>",
      `<title>${escapeXml(post.data.title)}</title>`,
      `<link>${escapeXml(url)}</link>`,
      `<guid isPermaLink="true">${escapeXml(url)}</guid>`,
      `<pubDate>${post.data.date.toUTCString()}</pubDate>`,
      `<description>${escapeXml(post.data.description ?? "")}</description>`,
      "</item>",
    ].join("");
  }).join("");

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
    "<channel>",
    `<title>${escapeXml(SITE_CONFIG.title)}</title>`,
    `<link>${escapeXml(baseURL.href)}</link>`,
    `<description>${escapeXml(SITE_CONFIG.description)}</description>`,
    "<language>zh-CN</language>",
    `<atom:link href="${escapeXml(selfURL)}" rel="self" type="application/rss+xml"/>`,
    items,
    "</channel>",
    "</rss>",
  ].join("");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
};
