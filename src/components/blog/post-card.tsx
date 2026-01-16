import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block p-4 md:p-6 rounded-xl border bg-card hover:shadow-md transition-all duration-200"
    >
      <div className="flex flex-col gap-3">
        {/* 标签 */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 标题 */}
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* 描述 */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {post.description}
        </p>

        {/* 底部信息 */}
        <div className="flex items-center justify-between pt-2">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            阅读全文 <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
