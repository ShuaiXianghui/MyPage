# 个人博客 — 设计文档

## 概述

基于 Next.js 静态生成 + Markdown 内容的个人博客，暖色系主题，侧边栏布局，沉浸式文章页面。

## 技术决策

| 层面 | 选择 | 原因 |
|------|------|------|
| 类型 | 静态网站 (SSG) | 无需服务器，速度快，Vercel 免费托管 |
| 框架 | Next.js 14+ App Router | 用户偏好，SSG 原生支持 |
| 内容管理 | Markdown + frontmatter | 简单、Git 版本控制 |
| 样式方案 | Tailwind CSS + 暖色主题 | 原子化 CSS，主题切换方便 |
| 首页布局 | 侧边栏（分类/标签）+ 文章列表 | 用户选择 |
| 文章页 | 沉浸式 Hero 头部 + 居中正文 | 用户选择 |
| 暗色模式 | 跟随系统 prefers-color-scheme | 自动适配，无需手动切换 |
| 搜索 | fuse.js 客户端搜索，构建时生成索引 | 无需后端 |
| 部署 | Vercel | 免费，Next.js 零配置 |

## 网站结构

```
/                          首页：侧边栏 + 文章列表
/posts/[slug]              文章详情：Hero 头部 + 正文
/categories/[name]         分类筛选页
/search                    全文搜索页
/about                     关于我页面
```

## 组件树

```
RootLayout（根布局）
├── Header（导航栏、搜索入口）
├── Sidebar（分类列表、标签云）
└── Main（主内容区）
    ├── HomePage（首页）
    │   └── ArticleList → ArticleCard[]
    ├── PostPage（文章详情）
    │   ├── HeroHeader（标题、日期、分类、标签）
    │   └── MDXBody（Markdown 渲染正文）
    ├── CategoryPage（分类页）
    │   └── ArticleList（按分类筛选）
    ├── SearchPage（搜索页）
    │   ├── SearchInput（搜索框）
    │   └── SearchResults（搜索结果）
    └── AboutPage（关于页）
```

## 数据流

```
/content/posts/*.md          ← 文章源文件
  ↓
lib/posts.ts                 ← 解析 frontmatter，读取内容
  ↓
generateStaticParams()       ← 构建时生成所有静态页面
  ↓
search-index.json            ← fuse.js 搜索索引（构建时生成）
```

## Markdown Frontmatter 格式

```yaml
---
title: "文章标题"
date: "2024-01-15"
category: "技术"
tags: ["nextjs", "教程"]
excerpt: "文章摘要描述"
---
```

## 配色方案

### 浅色模式（暖色系）
- 背景色：`#fef7ed` 奶油色
- 主文字：`#4a3728` 深棕
- 标题色：`#5c3d2e`
- 强调色：`#d4a574` 暖金
- 辅助文字：`#b8956a`

### 暗色模式（深棕暖调）
- 背景色：`#1e1b18`
- 主文字：`#d4c5b2`
- 标题色：`#e8d5c4`
- 强调色：`#d4a574`
- 辅助文字：`#a09080`

## 依赖

- `next` 14+
- `tailwindcss`
- `next-mdx-remote` — Markdown/MDX 渲染
- `fuse.js` — 客户端搜索
- `gray-matter` — frontmatter 解析
- TypeScript

## 移动端适配

- 侧边栏收起到底部抽屉菜单
- 文章列表单栏显示
- Hero 区域等比缩小
- 断点：768px

## 验证标准

1. `npm run build` 构建成功无错误
2. 5 个页面均能正常渲染
3. 系统切为暗色模式时网站自动跟随
4. 搜索能返回相关结果
5. 375px 宽度下移动端布局可用
6. 所有页面 Lighthouse 评分 ≥ 90
