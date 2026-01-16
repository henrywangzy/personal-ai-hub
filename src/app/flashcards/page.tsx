import { Metadata } from "next";
import Link from "next/link";
import { Layers, ExternalLink } from "lucide-react";
import flashcardsData from "@/data/flashcards.json";
import { Flashcard } from "@/types";

export const metadata: Metadata = {
  title: "教育闪卡",
  description: "各类教育闪卡合集，高效记忆学习",
};

const categoryColors: Record<string, string> = {
  英语: "bg-blue-100 text-blue-700",
  语文: "bg-red-100 text-red-700",
  数学: "bg-green-100 text-green-700",
  科学: "bg-purple-100 text-purple-700",
};

export default function FlashcardsPage() {
  const flashcards = flashcardsData as Flashcard[];

  return (
    <div className="container px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">教育闪卡</h1>
        <p className="text-muted-foreground">
          精选各类教育闪卡，让记忆更高效
        </p>
      </div>

      {/* 闪卡网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {flashcards.map((card) => {
          const isExternal = card.type === "link";
          const href = isExternal ? card.url : `/flashcards/play/${card.id}`;

          return (
            <Link
              key={card.id}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group block rounded-xl border bg-card overflow-hidden hover:shadow-md transition-all duration-200"
            >
              {/* 缩略图 */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                <Layers className="h-12 w-12 text-primary/40" />
                {/* 分类标签 */}
                <span
                  className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full ${
                    categoryColors[card.category] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {card.category}
                </span>
                {/* 数量标签 */}
                <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                  {card.count} 张
                </span>
              </div>

              {/* 信息 */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-base group-hover:text-primary transition-colors line-clamp-1">
                    {card.title}
                  </h3>
                  {isExternal && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {card.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* 空状态 */}
      {flashcards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">暂无闪卡</p>
        </div>
      )}
    </div>
  );
}
