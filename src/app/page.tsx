import Image from "next/image";
import Link from "next/link";
import { MessageSquareText, GraduationCap, BookOpen, Gamepad2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { LatestFeed } from "@/components/home";

const gridItems = [
  {
    title: "提示词库",
    description: "精选AI提示词",
    href: "/prompts",
    icon: MessageSquareText,
    color: "bg-blue-50 text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    title: "教育闪卡",
    description: "高效记忆学习",
    href: "/flashcards",
    icon: GraduationCap,
    color: "bg-green-50 text-green-600",
    iconBg: "bg-green-100",
  },
  {
    title: "AI教程",
    description: "视频教程分享",
    href: "/tutorials",
    icon: BookOpen,
    color: "bg-purple-50 text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    title: "H5应用",
    description: "趣味教育应用",
    href: "/apps",
    icon: Gamepad2,
    color: "bg-orange-50 text-orange-600",
    iconBg: "bg-orange-100",
  },
];

export default function HomePage() {
  return (
    <div className="container px-4 py-6">
      {/* 主区域：左右两栏 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* 左侧：个人卡片 */}
        <div className="p-8 rounded-2xl border bg-card flex flex-col items-center justify-center text-center">
          {/* 头像 */}
          <div className="relative h-28 w-28 mb-6 overflow-hidden rounded-full border-4 border-primary/20">
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 昵称 */}
          <h1 className="text-2xl font-bold mb-2">{siteConfig.name}</h1>

          {/* Slogan */}
          <p className="text-muted-foreground mb-4">{siteConfig.slogan}</p>

          {/* 公众号信息 */}
          <p className="text-sm text-muted-foreground">
            公众号：泡泡妈学AI
          </p>
        </div>

        {/* 右侧：2x2 宫格 */}
        <div className="grid grid-cols-2 gap-4">
          {gridItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group flex flex-col items-center justify-center p-6 rounded-2xl border bg-card hover:shadow-md transition-all duration-200`}
            >
              <div
                className={`h-14 w-14 rounded-xl flex items-center justify-center ${item.iconBg} mb-4`}
              >
                <item.icon className={`h-7 w-7 ${item.color.split(' ')[1]}`} />
              </div>
              <h3 className="font-semibold text-base mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* 最新动态 */}
      <LatestFeed />
    </div>
  );
}
