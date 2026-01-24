import { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import { SkillsResource } from "@/types";
import skillsResourcesData from "@/data/skills-resources.json";

export const metadata: Metadata = {
  title: "Skills 资源平台 - 泡泡妈的AI教练实验室",
  description: "精选 Claude Skills 资源平台，包括官方仓库、社区市场和学习平台",
};

export default function SkillsResourcesPage() {
  const resources = skillsResourcesData as SkillsResource[];

  // 为每个平台定义独特的渐变色主题
  const colorThemes: Record<string, { gradient: string; shadow: string }> = {
    "skillsmp": {
      gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
      shadow: "group-hover:shadow-purple-500/50"
    },
    "skills-pub": {
      gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
      shadow: "group-hover:shadow-amber-500/50"
    },
    "anthropics-skills": {
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
      shadow: "group-hover:shadow-blue-500/50"
    },
    "awesome-claude-skills": {
      gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
      shadow: "group-hover:shadow-pink-500/50"
    },
    "superpowers": {
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
      shadow: "group-hover:shadow-emerald-500/50"
    },
    "claude-skills-org": {
      gradient: "bg-gradient-to-br from-violet-500 to-purple-600",
      shadow: "group-hover:shadow-violet-500/50"
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* 页面标题 */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Skills 资源平台
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          探索 Claude Skills 生态系统，发现优质技能和工作流
        </p>
      </div>

      {/* 卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {resources.map((resource) => {
          // 将 kebab-case 转换为 PascalCase (例如: book-open -> BookOpen)
          const iconName = resource.icon
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("");
          const IconComponent = (Icons as any)[iconName] || Icons.ExternalLink;

          // 获取该资源的颜色主题
          const theme = colorThemes[resource.id] || colorThemes["skillsmp"];

          return (
            <Link
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className={`h-full p-6 rounded-2xl border border-gray-200 bg-white hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${theme.shadow}`}>
                {/* 图标 */}
                <div className="mb-5 flex justify-center">
                  <div className={`w-24 h-24 rounded-2xl ${theme.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* 标题 */}
                <h3 className="text-xl font-bold text-center mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                  {resource.title}
                </h3>

                {/* 描述 */}
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {resource.description}
                </p>

                {/* 外部链接图标 */}
                <div className="mt-5 flex justify-center">
                  <div className="flex items-center gap-1 text-gray-400 group-hover:text-gray-600 transition-colors">
                    <span className="text-xs font-medium">访问平台</span>
                    <Icons.ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
