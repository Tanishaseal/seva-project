import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="relative w-full bg-[#f5ede3] shadow-md border-b border-[#e2d4c0] overflow-hidden">
      {/* Top maroon decorative stripe matching banner */}
      <div className="h-2 w-full bg-[#7a0c0e] sm:h-2.5" />

      {/* Main banner container */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 pt-3 pb-0 sm:px-6 sm:pt-4 md:flex-row md:items-end md:gap-3">
        {/* Left: Organization Logo (transparent logo.png) */}
        <div className="flex shrink-0 items-center justify-center pb-3 sm:pb-4 md:pb-5">
          <Image
            src="/logo.png"
            alt="Devoted in Human Service - DKKOSP Seva Logo"
            width={449}
            height={445}
            priority
            quality={95}
            className="h-20 w-auto object-contain drop-shadow-xs transition-transform duration-200 hover:scale-105 sm:h-24 md:h-28 lg:h-32"
          />
        </div>

        {/* Center: Organization Typography in rich maroon serif */}
        <div className="flex flex-1 flex-col items-center justify-center text-center px-2 pb-3 sm:pb-4 md:pb-5">
          <h1 className="font-serif font-bold tracking-wider text-[#7a0c0e] text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl drop-shadow-xs">
            DAKSHIN KALIKATA
          </h1>
          <h2 className="mt-0.5 font-serif font-black tracking-wide text-[#7a0c0e] text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            KRIRA O SANSKRITI PARISHAD
          </h2>
          <p className="mt-0.5 font-serif font-bold text-[#7a0c0e] text-sm sm:text-lg md:text-xl lg:text-2xl">
            (SEVA PRATISHTHAN)
          </p>
        </div>

        {/* Right side: 53 Years Service Badge + Dad Image touching bottom red line */}
        <div className="flex shrink-0 items-end justify-center gap-3 self-end sm:gap-4 md:gap-5">
          {/* 53 Years Service Logo */}
          <div className="flex shrink-0 items-center justify-center pb-3 sm:pb-4 md:pb-6">
            <Image
              src="/53years-service.png"
              alt="53 Years Services"
              width={554}
              height={554}
              priority
              quality={95}
              className="h-16 w-auto object-contain drop-shadow-xs transition-transform duration-200 hover:scale-105 sm:h-20 md:h-22 lg:h-26"
            />
          </div>

          {/* Dad Image in the right side - enlarged so bottom touches bottom red bar */}
          <div className="flex shrink-0 items-end justify-center self-end leading-none">
            <Image
              src="/dad.png"
              alt="Sri Ajay Kumar Das (Founder)"
              width={362}
              height={470}
              priority
              quality={100}
              className="block h-32 w-auto object-contain object-bottom align-bottom drop-shadow-sm transition-transform duration-200 hover:scale-[1.02] sm:h-40 md:h-48 lg:h-56 xl:h-60"
            />
          </div>
        </div>
      </div>

      {/* Bottom maroon banner bar with Founder Credit */}
      <div className="relative z-10 w-full bg-[#5d090a] px-4 py-1.5 text-center sm:text-right">
        <div className="mx-auto max-w-7xl">
          <span className="font-serif text-xs font-semibold tracking-wider text-amber-100 sm:text-sm">
            {siteConfig.founder.toUpperCase()}
          </span>
        </div>
      </div>
    </header>
  );
}
