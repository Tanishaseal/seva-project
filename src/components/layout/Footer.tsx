import React from "react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200/70 bg-white/40 py-6 backdrop-blur-xs dark:border-zinc-800/70 dark:bg-zinc-950/40">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-center text-xs text-zinc-500 sm:flex-row sm:px-8 dark:text-zinc-400">
        <p>
          &copy; {siteConfig.year} {siteConfig.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500">
          <span>Crafted with care</span>
          <span>•</span>
          <span>Next.js App Router</span>
        </p>
      </div>
    </footer>
  );
}
