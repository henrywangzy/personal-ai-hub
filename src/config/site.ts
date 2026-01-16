import { SiteConfig, NavItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "AI探索者",
  slogan: "用AI赋能教育，让学习更高效",
  avatar: "/avatar.svg",
  social: {
    wechat: "/qrcode-wechat.png",
    zhishixingqiu: "/qrcode-zsxq.png",
    github: "https://github.com",
    email: "hello@example.com",
  },
};

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
