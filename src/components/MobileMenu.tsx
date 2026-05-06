"use client";

import { useState } from "react";
import Link from "next/link";
import { getAllCategories, getAllTags } from "@/lib/posts";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <>
      <button
        className="md:hidden text-sm"
        style={{ color: "var(--color-muted)" }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "关闭" : "菜单"}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-sm"
              style={{ color: "var(--color-muted)" }}
              onClick={() => setOpen(false)}
            >
              关闭
            </button>
          </div>

          <nav className="px-6 pt-8">
            <div className="mb-8">
              <h3
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: "var(--color-muted)" }}
              >
                分类
              </h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/categories/${encodeURIComponent(cat)}`}
                      className="text-base no-underline"
                      style={{ color: "var(--color-text)" }}
                      onClick={() => setOpen(false)}
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
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="text-sm px-3 py-1 rounded-full"
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
          </nav>
        </div>
      )}
    </>
  );
}
