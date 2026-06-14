import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("posts");
  const index = posts
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((post) => ({
      title: post.data.title,
      slug: post.slug,
      date: post.data.date.toISOString().slice(0, 10),
      tags: post.data.tags,
      description: post.data.description || "",
    }));

  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
}
