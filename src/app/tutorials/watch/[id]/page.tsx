import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import tutorialsData from "@/data/tutorials.json";
import { Tutorial } from "@/types";

interface WatchPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const tutorials = tutorialsData as Tutorial[];
  return tutorials
    .filter((t) => t.type === "iframe")
    .map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: WatchPageProps): Promise<Metadata> {
  const tutorials = tutorialsData as Tutorial[];
  const tutorial = tutorials.find((t) => t.id === params.id);

  if (!tutorial) {
    return { title: "教程未找到" };
  }

  return {
    title: tutorial.title,
    description: tutorial.description,
  };
}

export default function WatchPage({ params }: WatchPageProps) {
  const tutorials = tutorialsData as Tutorial[];
  const tutorial = tutorials.find((t) => t.id === params.id);

  if (!tutorial || tutorial.type !== "iframe") {
    notFound();
  }

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      {/* Mini 导航栏 */}
      <div className="flex items-center h-12 px-4 border-b bg-background">
        <Link
          href="/tutorials"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          返回教程列表
        </Link>
        <span className="ml-4 text-sm font-medium">{tutorial.title}</span>
      </div>

      {/* iframe 容器 */}
      <div className="flex-1 w-full">
        <iframe
          src={tutorial.url}
          className="w-full h-full border-0"
          title={tutorial.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
