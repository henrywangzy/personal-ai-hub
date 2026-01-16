"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { siteConfig } from "@/config/site";

export function FloatingActionButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FAB Button */}
      <Button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-4 z-50 h-14 w-14 rounded-full shadow-lg md:bottom-8 md:right-6"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">联系我</span>
      </Button>

      {/* QR Code Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center">扫码关注</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            {/* 微信公众号 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="h-32 w-32 bg-muted rounded-lg flex items-center justify-center">
                {siteConfig.social.wechat ? (
                  <img
                    src={siteConfig.social.wechat}
                    alt="微信公众号"
                    className="h-full w-full object-contain rounded-lg"
                  />
                ) : (
                  <span className="text-sm text-muted-foreground">二维码</span>
                )}
              </div>
              <span className="text-sm font-medium">微信公众号</span>
            </div>
            {/* 知识星球 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="h-32 w-32 bg-muted rounded-lg flex items-center justify-center">
                {siteConfig.social.zhishixingqiu ? (
                  <img
                    src={siteConfig.social.zhishixingqiu}
                    alt="知识星球"
                    className="h-full w-full object-contain rounded-lg"
                  />
                ) : (
                  <span className="text-sm text-muted-foreground">二维码</span>
                )}
              </div>
              <span className="text-sm font-medium">知识星球</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
