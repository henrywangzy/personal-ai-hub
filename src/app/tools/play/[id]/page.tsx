import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import toolsData from "@/data/tools.json";
import { Tool } from "@/types";

interface PlayPageProps {
  params: { id: string };
}

// 生成静态路径
export async function generateStaticParams() {
  const tools = toolsData as Tool[];
  return tools
    .filter((tool) => tool.type === "iframe")
    .map((tool) => ({
      id: tool.id,
    }));
}

// 生成元数据
export async function generateMetadata({
  params,
}: PlayPageProps): Promise<Metadata> {
  const tools = toolsData as Tool[];
  const tool = tools.find((t) => t.id === params.id);

  if (!tool) {
    return { title: "工具未找到" };
  }

  return {
    title: tool.title,
    description: tool.description,
  };
}

export default function PlayPage({ params }: PlayPageProps) {
  const tools = toolsData as Tool[];
  const tool = tools.find((t) => t.id === params.id);

  if (!tool || tool.type !== "iframe") {
    notFound();
  }

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      {/* Mini 导航栏 */}
      <div className="flex items-center h-12 px-4 border-b bg-background">
        <Link
          href="/tools"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          返回工具集
        </Link>
        <span className="ml-4 text-sm font-medium">{tool.title}</span>
      </div>

      {/* iframe 容器 */}
      <div className="flex-1 w-full">
        <iframe
          src={tool.url}
          className="w-full h-full border-0"
          title={tool.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
