import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import flashcardsData from "@/data/flashcards.json";
import { Flashcard } from "@/types";

interface PlayPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const flashcards = flashcardsData as Flashcard[];
  // Generate all IDs - page will handle non-iframe types with notFound()
  return flashcards.map((card) => ({ id: card.id }));
}

export async function generateMetadata({
  params,
}: PlayPageProps): Promise<Metadata> {
  const flashcards = flashcardsData as Flashcard[];
  const card = flashcards.find((c) => c.id === params.id);

  if (!card) {
    return { title: "闪卡未找到" };
  }

  return {
    title: card.title,
    description: card.description,
  };
}

export default function PlayPage({ params }: PlayPageProps) {
  const flashcards = flashcardsData as Flashcard[];
  const card = flashcards.find((c) => c.id === params.id);

  if (!card || card.type !== "iframe") {
    notFound();
  }

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      {/* Mini 导航栏 */}
      <div className="flex items-center h-12 px-4 border-b bg-background">
        <Link
          href="/flashcards"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          返回闪卡列表
        </Link>
        <span className="ml-4 text-sm font-medium">{card.title}</span>
      </div>

      {/* iframe 容器 */}
      <div className="flex-1 w-full">
        <iframe
          src={card.url}
          className="w-full h-full border-0"
          title={card.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
