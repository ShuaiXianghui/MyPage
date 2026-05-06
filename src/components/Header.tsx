import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold no-underline"
          style={{ color: "var(--color-heading)" }}
        >
          My Blog
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="no-underline hover:opacity-70 transition-opacity"
            style={{ color: "var(--color-text)" }}
          >
            首页
          </Link>
          <Link
            href="/search"
            className="no-underline hover:opacity-70 transition-opacity"
            style={{ color: "var(--color-text)" }}
          >
            搜索
          </Link>
          <Link
            href="/about"
            className="no-underline hover:opacity-70 transition-opacity"
            style={{ color: "var(--color-text)" }}
          >
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
}
