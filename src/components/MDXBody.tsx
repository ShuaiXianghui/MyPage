function markdownToHtml(markdown: string): string {
  const lines = markdown.split("\n");
  const htmlLines: string[] = [];
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks
    if (line.trimStart().startsWith("```")) {
      if (inCodeBlock) {
        htmlLines.push(`<pre><code>${escapeHtml(codeBlockContent.join("\n"))}</code></pre>`);
        codeBlockContent = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }

    // Skip empty lines (they separate blocks)
    if (line.trim() === "") {
      continue;
    }

    // Headings
    if (line.startsWith("### ")) {
      htmlLines.push(`<h3>${escapeHtml(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith("## ")) {
      htmlLines.push(`<h2>${escapeHtml(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith("# ")) {
      htmlLines.push(`<h1>${escapeHtml(line.slice(2))}</h1>`);
      continue;
    }

    // Blockquotes
    if (line.startsWith("> ")) {
      htmlLines.push(`<blockquote>${parseInline(line.slice(2))}</blockquote>`);
      continue;
    }

    // Unordered list
    if (line.match(/^- /)) {
      htmlLines.push(`<li>${parseInline(line.slice(2))}</li>`);
      continue;
    }

    // Ordered list
    if (line.match(/^\d+\. /)) {
      const content = line.replace(/^\d+\. /, "");
      htmlLines.push(`<li>${parseInline(content)}</li>`);
      continue;
    }

    // Regular paragraph
    htmlLines.push(`<p>${parseInline(line)}</p>`);
  }

  // Close any unclosed code block
  if (inCodeBlock) {
    htmlLines.push(`<pre><code>${escapeHtml(codeBlockContent.join("\n"))}</code></pre>`);
  }

  // Wrap consecutive <li> elements in <ul> or <ol>
  return wrapLists(htmlLines.join("\n"));
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function parseInline(text: string): string {
  // Bold: **text**
  text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  // Inline code: `code`
  text = text.replace(/`(.+?)`/g, "<code>$1</code>");
  // Links: [text](url)
  text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  // Escape HTML entities in non-code parts
  return text;
}

function wrapLists(html: string): string {
  // Group consecutive <li> into <ul>
  const ulWrapped = html.replace(/((?:<li>.*?<\/li>\n?)+)/g, (match) => {
    // Check inner content for ordered items
    return `<ul>\n${match.trim()}\n</ul>`;
  });
  return ulWrapped;
}

export default function MDXBody({ content }: { content: string }) {
  const html = markdownToHtml(content);

  return (
    <div
      className="prose-custom"
      style={{ color: "var(--color-text)", lineHeight: 1.8 }}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
