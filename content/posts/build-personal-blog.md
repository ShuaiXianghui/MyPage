---
title: "如何从零搭建个人博客网站"
date: "2026-04-20"
category: "教程"
tags: ["Next.js", "前端", "教程"]
excerpt: "使用 Next.js 和 Markdown 从零构建一个完全静态的个人博客，并免费部署到 Vercel。"
---

## 为什么选择 Next.js？

Next.js 提供了优秀的静态生成（SSG）能力，配合 Markdown 管理内容，可以实现极快的页面加载和良好的 SEO。

### 核心优势

1. **静态生成**：构建时生成所有 HTML，首屏极快
2. **Markdown 友好**：丰富的 MDX 生态
3. **免费部署**：Vercel 提供慷慨的免费额度
4. **React 生态**：所有 React 组件和库都能用

## 项目结构

```bash
blog/
├── content/posts/     # Markdown 文章
├── src/
│   ├── app/           # 页面路由
│   ├── components/    # 共享组件
│   └── lib/           # 工具函数
```

## 关键步骤

1. 初始化 Next.js 项目
2. 配置 Tailwind CSS 主题
3. 编写文章解析层 (`gray-matter`)
4. 创建页面路由和组件
5. 添加搜索功能 (`fuse.js`)
6. 部署到 Vercel

> 搭建个人博客是每个开发者都值得做的事。它不仅是你的数字名片，也是最好的学习项目。

祝搭建愉快！
