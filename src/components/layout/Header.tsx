import React from "react";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";

export function Header() {
  return (
    <header className="w-full border-b border-zinc-200/70 bg-white/60 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        {/* Brand logo & name */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-sm ring-1 ring-emerald-500/30">
            {/* Elegant stylized 'S' / geometric flower mark representing Seva/Service */}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
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
