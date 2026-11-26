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
      <div className="w-full flex items-center justify-between pl-3 sm:pl-5 md:pl-7 pr-0 pt-1 pb-0 gap-2 sm:gap-3 md:gap-4">
        {/* Left: Organization Logo (with curved ESTD : 1974 structure) */}
        <div className="flex shrink-0 items-center justify-center py-0.5 sm:py-1">
          <Image
            src="/logo.png"
            alt="Devoted in Human Service - DKKOSP Seva Logo - ESTD : 1974"
            width={449}
            height={510}
            priority
            quality={95}
            className="h-14 w-auto object-contain drop-shadow-2xs transition-transform duration-200 hover:scale-105 sm:h-18 md:h-22 lg:h-26 xl:h-28"
          />
        </div>

        {/* Center: Organization Typography in the exact middle */}
        <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 py-0.5 text-center my-auto">
          <h1 className="font-serif font-bold tracking-wider text-[#7a0c0e] text-[11px] leading-tight sm:text-sm md:text-lg lg:text-xl xl:text-2xl drop-shadow-2xs">
            DAKSHIN KALIKATA
          </h1>
          <h2 className="mt-0.5 font-serif font-black tracking-wide text-[#7a0c0e] text-[12px] leading-tight sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
            KRIRA O SANSKRITI PARISHAD
          </h2>
          <p className="mt-0.5 font-serif font-bold text-[#7a0c0e] text-[10px] leading-tight sm:text-xs md:text-sm lg:text-base xl:text-lg">
            (SEVA PRATISHTHAN)
          </p>
        </div>

        {/* Right side: 53 Years Service Badge at TOP + smaller Dad Image touching bottom red bar */}
        <div className="flex shrink-0 items-stretch justify-end self-stretch gap-1.5 sm:gap-2.5 md:gap-3.5 pr-0 mr-0">
          {/* 53 Years Service Logo - enlarged for maximum clarity & legibility */}
          <div className="flex shrink-0 items-start justify-center self-start pt-0.5">
            <Image
              src="/53years-service.png"
              alt="53 Years Services"
              width={524}
              height={502}
              priority
              quality={100}
              className="h-11 w-auto object-contain drop-shadow-2xs transition-transform duration-200 hover:scale-105 sm:h-13 md:h-16 lg:h-18 xl:h-20"
            />
          </div>

          {/* Dad Image: Smaller size, touching right edge and bottom red bar */}
          <div className="flex shrink-0 items-end justify-end self-end leading-none pr-0 mr-0">
            <Image
              src="/dad.png"
              alt="Sri Ajay Kumar Das (Founder)"
              width={362}
              height={470}
              priority
              quality={100}
              className="block h-14 w-auto object-contain object-right-bottom align-bottom drop-shadow-2xs sm:h-18 md:h-22 lg:h-26 xl:h-28"
            />
          </div>
        </div>
      </div>

      {/* Bottom maroon banner bar with Founder Credit (compact) */}
      <div className="relative z-10 w-full bg-[#5d090a] px-3 py-0.5 sm:px-6 sm:py-0.5 text-right">
        <div className="w-full pr-0 sm:pr-1 md:pr-2">
          <span className="font-serif text-[9px] sm:text-[11px] font-semibold tracking-wider text-amber-100">
            {siteConfig.founder.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Responsive primary navigation */}
      <Navbar />
    </header>
  );
}
