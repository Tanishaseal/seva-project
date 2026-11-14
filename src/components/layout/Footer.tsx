import React from "react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/80 bg-white/60 py-6 backdrop-blur-xs">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 text-center text-xs text-slate-500 sm:px-8">
        <p>
          &copy; {siteConfig.year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
