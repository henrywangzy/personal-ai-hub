# 产品需求文档 (PRD): 个人 AI 数字化底座 (MVP v1.0)
## 1. 项目概述 (Project Overview)
本项目的核心目标是构建一个**移动端优先 (Mobile-First)** 的个人门户网站。该网站不仅仅是内容展示平台，更是私域流量的**漏斗入口**。
### 1.1 核心目标
1. **展示专业性：** 通过高质量的 AI 提示词、教程和自研工具，建立“AI 实战专家”的人设。
2. **流量转化：** 将网站访客转化为公众号粉丝和知识星球用户。
3. **商业变现：** 展示服务能力（商单/培训），提供清晰的联系入口。
### 1.2 用户角色
- **访客：** 寻找 AI 工具、教程或教育资源的普通用户。
- **B 端客户：** 寻找 AI 技术支持、H5 开发或企业培训的潜在甲方。
---
## 2. 技术架构 (Technical Architecture)
- **框架：** Next.js 14 (App Router)
- **语言：** TypeScript
- **样式：** Tailwind CSS + Shadcn/ui
- **内容管理：**
    - 文章/教程：MDX (Markdown + JSX)
    - 数据 (提示词/游戏列表)：本地 JSON 文件 (无后端数据库，便于快速部署)
- **部署：** Vercel (推荐)
---
## 3. 站点地图与页面逻辑 (Site Map & Logic)
### 3.1 首页 (Home) - `/`
- **Hero 区域：**
    - 头像 + 昵称 + 一句话 Slogan（强调 AI 与教育）。
    - **强 CTA 按钮：** [订阅知识星球] [关注公众号]。
- **核心功能宫格 (Grid Nav)：**
    - 图标入口：提示词库、教育闪卡、AI 教程、H5 游戏室。
- **最新动态 (Feed)：**
    - 自动读取最新的文章或资源，显示前 3 条。
- **底部 (Footer)：** 极简版权信息 + 社交媒体链接。
### 3.2 提示词库 (Prompt Library) - `/prompts`
- **布局：** 瀑布流或网格卡片。
- **筛选：** 顶部提供 Tag 标签（如：#Claude, #Midjourney, #写作）。
- **卡片交互：**
    - 展示：标题 + 适用模型 + 简略内容。
    - **动作：** 点击“复制”图标。
    - **反馈：** 复制成功后，弹出 Toast：“复制成功！更多干货请关注公众号”。
### 3.3 知识库/教程 (Knowledge Base) - `/blog` & `/blog/[slug]`
- **内容类型：** 包含教程文章、教育闪卡系列、IAI 课程介绍。
- **文章详情页逻辑：**
    - 渲染 MDX 内容。
    - 支持代码高亮。
    - **底部转化钩子 (Conversion Hook)：** 每篇文章末尾自动追加一个“作者卡片”，引导扫码关注。
### 3.4 游戏与工具集 (Tools & Games) - `/tools`
- **列表页：** 展示自研 H5 游戏和 AI 插件的图标。
- **路由逻辑 (混合模式)：**
    - **类型 A (内嵌)：** 点击进入 `/tools/play/[id]`。
        - 页面结构：顶部保留 Mini Navbar（返回键），下方 100% 宽/高 `<iframe>` 加载游戏 URL。
    - **类型 B (外链)：** 针对 Claude Skills 或不兼容 iframe 的工具，点击直接在新标签页打开 (`target="_blank"`)。
### 3.5 关于与合作 (About & Business) - `/about`
- **个人履历：** 简述 AI 开发与教育背景。
- **服务清单：** 列出可接商单类型（H5 定制、AI 顾问等）。
- **联系方式：** 微信二维码 + 邮箱。
---
## 4. 数据结构定义 (Data Schemas)
_为了方便 AI 编写 TypeScript 接口，预定义核心数据模型。_
### 4.1 Prompt Item
TypeScript
```
interface Prompt {
  id: string;
  title: string;
  description: string; // 用于 SEO 和列表展示
  content: string;     // 实际提示词内容
  tags: string[];      // e.g., ["Writing", "Coding"]
  model: "GPT" | "Claude" | "Midjourney";
}
```
### 4.2 Tool/Game Item
TypeScript
```
interface Tool {
  id: string;
  title: string;
  thumbnail: string;
  type: "iframe" | "link"; // 决定是内嵌还是跳转
  url: string;             // 目标地址
  description: string;
}
```
---
## 5. UI/UX 交互细节 (Crucial Details)
### 5.1 移动端适配 (Mobile Optimization)
- **导航栏：** 移动端使用 Hamburger Menu（汉堡菜单），展开后全屏显示导航链接。
- **点击区域：** 所有按钮高度至少 44px，便于手指点击。
- **复制体验：** 提示词的复制按钮需在移动端显著易点，避免误触。
### 5.2 转化机制 (Conversion Mechanics)
- **Toast 提示：** 所有的复制操作、下载操作，都必须触发带有“引导关注”文案的 Toast 反馈。
- **全局悬浮窗 (FAB)：** 移动端右下角常驻悬浮按钮（图标为知识星球或微信），点击弹出二维码模态框 (Modal)。
---
## 6. 开发阶段规划 (Phasing)
- **Phase 1 (MVP):** 完成框架搭建，实现首页、提示词库（本地数据）、文章渲染、H5 游戏内嵌框架。
- **Phase 2:** 接入搜索功能 (CMD+K)，优化 SEO meta 标签。
- **Phase 3:** 接入 CMS (可选)，实现后台管理。