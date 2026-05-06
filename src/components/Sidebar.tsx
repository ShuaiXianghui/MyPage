import Link from "next/link";
import { getAllCategories, getAllTags } from "@/lib/posts";

export default function Sidebar() {
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <aside className="w-52 flex-shrink-0 hidden md:block">
      <div className="sticky top-14 pt-8">
        <div className="mb-8">
          <h3
            className="text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ color: "var(--color-muted)" }}
          >
            分类
          </h3>
          <ul className="space-y-1.5">
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/categories/${cat}`}
                  className="text-sm no-underline hover:opacity-70 transition-opacity"
                  style={{ color: "var(--color-text)" }}
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ color: "var(--color-muted)" }}
          >
            标签
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "var(--color-border)",
                  color: "var(--color-muted)",
                }}
              >
                {tag.name} ({tag.count})
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
