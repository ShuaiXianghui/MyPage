export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <h1
        className="text-xl font-bold mb-6"
        style={{ color: "var(--color-heading)" }}
      >
        关于我
      </h1>

      <div
        className="text-sm leading-relaxed space-y-4"
        style={{ color: "var(--color-text)" }}
      >
        <p>
          你好，欢迎来到我的个人博客。我是一个热爱技术和写作的开发者。
        </p>
        <p>
          在这里我会分享编程经验、技术教程、项目心得以及生活中的思考。
          写作帮助我更好地整理知识，也希望这些内容对你有帮助。
        </p>
        <p>
          如果你对文章有任何想法或建议，欢迎通过以下方式联系我。
        </p>
      </div>

      <div className="mt-10 pt-6 border-t" style={{ borderColor: "var(--color-border)" }}>
        <h2
          className="text-base font-semibold mb-3"
          style={{ color: "var(--color-heading)" }}
        >
          联系方式
        </h2>
        <ul className="text-sm space-y-2" style={{ color: "var(--color-muted)" }}>
          <li>GitHub: github.com/yourusername</li>
          <li>Email: yourname@example.com</li>
        </ul>
      </div>
    </div>
  );
}
