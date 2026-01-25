import { SiteConfig, NavItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "泡泡妈的AI教练实验室",
  slogan: "AI+教育实践者 | 轻量化应用开发 | 让学习像游戏一样有趣",
  description: "泡泡妈，AI教育探索者，致力于把AI变成孩子的学习伙伴，变成自己的生活搭档",
  avatar: "https://henrywang-1331395796.cos.ap-guangzhou.myqcloud.com/henrywang-1331395796/%E5%9B%BE%E7%89%87%E9%BB%98%E8%AE%A4%E5%AD%98%E5%82%A8/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%B8%BB%E5%9B%BE.jpg",
  social: {},
};

export const navItems: NavItem[] = [
  { title: "首页", href: "/" },
  { title: "提示词库", href: "/prompts" },
  { title: "教育闪卡", href: "/flashcards" },
  { title: "AI教程", href: "/tutorials" },
  { title: "H5应用", href: "/apps" },
  { title: "知识库", href: "/blog" },
  { title: "工具集", href: "/tools" },
  { title: "Skills资源", href: "/skills-resources" },
  { title: "关于我", href: "/about" },
];
