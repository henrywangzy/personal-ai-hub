import Link from "next/link";
import { MessageSquareText, GraduationCap, BookOpen, Gamepad2 } from "lucide-react";

const gridItems = [
  {
    title: "提示词库",
    description: "精选AI提示词",
    href: "/prompts",
    icon: MessageSquareText,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "教育闪卡",
    description: "高效记忆学习",
    href: "/blog",
    icon: GraduationCap,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "AI教程",
    description: "实战技术分享",
    href: "/blog",
    icon: BookOpen,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "H5游戏室",
    description: "趣味小游戏",
    href: "/tools",
    icon: Gamepad2,
    color: "bg-orange-500/10 text-orange-600",
  },
];

export function GridNav() {
  return (
    <section className="py-8">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {gridItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col items-center p-4 md:p-6 rounded-xl border bg-card hover:shadow-md transition-all duration-200"
            >
              <div
                className={`h-12 w-12 md:h-14 md:w-14 rounded-xl flex items-center justify-center ${item.color} mb-3`}
              >
                <item.icon className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="font-semibold text-sm md:text-base">{item.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 hidden md:block">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
