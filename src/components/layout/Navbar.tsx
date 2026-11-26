"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

/**
 * Responsive navigation bar rendered beneath the organization header banner.
 */
export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="w-full border-b border-[#e2d4c0] bg-white/95 backdrop-blur-xs"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-1.5 px-3 py-2 sm:gap-3 sm:px-6 sm:py-2.5">
        {siteConfig.navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors sm:px-4 sm:text-sm ${
                isActive
                  ? "bg-[#7a0c0e] text-amber-50 shadow-xs"
                  : "text-slate-700 hover:bg-[#f5ede3] hover:text-[#7a0c0e]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
