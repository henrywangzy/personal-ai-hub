import { Metadata } from "next";
import Link from "next/link";
import { Gamepad2, ExternalLink } from "lucide-react";
import appsData from "@/data/apps.json";
import { App } from "@/types";

export const metadata: Metadata = {
  title: "H5应用",
  description: "趣味教育 H5 应用合集",
};

const categoryColors: Record<string, string> = {
  英语: "bg-blue-100 text-blue-700",
  数学: "bg-green-100 text-green-700",
  思维: "bg-purple-100 text-purple-700",
  语文: "bg-red-100 text-red-700",
};

export default function AppsPage() {
  const apps = appsData as App[];

  return (
    <div className="container px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">H5应用</h1>
        <p className="text-muted-foreground">
          趣味教育 H5 应用，寓教于乐
        </p>
      </div>

      {/* 应用网格 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {apps.map((app) => {
          const isExternal = app.type === "link";
          const href = isExternal ? app.url : `/apps/play/${app.id}`;

          return (
            <Link
              key={app.id}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group block rounded-xl border bg-card overflow-hidden hover:shadow-md transition-all duration-200"
            >
              {/* 缩略图 */}
              <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                <Gamepad2 className="h-12 w-12 text-primary/40 group-hover:text-primary/60 transition-colors" />
                {/* 分类标签 */}
                <span
                  className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full ${
                    categoryColors[app.category] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {app.category}
                </span>
                {isExternal && (
                  <ExternalLink className="absolute top-2 right-2 h-4 w-4 text-muted-foreground" />
                )}
              </div>

              {/* 信息 */}
              <div className="p-3">
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-1">
                  {app.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {app.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* 空状态 */}
      {apps.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">暂无应用</p>
        </div>
      )}
    </div>
  );
}
