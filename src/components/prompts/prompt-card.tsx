"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Prompt } from "@/types";

interface PromptCardProps {
  prompt: Prompt;
}

const modelColors: Record<string, string> = {
  GPT: "bg-green-100 text-green-700",
  Claude: "bg-purple-100 text-purple-700",
  Midjourney: "bg-blue-100 text-blue-700",
};

export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      toast.success("复制成功！更多干货请关注公众号", {
        duration: 3000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("复制失败，请重试");
    }
  };

  return (
    <div className="group relative flex flex-col p-4 rounded-xl border bg-card hover:shadow-md transition-all duration-200">
      {/* 模型标签 */}
      <div className="flex items-center justify-between mb-2">
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            modelColors[prompt.model] || "bg-gray-100 text-gray-700"
          }`}
        >
          {prompt.model}
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* 标题 */}
      <h3 className="font-semibold text-base mb-1 line-clamp-1">
        {prompt.title}
      </h3>

      {/* 描述 */}
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
        {prompt.description}
      </p>

      {/* 内容预览 */}
      <div className="flex-1 bg-muted/50 rounded-lg p-3 mb-3">
        <p className="text-xs text-muted-foreground font-mono line-clamp-3 whitespace-pre-wrap">
          {prompt.content}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {prompt.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
