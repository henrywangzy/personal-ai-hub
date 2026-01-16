import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { AuthorCard } from "@/components/blog";
import postsData from "@/data/posts.json";
import { BlogPost } from "@/types";

interface PostPageProps {
  params: { slug: string };
}

// 生成静态路径
export async function generateStaticParams() {
  const posts = postsData as BlogPost[];
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 生成元数据
export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const posts = postsData as BlogPost[];
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return { title: "文章未找到" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function PostPage({ params }: PostPageProps) {
  const posts = postsData as (BlogPost & { content?: string })[];
  const post = posts.find((p) => p.slug === params.slug);

  // If no post found or post has external URL (no content), show 404
  if (!post || post.url || !post.content) {
    notFound();
  }

  return (
    <article className="container px-4 py-8 max-w-3xl mx-auto">
      {/* 返回按钮 */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        返回知识库
      </Link>

      {/* 文章头部 */}
      <header className="mb-8">
        {/* 标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 标题 */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h1>

        {/* 元信息 */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.date}
          </span>
        </div>
      </header>

      {/* 文章内容 */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        {post.content.split("\n").map((paragraph, index) => {
          if (paragraph.startsWith("## ")) {
            return (
              <h2 key={index} className="text-xl font-bold mt-8 mb-4">
                {paragraph.replace("## ", "")}
              </h2>
            );
          }
          if (paragraph.startsWith("### ")) {
            return (
              <h3 key={index} className="text-lg font-semibold mt-6 mb-3">
                {paragraph.replace("### ", "")}
              </h3>
            );
          }
          if (paragraph.startsWith("```")) {
            return null; // 简化处理，实际应使用代码高亮
          }
          if (paragraph.startsWith("- ")) {
            return (
              <li key={index} className="ml-4">
                {paragraph.replace("- ", "")}
              </li>
            );
          }
          if (paragraph.match(/^\d+\. /)) {
            return (
              <li key={index} className="ml-4 list-decimal">
                {paragraph.replace(/^\d+\. /, "")}
              </li>
            );
          }
          if (paragraph.trim() === "") {
            return <br key={index} />;
          }
          return (
            <p key={index} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* 作者卡片 */}
      <AuthorCard />
    </article>
  );
}
