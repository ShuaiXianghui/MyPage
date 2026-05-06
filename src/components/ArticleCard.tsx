import Link from "next/link";
import { PostMeta } from "@/lib/posts";

export default function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <article className="pb-6 mb-6 border-b" style={{ borderColor: "var(--color-border)" }}>
      <Link
        href={`/posts/${post.slug}`}
        className="no-underline hover:opacity-80 transition-opacity"
      >
        <h2
          className="text-lg font-semibold mb-1.5"
          style={{ color: "var(--color-heading)" }}
        >
          {post.title}
        </h2>
      </Link>

      <div className="flex items-center gap-3 text-xs mb-2" style={{ color: "var(--color-muted)" }}>
        <time>{post.date}</time>
        <span>·</span>
        <Link
          href={`/categories/${encodeURIComponent(post.category)}`}
          className="no-underline hover:opacity-70"
          style={{ color: "var(--color-muted)" }}
        >
          {post.category}
        </Link>
      </div>

      <p className="text-sm leading-relaxed m-0" style={{ color: "var(--color-text)" }}>
        {post.excerpt}
      </p>

      <div className="flex gap-1.5 mt-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: "var(--color-border)",
              color: "var(--color-muted)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
