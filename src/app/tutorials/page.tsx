import { Metadata } from "next";
import Link from "next/link";
import { Play, Clock, ExternalLink } from "lucide-react";
import tutorialsData from "@/data/tutorials.json";
import { Tutorial } from "@/types";

export const metadata: Metadata = {
  title: "AI教程",
  description: "AI 视频教程合集，从入门到进阶",
};

const categoryColors: Record<string, string> = {
  Claude: "bg-purple-100 text-purple-700",
  提示词: "bg-blue-100 text-blue-700",
  Midjourney: "bg-pink-100 text-pink-700",
  效率: "bg-green-100 text-green-700",
};

export default function TutorialsPage() {
  const tutorials = tutorialsData as Tutorial[];

  return (
    <div className="container px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">AI教程</h1>
        <p className="text-muted-foreground">
          精选 AI 视频教程，助你快速上手
        </p>
      </div>

      {/* 教程网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tutorials.map((tutorial) => {
          const isExternal = tutorial.type === "link";
          const href = isExternal ? tutorial.url : `/tutorials/watch/${tutorial.id}`;

          return (
            <Link
              key={tutorial.id}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group block rounded-xl border bg-card overflow-hidden hover:shadow-md transition-all duration-200"
            >
              {/* 缩略图 */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Play className="h-6 w-6 text-primary ml-1" />
                </div>
                {/* 分类标签 */}
                <span
                  className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full ${
                    categoryColors[tutorial.category] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {tutorial.category}
                </span>
                {/* 时长标签 */}
                <span className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded bg-black/70 text-white flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {tutorial.duration}
                </span>
              </div>

              {/* 信息 */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-base group-hover:text-primary transition-colors line-clamp-1">
                    {tutorial.title}
                  </h3>
                  {isExternal && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {tutorial.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* 空状态 */}
      {tutorials.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">暂无教程</p>
        </div>
      )}
    </div>
  );
}
