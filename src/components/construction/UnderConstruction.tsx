import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

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
      {/* Background ambient lighting effects matching brand royal blue */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px] dark:bg-blue-600/15 sm:h-[500px] sm:w-[500px]" />
        <div className="absolute top-1/2 right-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[90px] dark:bg-indigo-500/10" />
      </div>

      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        {/* Brand / Project tag */}
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-900 uppercase dark:bg-blue-950/60 dark:text-blue-200">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
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

        {/* Responsive, crisp Seva Logo & Illustration */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <div className="group relative flex items-center justify-center rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-xl shadow-zinc-900/5 transition-all duration-300 hover:shadow-2xl sm:p-8 dark:border-zinc-800 dark:bg-white dark:shadow-blue-950/20">
            <Image
              src="/seva-logo.png"
              alt="Seva Project Emblem"
              width={260}
              height={260}
              priority
              quality={100}
              className="h-auto w-44 object-contain transition-transform duration-300 group-hover:scale-105 sm:w-56 md:w-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
