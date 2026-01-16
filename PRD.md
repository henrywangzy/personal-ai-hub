# 个人 AI 数字化底座 - 产品需求文档 (PRD)

## 1. 项目概述

### 1.1 项目定位
打造一个移动端优先的个人门户网站，用于展示 AI 实战专家人设、教育资源分享和私域流量转化。

### 1.2 目标用户
- AI 爱好者和学习者
- 教育行业从业者
- 寻求 AI 辅助教学的老师和家长

### 1.3 核心价值
- 一站式 AI 教育资源聚合
- 专业人设展示与信任建立
- 高效的私域流量转化通道

---

## 2. 技术架构

### 2.1 技术栈
| 类别 | 技术选型 | 版本 |
|------|----------|------|
| 框架 | Next.js (App Router) | 14.2.x |
| 语言 | TypeScript | 5.x |
| 样式 | Tailwind CSS | 3.4.x |
| 组件库 | Shadcn/ui | 最新 |
| 图标 | Lucide React | 0.469.x |
| 通知 | Sonner | 1.7.x |
| 部署 | Vercel | - |

### 2.2 项目结构
```
personal-ai-hub/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── page.tsx            # 首页
│   │   ├── layout.tsx          # 根布局
│   │   ├── globals.css         # 全局样式
│   │   ├── prompts/            # 提示词库
│   │   ├── flashcards/         # 教育闪卡
│   │   │   └── play/[id]/      # 闪卡播放页
│   │   ├── tutorials/          # AI教程
│   │   │   └── watch/[id]/     # 视频播放页
│   │   ├── apps/               # H5应用
│   │   │   └── play/[id]/      # 应用内嵌页
│   │   ├── blog/               # 知识库
│   │   │   └── [slug]/         # 文章详情页
│   │   ├── tools/              # 工具集
│   │   │   └── play/[id]/      # 工具内嵌页
│   │   └── about/              # 关于我
│   ├── components/             # React 组件
│   │   ├── ui/                 # Shadcn/ui 组件
│   │   ├── layout/             # 布局组件
│   │   ├── home/               # 首页组件
│   │   ├── prompts/            # 提示词组件
│   │   ├── blog/               # 博客组件
│   │   └── tools/              # 工具组件
│   ├── config/                 # 站点配置
│   │   └── site.ts             # 导航与站点信息
│   ├── data/                   # JSON 数据文件
│   │   ├── prompts.json        # 提示词数据
│   │   ├── flashcards.json     # 闪卡数据
│   │   ├── tutorials.json      # 教程数据
│   │   ├── apps.json           # H5应用数据
│   │   ├── posts.json          # 博客文章数据
│   │   └── tools.json          # 工具数据
│   ├── types/                  # TypeScript 类型定义
│   │   └── index.ts
│   └── lib/                    # 工具函数
│       └── utils.ts
├── public/                     # 静态资源
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## 3. 页面路由详情

### 3.1 导航结构
| 序号 | 页面名称 | 路由 | 说明 |
|------|----------|------|------|
| 1 | 首页 | `/` | 个人卡片 + 功能宫格入口 |
| 2 | 提示词库 | `/prompts` | 提示词瀑布流 + 标签筛选 |
| 3 | 教育闪卡 | `/flashcards` | 闪卡集合 + 分类筛选 |
| 4 | AI教程 | `/tutorials` | 视频教程列表 |
| 5 | H5应用 | `/apps` | 趣味教育应用合集 |
| 6 | 知识库 | `/blog` | 博客文章列表 |
| 7 | 工具集 | `/tools` | AI 工具导航 |
| 8 | 关于我 | `/about` | 个人介绍 + 联系方式 |

### 3.2 动态路由
| 路由 | 用途 |
|------|------|
| `/flashcards/play/[id]` | 闪卡内嵌播放 |
| `/tutorials/watch/[id]` | 视频内嵌播放 |
| `/apps/play/[id]` | H5应用内嵌 |
| `/tools/play/[id]` | 工具内嵌 |
| `/blog/[slug]` | 文章详情 |

---

## 4. 数据模型

### 4.1 提示词 (Prompt)
```typescript
interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  model: "GPT" | "Claude" | "Midjourney";
}
```

### 4.2 闪卡 (Flashcard)
```typescript
interface Flashcard {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;        // 英语、语文、数学、科学
  count: number;           // 闪卡数量
  type: "iframe" | "link";
  url: string;
}
```

### 4.3 教程 (Tutorial)
```typescript
interface Tutorial {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
  type: "iframe" | "link";
  url: string;
}
```

### 4.4 H5应用 (App)
```typescript
interface App {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  type: "iframe" | "link";
  url: string;
}
```

### 4.5 工具 (Tool)
```typescript
interface Tool {
  id: string;
  title: string;
  thumbnail: string;
  type: "iframe" | "link";
  url: string;
  description: string;
}
```

### 4.6 博客文章 (BlogPost)
```typescript
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage?: string;
}
```

---

## 5. UI/UX 规范

### 5.1 设计原则
- **移动优先**: 所有设计从移动端开始，向上适配
- **布局紧凑**: 避免大面积留白，合理利用屏幕空间
- **触控友好**: 按钮/点击区域最小 44px 高度

### 5.2 响应式断点
| 断点 | 宽度 | 用途 |
|------|------|------|
| 默认 | < 640px | 移动端单列布局 |
| sm | >= 640px | 小屏平板双列 |
| md | >= 768px | 平板三列 |
| lg | >= 1024px | 桌面端多列 |

### 5.3 首页布局
- **移动端**: 个人卡片 + 2x2 宫格（纵向排列）
- **桌面端**: 左侧个人卡片 + 右侧 2x2 宫格（横向排列）

### 5.4 导航栏
- 移动端: Logo 左侧 + 汉堡菜单右侧
- 桌面端: Logo 左侧 + 导航居中 + 右侧空

### 5.5 颜色分类标签
```typescript
const categoryColors = {
  // 闪卡/应用分类
  "英语": "bg-blue-100 text-blue-700",
  "数学": "bg-green-100 text-green-700",
  "语文": "bg-red-100 text-red-700",
  "科学": "bg-purple-100 text-purple-700",
  "思维": "bg-purple-100 text-purple-700",

  // 教程分类
  "Claude": "bg-purple-100 text-purple-700",
  "提示词": "bg-blue-100 text-blue-700",
  "Midjourney": "bg-pink-100 text-pink-700",
  "效率": "bg-green-100 text-green-700",
};
```

---

## 6. 功能详情

### 6.1 提示词库
- 瀑布流卡片展示
- 标签筛选 (全部 / GPT / Claude / Midjourney)
- 一键复制功能 + Toast 提示
- 点击展开查看完整内容

### 6.2 教育闪卡
- 网格卡片展示
- 分类标签 + 闪卡数量显示
- type="iframe" 时内嵌播放
- type="link" 时新窗口打开

### 6.3 AI教程
- 视频卡片展示（16:9 缩略图）
- 时长标签 + 分类标签
- iframe 内嵌播放页

### 6.4 H5应用
- 2-4 列网格展示
- 分类标签 + 外链图标
- iframe 全屏内嵌播放

### 6.5 知识库
- 文章列表 + 标签
- 作者信息卡片
- 阅读时间显示

### 6.6 工具集
- 工具卡片网格
- 分类筛选
- iframe/外链支持

---

## 7. 部署配置

### 7.1 域名
- 主域名: ppmaiedu.cn
- DNS: 腾讯云管理

### 7.2 部署流程
1. 代码推送到 GitHub
2. Vercel 自动部署
3. 绑定自定义域名

### 7.3 Vercel 配置
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

---

## 8. 内容管理

### 8.1 数据更新方式
通过编辑 `src/data/*.json` 文件更新内容：
- `prompts.json` - 提示词
- `flashcards.json` - 闪卡
- `tutorials.json` - 教程
- `apps.json` - H5应用
- `posts.json` - 博客文章
- `tools.json` - 工具

### 8.2 图片存储
- 图片存储在图床/对象存储
- JSON 中使用完整 URL 引用

---

## 9. 后续迭代计划

### 9.1 P1 优先级
- [ ] 增加搜索功能
- [ ] 支持 MDX 文章渲染
- [ ] 添加 SEO 优化 (sitemap, robots.txt)

### 9.2 P2 优先级
- [ ] 深色模式支持
- [ ] 用户收藏功能
- [ ] 分享功能增强

### 9.3 P3 优先级
- [ ] 后台管理系统
- [ ] 数据统计分析
- [ ] 评论功能
