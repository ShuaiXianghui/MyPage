import Fuse from "fuse.js";
import { getAllPosts, PostMeta } from "./posts";

let fuseInstance: Fuse<PostMeta> | null = null;

function getFuse(): Fuse<PostMeta> {
  if (!fuseInstance) {
    const posts = getAllPosts();
    fuseInstance = new Fuse(posts, {
      keys: [
        { name: "title", weight: 0.4 },
        { name: "excerpt", weight: 0.3 },
        { name: "tags", weight: 0.2 },
        { name: "category", weight: 0.1 },
      ],
      threshold: 0.3,
      includeScore: true,
    });
  }
  return fuseInstance;
}

export interface SearchResult {
  post: PostMeta;
  score: number;
}

export function searchPosts(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const fuse = getFuse();
  const results = fuse.search(query.trim());

  return results
    .filter((r) => r.score !== undefined && r.score < 0.5)
    .map((r) => ({
      post: r.item,
      score: r.score!,
    }));
}
