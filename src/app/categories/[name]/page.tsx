import { getAllCategories, getPostsByCategory } from "@/lib/posts";
import ArticleList from "@/components/ArticleList";
import Link from "next/link";

export function generateStaticParams() {
  return getAllCategories().map((cat) => ({
    name: cat,
  }));
}

export default function CategoryPage({ params }: { params: { name: string } }) {
  const category = decodeURIComponent(params.name);
  const posts = getPostsByCategory(category);

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <Link
          href="/"
          className="text-sm no-underline hover:opacity-70"
          style={{ color: "var(--color-muted)" }}
        >
          首页
        </Link>
        <span style={{ color: "var(--color-muted)" }}>/</span>
        <span className="text-sm" style={{ color: "var(--color-heading)" }}>
          分类：{category}
        </span>
      </div>

      <h1
        className="text-xl font-bold mb-2"
        style={{ color: "var(--color-heading)" }}
      >
        {category}
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>
        共 {posts.length} 篇文章
      </p>

      <ArticleList posts={posts} />
    </div>
  );
}
