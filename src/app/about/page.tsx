import { Metadata } from "next";
import Image from "next/image";
import { Mail, MessageSquare, Star, Code, GraduationCap, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "关于我",
  description: "了解更多关于我的信息，以及可提供的服务",
};

const services = [
  {
    icon: Code,
    title: "H5 定制开发",
    description: "教育类 H5 游戏、营销活动页面、小程序开发",
  },
  {
    icon: Lightbulb,
    title: "AI 技术顾问",
    description: "企业 AI 应用方案咨询、AI 工具选型建议",
  },
  {
    icon: GraduationCap,
    title: "企业培训",
    description: "AI 工具使用培训、Prompt Engineering 工作坊",
  },
];

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 max-w-3xl mx-auto">
      {/* 个人信息 */}
      <section className="text-center mb-12">
        <div className="relative h-28 w-28 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary/10">
          <Image
            src={siteConfig.avatar}
            alt={siteConfig.name}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{siteConfig.name}</h1>
        <p className="text-muted-foreground">{siteConfig.slogan}</p>
      </section>

      {/* 个人简介 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">关于我</h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Hi，我是一名专注于 AI 与教育交叉领域的独立开发者。拥有多年的前端开发经验，
            擅长使用现代 Web 技术构建高质量的产品。
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            我相信 AI 将深刻改变教育的未来，致力于探索如何用技术让学习更高效、更有趣。
            在这里，你可以找到我精心整理的 AI 提示词、教程文章，以及一些有趣的教育小工具。
          </p>
        </div>
      </section>

      {/* 服务清单 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">可提供的服务</h2>
        <div className="grid gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex gap-4 p-4 rounded-xl border bg-card"
            >
              <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 联系方式 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">联系我</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {/* 微信 */}
          <div className="p-6 rounded-xl border bg-card text-center">
            <MessageSquare className="h-8 w-8 mx-auto mb-3 text-green-500" />
            <h3 className="font-semibold mb-2">微信公众号</h3>
            <div className="h-32 w-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
              {siteConfig.social.wechat ? (
                <Image
                  src={siteConfig.social.wechat}
                  alt="微信公众号"
                  width={128}
                  height={128}
                  className="rounded-lg"
                />
              ) : (
                <span className="text-sm text-muted-foreground">二维码</span>
              )}
            </div>
          </div>

          {/* 知识星球 */}
          <div className="p-6 rounded-xl border bg-card text-center">
            <Star className="h-8 w-8 mx-auto mb-3 text-yellow-500" />
            <h3 className="font-semibold mb-2">知识星球</h3>
            <div className="h-32 w-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
              {siteConfig.social.zhishixingqiu ? (
                <Image
                  src={siteConfig.social.zhishixingqiu}
                  alt="知识星球"
                  width={128}
                  height={128}
                  className="rounded-lg"
                />
              ) : (
                <span className="text-sm text-muted-foreground">二维码</span>
              )}
            </div>
          </div>
        </div>

        {/* 邮箱 */}
        {siteConfig.social.email && (
          <div className="mt-4 p-4 rounded-xl border bg-card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">{siteConfig.social.email}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href={`mailto:${siteConfig.social.email}`}>发送邮件</a>
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
