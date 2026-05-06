import { getAllPosts } from "@/lib/posts";
import ArticleList from "@/components/ArticleList";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1
        className="text-xl font-bold mb-8"
        style={{ color: "var(--color-heading)" }}
      >
        最新文章
      </h1>
      <ArticleList posts={posts} />
    </div>
  );
}
