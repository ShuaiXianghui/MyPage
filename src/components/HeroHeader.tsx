import Link from "next/link";

interface HeroHeaderProps {
  title: string;
  date: string;
  category: string;
  tags: string[];
}

export default function HeroHeader({ title, date, category, tags }: HeroHeaderProps) {
  return (
    <div
      className="rounded-xl px-6 py-10 -mx-4"
      style={{
        background: "linear-gradient(135deg, #e8d5c4, #d4a574)",
      }}
    >
      <div className="text-center">
        <p className="text-sm m-0 mb-3" style={{ color: "rgba(255,255,255,0.85)" }}>
          <time>{date}</time>
          <span className="mx-2">·</span>
          <Link
            href={`/categories/${encodeURIComponent(category)}`}
            className="no-underline hover:opacity-80"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {category}
          </Link>
        </p>

        <h1
          className="text-2xl md:text-3xl font-bold m-0 mx-auto"
          style={{ color: "#fff", maxWidth: "600px", lineHeight: 1.3 }}
        >
          {title}
        </h1>

        <div className="flex justify-center gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                backgroundColor: "rgba(255,255,255,0.25)",
                color: "#fff",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
