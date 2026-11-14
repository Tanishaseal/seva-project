import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";

export function Header() {
  return (
    <header className="w-full border-b border-zinc-200/70 bg-white/60 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        {/* Brand logo & name */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-zinc-200/80 bg-white p-1 shadow-xs dark:border-zinc-800">
            <Image
              src="/seva-logo.png"
              alt="Seva Project Logo"
              width={36}
              height={36}
              priority
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <span className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {siteConfig.name}
            </span>
            <span className="hidden text-xs text-zinc-500 dark:text-zinc-400 sm:inline sm:ml-2">
              • {siteConfig.tagline}
            </span>
          </div>
        </div>

        {/* Live status badge */}
        <Badge variant="status">{siteConfig.statusText}</Badge>
      </div>
    </header>
  );
}
