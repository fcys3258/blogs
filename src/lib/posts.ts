import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export function postPath(postOrId: Post | string): string {
  const id = typeof postOrId === "string" ? postOrId : postOrId.id;
  const encodedId = id
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `/posts/${encodedId}/`;
}

export function tagPath(tag: string): string {
  return `/tags/${encodeURIComponent(tag)}/`;
}

