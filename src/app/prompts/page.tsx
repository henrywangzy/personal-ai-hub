import { Metadata } from "next";
import { PromptList } from "@/components/prompts";
import promptsData from "@/data/prompts.json";
import { Prompt } from "@/types";

export const metadata: Metadata = {
  title: "提示词库",
  description: "精选 AI 提示词，涵盖写作、编程、绘画等多个领域",
};

export default function PromptsPage() {
  const prompts = promptsData as Prompt[];

  return (
    <div className="container px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">提示词库</h1>
        <p className="text-muted-foreground">
          精选 AI 提示词，点击复制即可使用
        </p>
      </div>

      {/* 提示词列表 */}
      <PromptList prompts={prompts} />
    </div>
  );
}
