import { Metadata } from "next";
import { ToolCard } from "@/components/tools";
import toolsData from "@/data/tools.json";
import { Tool } from "@/types";

export const metadata: Metadata = {
  title: "工具集",
  description: "H5 教育游戏和 AI 工具集合",
};

export default function ToolsPage() {
  const tools = toolsData as Tool[];

  return (
    <div className="container px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">工具集</h1>
        <p className="text-muted-foreground">
          H5 教育游戏和实用 AI 工具
        </p>
      </div>

      {/* 工具网格 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {/* 空状态 */}
      {tools.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">暂无工具</p>
        </div>
      )}
    </div>
  );
}
