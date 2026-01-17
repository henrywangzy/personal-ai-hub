import { Metadata } from "next";
import Image from "next/image";
import { Gamepad2, BookImage, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "关于我",
  description: "泡泡妈，AI教育探索者，致力于把AI变成孩子的学习伙伴",
};

// 成果数据
const achievements = [
  {
    icon: Gamepad2,
    count: "7+",
    title: "H5单词游戏",
    description: "贪吃蛇、赛车、飞机射击、打地鼠等趣味学习游戏",
  },
  {
    icon: BookImage,
    count: "10+",
    title: "教育闪卡系列",
    description: "英语启蒙、古诗词、成语等主题闪卡",
  },
  {
    icon: Sparkles,
    count: "13+",
    title: "实践教程",
    description: "Claude Code、NotebookLM、AI绘图等工具教程",
  },
];

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 max-w-3xl mx-auto">
      {/* 个人信息 */}
      <section className="text-center mb-12">
        <div className="relative h-28 w-28 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary/10">
          <Image
            src={siteConfig.avatar}
            alt={siteConfig.name}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{siteConfig.name}</h1>
        <p className="text-muted-foreground">{siteConfig.slogan}</p>
      </section>

      {/* 个人简介 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">关于我</h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            作为一个非技术背景的妈妈，我用Claude Code从零开发了7款H5单词游戏，用AI绘图工具制作了
            10多套教育闪卡，把枯燥的学习变成了孩子期待的游戏时光。
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            我相信<strong className="text-foreground">"创造力平权"</strong>——AI让普通人也能实现曾经只有专业团队才能完成的创作。
            在这里，我会分享我的AI实践经验，希望能帮助更多家长用AI为教育减负，让学习像游戏一样有趣。
          </p>
        </div>
      </section>

      {/* 成果展示 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">我的成果</h2>
        <div className="grid gap-4">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-4 rounded-xl border bg-card"
            >
              <div className="h-14 w-14 flex-shrink-0 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold text-primary mt-1">{item.count}</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 联系方式 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">联系我</h2>
        <div className="p-6 rounded-xl border bg-card text-center">
          <p className="text-muted-foreground">
            公众号：<span className="font-semibold text-foreground">泡泡妈学AI</span>
          </p>
        </div>
      </section>
    </div>
  );
}
