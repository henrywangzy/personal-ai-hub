"use client";

import { useState, useMemo } from "react";
import { PromptCard } from "./prompt-card";
import { TagFilter } from "./tag-filter";
import { Prompt } from "@/types";

interface PromptListProps {
  prompts: Prompt[];
}

export function PromptList({ prompts }: PromptListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 提取所有唯一的 tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    prompts.forEach((prompt) => {
      prompt.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [prompts]);

  // 根据选中的 tag 过滤提示词
  const filteredPrompts = useMemo(() => {
    if (!selectedTag) return prompts;
    return prompts.filter((prompt) => prompt.tags.includes(selectedTag));
  }, [prompts, selectedTag]);

  return (
    <div className="space-y-6">
      {/* Tag 筛选 */}
      <TagFilter
        tags={allTags}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />

      {/* 提示词网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPrompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>

      {/* 空状态 */}
      {filteredPrompts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">暂无相关提示词</p>
        </div>
      )}
    </div>
  );
}
