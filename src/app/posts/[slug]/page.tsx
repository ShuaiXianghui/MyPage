import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import HeroHeader from "@/components/HeroHeader";
import MDXBody from "@/components/MDXBody";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <HeroHeader
        title={post.title}
        date={post.date}
        category={post.category}
        tags={post.tags}
      />
      <div className="max-w-2xl mx-auto mt-8">
        <MDXBody content={post.content} />
      </div>
    </article>
  );
}
