import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/types";

// 临时占位数据，后续从 MDX 文件读取
const mockPosts: BlogPost[] = [
  {
    slug: "getting-started-with-claude",
    title: "Claude 3.5 Sonnet 完全指南：从入门到精通",
    description: "深入了解 Claude 的能力边界，掌握高效的 Prompt 技巧",
    date: "2024-01-15",
    tags: ["Claude", "AI", "教程"],
  },
  {
    slug: "midjourney-prompts",
    title: "Midjourney V6 提示词实战：打造专业级 AI 绘画",
    description: "50+ 经典提示词模板，让你的创作效率翻倍",
    date: "2024-01-12",
    tags: ["Midjourney", "AI绘画"],
  },
  {
    slug: "ai-education-future",
    title: "AI 如何重塑教育：一位一线教师的实践思考",
    description: "从课堂到家庭，AI 正在改变我们的学习方式",
    date: "2024-01-10",
    tags: ["教育", "AI应用"],
  },
];

export function LatestFeed() {
  return (
    <section className="py-8 bg-muted/30">
      <div className="container px-4">
        {/* 标题 */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold">最新动态</h2>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
          >
            查看全部 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 文章列表 */}
        <div className="space-y-3">
          {mockPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-4 rounded-xl bg-card border hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-base line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.date}
                  </span>
                  <div className="flex gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-muted text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
