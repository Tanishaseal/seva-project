import React from "react";
import { siteConfig } from "@/config/site";
import { IllustrationPlaceholder } from "@/components/ui/IllustrationPlaceholder";

interface UnderConstructionProps {
  heading?: string;
  message?: string;
  brandName?: string;
}

export function UnderConstruction({
  heading = "Website Under Construction",
  message = siteConfig.message,
  brandName = siteConfig.name,
}: UnderConstructionProps) {
  return (
    <section className="relative flex flex-1 flex-col items-center justify-center px-6 py-12 sm:px-8 sm:py-16 md:py-20">
      {/* Background ambient lighting effects */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px] dark:bg-emerald-500/15 sm:h-[500px] sm:w-[500px]" />
        <div className="absolute top-1/2 right-1/4 h-[300px] w-[300px] rounded-full bg-teal-500/10 blur-[90px] dark:bg-teal-500/10" />
      </div>

      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        {/* Brand / Project tag */}
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold tracking-wider text-zinc-700 uppercase dark:bg-zinc-800/80 dark:text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {brandName}
        </div>

        {/* Centered Heading */}
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-zinc-50">
          {heading}
        </h1>

        {/* Brief Message */}
        <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
          {message}
        </p>

        {/* Illustration Placeholder */}
        <div className="mt-8 w-full max-w-lg sm:mt-10">
          <IllustrationPlaceholder
            label="Illustration Placeholder"
            description="Replace this block with your custom illustration or image asset."
            dimensionsText="Ready for: SVG / PNG / WebP / Next.js <Image>"
          />
        </div>
      </div>
    </section>
  );
}
