// 提示词数据模型
export interface Prompt {
  id: string;
  title: string;
  description: string; // 用于 SEO 和列表展示
  content: string;     // 实际提示词内容
  tags: string[];      // e.g., ["Writing", "Coding"]
  model: "GPT" | "Claude" | "Midjourney";
}

// 工具/游戏数据模型
export interface Tool {
  id: string;
  title: string;
  thumbnail: string;
  type: "iframe" | "link"; // 决定是内嵌还是跳转
  url: string;             // 目标地址
  description: string;
}

// 闪卡数据模型
export interface Flashcard {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;        // 分类：英语、语文、数学、科学
  count: number;           // 闪卡数量
  type: "iframe" | "link";
  url: string;
}

// 视频教程数据模型
export interface Tutorial {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;        // 视频时长
  category: string;        // 分类
  type: "iframe" | "link";
  url: string;
}

// H5应用数据模型
export interface App {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;        // 分类：单词、数学、英语等
  type: "iframe" | "link";
  url: string;
}

// 博客文章元数据
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage?: string;
  url?: string;  // 外部链接（如微信公众号文章）
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
  description: string;  // 个人介绍
  avatar: string;
  social: {
    wechat?: string;
    zhishixingqiu?: string;
    github?: string;
    email?: string;
  };
}
