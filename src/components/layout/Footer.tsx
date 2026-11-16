import React from "react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/80 bg-white/60 py-6 backdrop-blur-xs">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-1 px-6 text-center text-xs text-slate-500 sm:px-8">
        <p>
          &copy; {siteConfig.year} {siteConfig.orgFullName} {siteConfig.subName}. All rights reserved.
        </p>
        <p className="text-[11px] text-slate-400">
          {siteConfig.tagline}
        </p>
      </div>
    </footer>
  );
}
