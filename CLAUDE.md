# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 开发指导原则

- **语言**: 所有交互使用中文
- **移动端优先**: 始终从移动端视角设计和开发
  - 布局紧凑，避免大面积留白
  - 按钮/点击区域最小高度 44px
  - 注意屏幕下端内容被遮挡问题
- **渐进式开发**: 需求 → UI 设计 → 用户确认 → 开发 → 测试
- **组件化思维**: 避免单文件过大，合理拆分组件和样式文件
- **测试规范**:
  - 使用 Playwright MCP 测试，每个页面开发完成后必须测试
  - 测试文件独立存放于 `tests/YYYYMMDD_HHMMSS/` 格式的时间戳文件夹
- **完整性**: 对用户提出的每条修改要求都必须逐一检查落实

---

## 项目概述

个人 AI 数字化底座 - 移动端优先的个人门户网站，用于展示 AI 实战专家人设、私域流量转化和商业变现。

---

## 技术栈

| 类别 | 技术选型 | 版本 |
|------|----------|------|
| 框架 | Next.js (App Router) | 14.2.x |
| 语言 | TypeScript | 5.x |
| 样式 | Tailwind CSS | 3.4.x |
| 组件库 | Shadcn/ui | 最新 |
| 图标 | Lucide React | 0.469.x |
| 通知 | Sonner | 1.7.x |
| 部署 | Vercel | - |

---

## 快速开始（项目复现指南）

### 1. 环境要求
- Node.js >= 18.0.0
- npm >= 8.0.0
- Git

### 2. 初始化项目
```bash
# 创建 Next.js 项目 (必须使用 Next.js 14，不要用 15/16)
npx create-next-app@14 personal-ai-hub --typescript --tailwind --eslint --app --src-dir --no-import-alias

# 进入项目目录
cd personal-ai-hub
```

### 3. 安装依赖
```bash
# 安装核心依赖
npm install next-themes sonner lucide-react

# 安装 Shadcn/ui 依赖
npm install @radix-ui/react-dialog @radix-ui/react-slot
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate
```

### 4. 配置 Shadcn/ui
创建 `src/lib/utils.ts`:
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 5. 创建目录结构
```bash
mkdir -p src/components/ui
mkdir -p src/components/layout
mkdir -p src/components/home
mkdir -p src/components/prompts
mkdir -p src/components/blog
mkdir -p src/components/tools
mkdir -p src/config
mkdir -p src/data
mkdir -p src/types
```

### 6. 配置文件

**tailwind.config.ts** - 当前项目配置 (已包含完整的 Shadcn/ui 颜色系统):
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px", // 注意：实际配置为 1400px
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
```

**tsconfig.json** - 路径别名配置:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
使用 `@/` 导入模块,例如: `import { Button } from "@/components/ui/button"`

**components.json** - Shadcn/ui 配置 (new-york 风格):
```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide"
}
```

---

## 项目架构说明

### 目录结构
```
src/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 根布局(包含 Navbar, Footer, FAB, Toaster)
│   ├── page.tsx           # 首页
│   ├── prompts/           # 提示词库
│   ├── flashcards/        # 教育闪卡(含播放页)
│   ├── tutorials/         # AI教程(含播放页)
│   ├── apps/              # H5应用(含播放页)
│   ├── blog/              # 知识库(含文章详情)
│   ├── tools/             # 工具集(含播放页)
│   └── about/             # 关于我
├── components/
│   ├── ui/                # Shadcn/ui 基础组件(Button, Dialog, Sheet等)
│   ├── layout/            # 布局组件(Navbar, Footer, FAB)
│   ├── home/              # 首页组件(Hero, GridNav, LatestFeed)
│   ├── prompts/           # 提示词相关组件
│   ├── blog/              # 博客相关组件
│   └── tools/             # 工具相关组件
├── config/
│   └── site.ts            # 站点配置(siteConfig, navItems)
├── data/                  # 静态JSON数据文件
│   ├── prompts.json       # 提示词数据
│   ├── flashcards.json    # 闪卡数据
│   ├── tutorials.json     # 教程数据
│   ├── apps.json          # H5应用数据
│   ├── tools.json         # 工具数据
│   └── posts.json         # 博客文章数据
├── types/
│   └── index.ts           # TypeScript 类型定义
└── lib/
    └── utils.ts           # 工具函数(cn函数用于合并Tailwind类名)
