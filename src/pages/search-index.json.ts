import { formatPostDate } from "../lib/dates";
import { getPublishedPosts } from "../lib/posts";

export async function GET() {
  const posts = await getPublishedPosts();
  const index = posts
    .map((post) => ({
      title: post.data.title,
      id: post.id,
      date: formatPostDate(post.data.date),
      tags: post.data.tags,
      description: post.data.description || "",
      body: post.body ?? "",
    }));

  return new Response(JSON.stringify(index), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
