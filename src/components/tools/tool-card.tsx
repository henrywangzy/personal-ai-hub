import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import { Tool } from "@/types";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const isExternal = tool.type === "link";
  const href = isExternal ? tool.url : `/tools/play/${tool.id}`;

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group block rounded-xl border bg-card overflow-hidden hover:shadow-md transition-all duration-200"
    >
      {/* 缩略图 */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        {tool.thumbnail ? (
          <Image
            src={tool.thumbnail}
            alt={tool.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              {isExternal ? (
                <ExternalLink className="h-8 w-8 text-primary" />
              ) : (
                <Play className="h-8 w-8 text-primary" />
              )}
            </div>
          </div>
        )}
        {/* 类型标签 */}
        <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm z-10">
          {isExternal ? "外链" : "内嵌"}
        </span>
      </div>

      {/* 信息 */}
      <div className="p-4">
        <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
          {tool.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {tool.description}
        </p>
      </div>
    </Link>
  );
}
