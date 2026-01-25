import Link from "next/link";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";

// 首页展示的3篇爆款文章
interface FeaturedPost {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  url: string;  // 外部链接
}

const featuredPosts: FeaturedPost[] = [
  {
    id: "skills-2026-guide",
    title: "2026年Skills元年：别再瞎装Skills了，新手如何从8万+资源中找到宝藏",
    description: "8万+ Skills 资源如何筛选？本文提供完整的新手指南，帮助你在海量资源中找到真正实用的宝藏技能",
    date: "2026-01-25",
    tags: ["Skills", "Claude Code", "AI工具"],
    url: "https://mp.weixin.qq.com/s/tdN-DllJbiVZ_DvWbAx4Jw",
  },
  {
    id: "claudecode-practical-guide",
    title: "《Claude Code 小白实战宝典》完整教程",
    description: "一文说清安装配置+开发+插件技能+上线部署，从零开始的完整实战指南",
    date: "2026-01-18",
    tags: ["Claude Code", "开发实践"],
    url: "https://mp.weixin.qq.com/s/tPN_me01r1fYcfPXmJCg8A",
  },
  {
    id: "notebooklm-education",
    title: "NotebookLM：2025年最强学习教育搭子，你和孩子的第二大脑",
    description: "从李白到鸡兔同笼，DeepResearch、视频播客、PPT、思维导图一键生成",
    date: "2025-01-10",
    tags: ["NotebookLM", "AI教育"],
    url: "https://mp.weixin.qq.com/s/5pHKIM02aVEMGzC_E1hSjQ",
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
          {featuredPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-xl bg-card border hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-base line-clamp-1 flex-1">
                    {post.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
