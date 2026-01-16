import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function AuthorCard() {
  return (
    <div className="mt-12 p-6 rounded-xl border bg-card">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* 头像 */}
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
          <Image
            src={siteConfig.avatar}
            alt={siteConfig.name}
            fill
            className="object-cover"
          />
        </div>

        {/* 信息 */}
        <div className="flex-1 text-center sm:text-left">
          <h4 className="font-semibold text-lg">{siteConfig.name}</h4>
          <p className="text-sm text-muted-foreground mt-1">
            {siteConfig.slogan}
          </p>
        </div>

        {/* CTA */}
        <div className="flex gap-2">
          <Button size="sm">关注公众号</Button>
          <Button size="sm" variant="outline">
            加入星球
          </Button>
        </div>
      </div>
    </div>
  );
}
