import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="relative w-full bg-[#f5ede3] shadow-md border-b border-[#e2d4c0] overflow-hidden">
      {/* Top maroon decorative stripe (slim) */}
      <div className="h-1 w-full bg-[#7a0c0e] sm:h-1.5" />

      {/* Main banner container - horizontal on all devices for a unified professional layout */}
      <div className="w-full flex items-end justify-between pl-2 sm:pl-4 md:pl-6 lg:pl-8 pr-0 pt-1.5 sm:pt-2 md:pt-2.5 pb-0 gap-1.5 sm:gap-3 md:gap-4">
        {/* Left: Organization Logo */}
        <div className="flex shrink-0 items-center justify-center pb-1.5 sm:pb-2 md:pb-2.5">
          <Image
            src="/logo.png"
            alt="Devoted in Human Service - DKKOSP Seva Logo"
            width={449}
            height={445}
            priority
            quality={95}
            className="h-10 w-auto object-contain drop-shadow-2xs transition-transform duration-200 hover:scale-105 sm:h-14 md:h-18 lg:h-22"
          />
        </div>

        {/* Center: Organization Typography in rich maroon serif */}
        <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 pb-1.5 text-center sm:px-2 sm:pb-2 md:pb-2.5">
          <h1 className="font-serif font-bold tracking-wider text-[#7a0c0e] text-[10px] leading-tight sm:text-base md:text-xl lg:text-2xl drop-shadow-2xs">
            DAKSHIN KALIKATA
          </h1>
          <h2 className="mt-0.5 font-serif font-black tracking-wide text-[#7a0c0e] text-[11px] leading-tight sm:text-lg md:text-2xl lg:text-3xl">
            KRIRA O SANSKRITI PARISHAD
          </h2>
          <p className="mt-0.5 font-serif font-bold text-[#7a0c0e] text-[9px] leading-tight sm:text-xs md:text-base lg:text-lg">
            (SEVA PRATISHTHAN)
          </p>
        </div>

        {/* Right side: 53 Years Service Badge + Dad Image */}
        <div className="flex shrink-0 items-end justify-end self-end gap-1 sm:gap-2 md:gap-3 mr-0 pr-0">
          {/* 53 Years Service Logo */}
          <div className="flex shrink-0 items-center justify-center pb-1.5 sm:pb-2 md:pb-3">
            <Image
              src="/53years-service.png"
              alt="53 Years Services"
              width={554}
              height={554}
              priority
              quality={95}
              className="h-9 w-auto object-contain drop-shadow-2xs transition-transform duration-200 hover:scale-105 sm:h-12 md:h-15 lg:h-18"
            />
          </div>

          {/* Dad Image: Touching right edge and bottom red bar */}
          <div className="flex shrink-0 items-end justify-end self-end leading-none mr-0 pr-0">
            <Image
              src="/dad.png"
              alt="Sri Ajay Kumar Das (Founder)"
              width={362}
              height={470}
              priority
              quality={100}
              className="block h-16 w-auto object-contain object-right-bottom align-bottom drop-shadow-2xs sm:h-24 md:h-32 lg:h-38 xl:h-42"
            />
          </div>
        </div>
      </div>

      {/* Bottom maroon banner bar with Founder Credit (slim) */}
      <div className="relative z-10 w-full bg-[#5d090a] px-3 py-0.5 sm:px-6 sm:py-1 text-right">
        <div className="w-full pr-0 sm:pr-1 md:pr-2">
          <span className="font-serif text-[9px] sm:text-xs font-semibold tracking-wider text-amber-100">
            {siteConfig.founder.toUpperCase()}
          </span>
        </div>
      </div>
    </header>
  );
}
