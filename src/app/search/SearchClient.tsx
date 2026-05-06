"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { PostMeta } from "@/lib/posts";
import ArticleCard from "@/components/ArticleCard";

interface SearchResult {
  post: PostMeta;
  score: number;
}

export default function SearchClient({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: [
          { name: "title", weight: 0.4 },
          { name: "excerpt", weight: 0.3 },
          { name: "tags", weight: 0.2 },
          { name: "category", weight: 0.1 },
        ],
        threshold: 0.3,
        includeScore: true,
      }),
    [posts]
  );

  const results: SearchResult[] = useMemo(() => {
    if (!query.trim()) return [];
    return fuse
      .search(query.trim())
      .filter((r) => r.score !== undefined && r.score < 0.5)
      .map((r) => ({
        post: r.item,
        score: r.score!,
      }));
  }, [query, fuse]);

  function handleSearch(value: string) {
    setQuery(value);
    if (value.trim()) {
      setSearched(true);
    } else {
      setSearched(false);
    }
  }

  return (
    <div>
      <h1
        className="text-xl font-bold mb-6"
        style={{ color: "var(--color-heading)" }}
      >
        搜索文章
      </h1>

      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="输入关键词搜索..."
        className="w-full max-w-md px-4 py-2.5 rounded-lg border text-sm outline-none transition-shadow focus:ring-2"
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text)",
          borderColor: "var(--color-border)",
          "--tw-ring-color": "var(--color-accent)"
        } as React.CSSProperties}
        autoFocus
      />

      <div className="mt-8">
        {searched && results.length === 0 && (
          <p style={{ color: "var(--color-muted)" }}>
            未找到匹配 &ldquo;{query}&rdquo; 的文章
          </p>
        )}

        {results.map((r) => (
          <ArticleCard key={r.post.slug} post={r.post} />
        ))}
      </div>
    </div>
  );
}
