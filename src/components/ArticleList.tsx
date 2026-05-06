import { PostMeta } from "@/lib/posts";
import ArticleCard from "./ArticleCard";

export default function ArticleList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return (
      <div className="py-16 text-center" style={{ color: "var(--color-muted)" }}>
        暂无文章
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <ArticleCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
