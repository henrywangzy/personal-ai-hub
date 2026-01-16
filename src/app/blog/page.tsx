import { Metadata } from "next";
import { PostCard } from "@/components/blog";
import postsData from "@/data/posts.json";
import { BlogPost } from "@/types";

export const metadata: Metadata = {
  title: "知识库",
  description: "AI 教程、技术分享、教育思考",
};

export default function BlogPage() {
  const posts = postsData as BlogPost[];

  return (
    <div className="container px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">知识库</h1>
        <p className="text-muted-foreground">
          AI 教程、技术分享、教育思考
        </p>
      </div>

      {/* 文章列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* 空状态 */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">暂无文章</p>
        </div>
      )}
    </div>
  );
}
