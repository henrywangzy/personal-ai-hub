import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import appsData from "@/data/apps.json";
import { App } from "@/types";

interface PlayPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const apps = appsData as App[];
  return apps
    .filter((app) => app.type === "iframe")
    .map((app) => ({ id: app.id }));
}

export async function generateMetadata({
  params,
}: PlayPageProps): Promise<Metadata> {
  const apps = appsData as App[];
  const app = apps.find((a) => a.id === params.id);

  if (!app) {
    return { title: "应用未找到" };
  }

  return {
    title: app.title,
    description: app.description,
  };
}

export default function PlayPage({ params }: PlayPageProps) {
  const apps = appsData as App[];
  const app = apps.find((a) => a.id === params.id);

  if (!app || app.type !== "iframe") {
    notFound();
  }

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      {/* Mini 导航栏 */}
      <div className="flex items-center h-12 px-4 border-b bg-background">
        <Link
          href="/apps"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          返回应用列表
        </Link>
        <span className="ml-4 text-sm font-medium">{app.title}</span>
      </div>

      {/* iframe 容器 */}
      <div className="flex-1 w-full">
        <iframe
          src={app.url}
          className="w-full h-full border-0"
          title={app.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
