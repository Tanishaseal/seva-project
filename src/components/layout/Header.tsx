import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";

export function Header() {
  return (
    <header className="relative w-full bg-[#f5ede3] shadow-md border-b border-[#e2d4c0] overflow-hidden">
      {/* Top maroon decorative stripe (slim) */}
      <div className="h-1 w-full bg-[#7a0c0e] sm:h-1.5" />

      {/* Main banner container - compact height, horizontally balanced */}
      <div className="w-full flex items-center justify-between pl-2 sm:pl-5 md:pl-7 pr-0 pt-1 pb-0 gap-1 sm:gap-3 md:gap-4">
        {/* Left: Organization Logo (bigger and prominent) */}
        <div className="flex shrink-0 items-center justify-center py-0.5 sm:py-1">
          <Image
            src="/logo.png"
            alt="Devoted in Human Service - DKKOSP Seva Logo - ESTD : 1974"
            width={449}
            height={510}
            priority
            quality={95}
            className="h-18 w-auto object-contain drop-shadow-2xs transition-transform duration-200 hover:scale-105 sm:h-24 md:h-28 lg:h-32 xl:h-36"
          />
        </div>

        {/* Center: Organization Typography in the exact middle */}
        <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 py-0.5 text-center my-auto">
          <h1 className="font-serif font-extrabold tracking-wide text-[#7a0c0e] text-[12px] leading-tight sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl drop-shadow-2xs">
            SEVA PRATISHTHAN
          </h1>
          <p className="mt-0.5 font-serif font-semibold tracking-wider text-[#7a0c0e] text-[9px] leading-tight sm:text-sm md:text-base lg:text-lg xl:text-xl">
            DAKSHIN KALIKATA
          </p>
          <p className="mt-0.5 font-serif font-semibold tracking-wider text-[#7a0c0e] text-[9px] leading-tight sm:text-sm md:text-base lg:text-lg xl:text-xl">
            KRIRA O SANSKRITI PARISHAD
          </p>
        </div>

        {/* Right side: Dad Image larger and center-aligned with founder text below */}
        <div className="flex w-[155px] shrink-0 items-end justify-center self-end pr-3 leading-none sm:w-[200px] sm:pr-5 md:w-[230px] md:pr-7">
          <Image
            src="/dad.png"
            alt="Sri Ajay Kumar Das (Founder)"
            width={362}
            height={470}
            priority
            quality={100}
            className="block h-18 w-auto object-contain object-bottom align-bottom drop-shadow-2xs sm:h-24 md:h-28 lg:h-32 xl:h-36"
          />
        </div>
      </div>

      {/* Bottom maroon banner bar with Founder Credit centered directly under dad.png with right padding */}
      <div className="relative z-10 w-full bg-[#5d090a] py-0.5 sm:py-0.5">
        <div className="ml-auto w-[155px] pr-3 text-center sm:w-[200px] sm:pr-5 md:w-[230px] md:pr-7">
          <span className="font-serif text-[8px] font-semibold tracking-wider text-amber-100 sm:text-[10px] md:text-[11px] whitespace-nowrap">
            {siteConfig.founder.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Responsive primary navigation */}
      <Navbar />
    </header>
  );
}