```

### 核心设计模式

**1. 数据驱动架构**
- 所有内容数据都存储在 `src/data/*.json` 文件中
- 页面组件从 JSON 文件读取数据进行渲染
- 内容更新只需修改 JSON,无需改动代码
- **优势**:
  - 内容与代码分离，非技术人员可更新内容
  - 版本控制友好，所有变更可追溯
  - 构建时类型检查，保证数据一致性

**2. 静态站点生成 (SSG)**
- 项目配置为静态导出 (`output: 'export'` in next.config.mjs)
- 所有页面在构建时预渲染为静态 HTML
- **优势**: 极快的加载速度、零服务器成本、易于部署到 CDN/Vercel
- **限制**: 无法使用服务端运行时功能 (API Routes, ISR 等)
- **图片处理**: `next/image` 已配置 `unoptimized: true` 以支持静态导出

**3. 统一的播放/详情页模式**
- 使用动态路由 `[id]` 或 `[slug]` 处理详情页
- 支持 `iframe` 和 `link` 两种类型:
  - `iframe`: 内嵌展示(闪卡、教程、应用、工具)
  - `link`: 外部跳转

**4. 布局复用**
- `src/app/layout.tsx` 定义全局布局
- 包含: Navbar(导航栏) + Main(内容区) + Footer(页脚) + FAB(悬浮按钮) + Toaster(通知)
- 所有页面自动继承此布局

**5. 响应式设计**
- 移动端优先(Mobile-First)
- 使用 Tailwind CSS 的响应式断点
- 移动端: 汉堡菜单 + 紧凑布局
- 桌面端: 水平导航 + 宽松布局

---

## 数据文件速查

| 内容类型 | 文件路径 | 接口类型 |
|---------|---------|---------|
| 提示词 | `src/data/prompts.json` | `Prompt[]` |
| 教育闪卡 | `src/data/flashcards.json` | `Flashcard[]` |
| AI教程 | `src/data/tutorials.json` | `Tutorial[]` |
| H5应用 | `src/data/apps.json` | `App[]` |
| 工具集 | `src/data/tools.json` | `Tool[]` |
| 博客文章 | `src/data/posts.json` | `BlogPost[]` |
| 站点配置 | `src/config/site.ts` | `SiteConfig` |
| 导航菜单 | `src/config/site.ts` | `NavItem[]` |

---

## 核心页面路由

| 页面 | 路由 | 说明 |
|------|------|------|
| 首页 | `/` | 个人卡片 + 2x2 功能宫格 |
| 提示词库 | `/prompts` | 瀑布流卡片 + Tag 筛选 + 复制功能 |
| 教育闪卡 | `/flashcards` | 闪卡集合列表 |
| 教育闪卡播放 | `/flashcards/play/[id]` | 闪卡 iframe 内嵌 |
| AI教程 | `/tutorials` | 视频教程列表 |
| AI教程播放 | `/tutorials/watch/[id]` | 视频 iframe 内嵌 |
| H5应用 | `/apps` | H5应用合集 |
| H5应用播放 | `/apps/play/[id]` | 应用 iframe 内嵌 |
| 知识库 | `/blog` | 文章列表 |
| 文章详情 | `/blog/[slug]` | 文章内容 |
| 工具集 | `/tools` | 工具导航 |
| 工具播放 | `/tools/play/[id]` | 工具 iframe 内嵌 |
| 关于合作 | `/about` | 个人履历 + 联系方式 |

---

## 核心数据模型

```typescript
// src/types/index.ts

// 提示词
export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  model: "GPT" | "Claude" | "Midjourney";
}

// 闪卡
export interface Flashcard {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  count: number;
  type: "iframe" | "link";
  url: string;
}

// 教程
export interface Tutorial {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
  type: "iframe" | "link";
  url: string;
}

// H5应用
export interface App {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  type: "iframe" | "link";
  url: string;
}

// 工具
export interface Tool {
  id: string;
  title: string;
  thumbnail: string;
  type: "iframe" | "link";
  url: string;
  description: string;
}

// 博客文章
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage?: string;
}

// 导航项
export interface NavItem {
  title: string;
  href: string;
  icon?: string;
}

// 站点配置
export interface SiteConfig {
  name: string;
  slogan: string;
  avatar: string;
  social: {
    wechat?: string;
    zhishixingqiu?: string;
    github?: string;
    email?: string;
  };
}
```

---

## 导航配置

```typescript
// src/config/site.ts
export const navItems: NavItem[] = [
  { title: "首页", href: "/" },
  { title: "提示词库", href: "/prompts" },
  { title: "教育闪卡", href: "/flashcards" },
  { title: "AI教程", href: "/tutorials" },
  { title: "H5应用", href: "/apps" },
  { title: "知识库", href: "/blog" },
  { title: "工具集", href: "/tools" },
  { title: "关于我", href: "/about" },
];
```

---

## 数据文件格式

### prompts.json 示例
```json
[
  {
    "id": "prompt-1",
    "title": "提示词标题",
    "description": "简短描述",
    "content": "完整提示词内容...",
    "tags": ["写作", "效率"],
    "model": "Claude"
  }
]
```

### flashcards.json 示例
```json
[
  {
    "id": "card-1",
    "title": "闪卡标题",
    "description": "描述",
    "thumbnail": "https://example.com/thumb.png",
    "category": "英语",
    "count": 50,
    "type": "iframe",
    "url": "https://example.com/flashcard"
  }
]
```

### tutorials.json 示例
```json
[
  {
    "id": "tut-1",
    "title": "教程标题",
    "description": "描述",
    "thumbnail": "https://example.com/thumb.png",
    "duration": "15:30",
    "category": "Claude",
    "type": "iframe",
    "url": "https://example.com/video"
  }
]
```

### apps.json 示例
```json
[
  {
    "id": "app-1",
    "title": "应用标题",
    "description": "描述",
    "thumbnail": "https://example.com/thumb.png",
    "category": "英语",
    "type": "iframe",
    "url": "https://example.com/app"
  }
]
```

---

## 移动端 UI 规范

- 所有按钮/点击区域最小高度 44px
- 导航栏使用汉堡菜单（移动端）
- 导航项居中显示（桌面端）
- 右下角常驻悬浮按钮 (FAB)
- 复制操作触发带引导关注文案的 Toast
- 布局紧凑，避免大片空白
- 注意屏幕下端内容被遮挡问题

---

## 常用命令

### 开发命令
```bash
# 安装依赖
npm install

# 启动开发服务器 (http://localhost:3000)
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint
```

### Shadcn/ui 组件添加
```bash
# 添加单个组件
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add sheet

# 查看可用组件列表
npx shadcn@latest add
```

### 故障排查
```bash
# 清除 Next.js 缓存(样式丢失时使用)
rm -rf .next
npm run dev

# 重新安装依赖(依赖问题时使用)
rm -rf node_modules package-lock.json
npm install

# 检查 TypeScript 类型错误
npx tsc --noEmit

# 验证 JSON 格式
npx jsonlint src/data/prompts.json
```

### 常见问题详解

**Q: 样式突然丢失或不生效**
```bash
# 解决方案：清除缓存并重启
rm -rf .next
npm run dev
```

**Q: 构建失败 "output export requires images.unoptimized"**
A: 这是正常配置。项目已在 `next.config.mjs` 中正确设置了静态导出所需的配置。

**Q: JSON 数据更新后页面未变化**
1. 检查 JSON 格式是否正确（可用在线 JSON 校验工具）
2. 确认文件已保存
3. 重启开发服务器
4. 硬刷新浏览器 (Ctrl+Shift+R / Cmd+Shift+R)

**Q: npm install 失败**
```bash
# 方案1: 使用国内镜像
npm config set registry https://registry.npmmirror.com
npm install

# 方案2: 清除后重装
rm -rf node_modules package-lock.json
npm install
```

### Git 初始化(首次使用)
```bash
# 初始化 git 仓库
git init

# 添加所有文件
git add .

# 首次提交
git commit -m "Initial commit"

# 关联远程仓库(替换为您的仓库地址)
git remote add origin https://github.com/你的用户名/personal-ai-hub.git

# 推送到远程
git push -u origin main
```

---

## 部署到 Vercel

### 1. 推送到 GitHub
确保代码已推送到 GitHub 仓库(参考上方 Git 初始化部分)

### 2. Vercel 部署
1. 登录 vercel.com
2. 点击 "Import Project"
3. 选择 GitHub 仓库
4. 自动检测 Next.js 项目，直接部署

### 3. 绑定域名 (ppmaiedu.cn)
1. Vercel 项目设置 → Domains
2. 添加域名 ppmaiedu.cn
3. 在腾讯云 DNS 添加:
   - A 记录: @ → 76.76.19.61
   - CNAME: www → cname.vercel-dns.com

---

## 测试规范

- 使用 Playwright MCP 进行测试
- 测试文件按时间戳建立独立文件夹，格式: `tests/YYYYMMDD_HHMMSS/`
- 每个页面开发完成后必须进行点击测试
- 以手机端浏览器正常运行为主要测试标准

---

## 内容更新指南

### 更新提示词
编辑 `src/data/prompts.json`，添加新条目后推送代码即可自动部署。

### 更新闪卡/教程/应用
同上，编辑对应的 JSON 文件：
- `src/data/flashcards.json`
- `src/data/tutorials.json`
- `src/data/apps.json`

### 更新博客文章
编辑 `src/data/posts.json`。

### 更新站点配置
编辑 `src/config/site.ts`。

---

## 注意事项

1. **版本兼容**: 必须使用 Next.js 14.x，不要升级到 15/16（Tailwind CSS v4 兼容问题）
2. **Tailwind CSS**: 使用 3.4.x 版本
3. **静态导出配置**: 项目使用 `output: 'export'`，这意味着：
   - 所有页面必须可以在构建时预渲染
   - 不支持 API Routes、Middleware、ISR
   - `next/image` 需要配置 `unoptimized: true`（已配置）
4. **样式丢失**: 如遇样式问题，删除 `.next` 文件夹后重启开发服务器
5. **网络问题**: npm install 失败时可多次重试或使用国内镜像
6. **路径别名**: 统一使用 `@/` 而非相对路径导入(如 `@/components/ui/button`)
7. **数据文件**: 所有 JSON 数据文件在 `src/data/` 目录，修改后页面自动更新

---

## 开发最佳实践

### 添加新页面
1. 在 `src/app/` 创建对应路由文件夹
2. 添加 `page.tsx` 实现页面组件
3. 在 `src/config/site.ts` 的 `navItems` 添加导航项
4. 如需数据,在 `src/data/` 创建对应 JSON 文件

### 添加新组件
1. 基础 UI 组件: 使用 `npx shadcn@latest add <component>`
2. 业务组件: 在 `src/components/` 对应模块目录创建
3. 导出: 在模块的 `index.ts` 统一导出,简化导入路径

### 样式规范
- 优先使用 Tailwind CSS 实用类
- 移动端优先: 默认样式为移动端,使用 `md:` 等前缀适配桌面端
- 使用 `cn()` 函数合并条件类名: `cn("base-class", condition && "conditional-class")`
- 保持最小点击区域 44px(移动端可用性标准)

### 类型安全
- 所有数据接口定义在 `src/types/index.ts`
- JSON 数据需符合对应的 TypeScript 接口
- 新增字段时同步更新类型定义

### 性能优化
- 使用 Next.js 的 `Image` 组件处理图片
- 动态导入大型组件: `const Component = dynamic(() => import('@/components/Heavy'))`
- 避免在客户端组件中进行大量计算
