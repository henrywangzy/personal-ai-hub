import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* 头像 */}
          <div className="relative h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-full border-4 border-primary/10">
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 昵称 */}
          <h1 className="text-2xl md:text-3xl font-bold">{siteConfig.name}</h1>

          {/* Slogan */}
          <p className="text-muted-foreground text-base md:text-lg max-w-md">
            {siteConfig.slogan}
          </p>

          {/* CTA 按钮 */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button size="lg" className="min-w-[140px] h-12">
              订阅知识星球
            </Button>
            <Button size="lg" variant="outline" className="min-w-[140px] h-12">
              关注公众号
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
