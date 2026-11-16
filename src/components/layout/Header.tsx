import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="w-full bg-[#f5ede3] shadow-md border-b border-[#e2d4c0]">
      {/* Top maroon decorative stripe matching banner */}
      <div className="h-2 w-full bg-[#7a0c0e] sm:h-2.5" />

      {/* Main banner container */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 md:flex-row md:gap-3">
        {/* Left: Organization Logo (logo.jpg) */}
        <div className="flex shrink-0 items-center justify-center">
          <Image
            src="/logo.jpg"
            alt="Devoted in Human Service - DKKOSP Seva Logo"
            width={449}
            height={445}
            priority
            quality={95}
            className="h-20 w-auto object-contain sm:h-24 md:h-28 lg:h-32"
          />
        </div>

        {/* Center: Organization Typography in rich maroon serif */}
        <div className="flex flex-1 flex-col items-center justify-center text-center px-2">
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

        {/* Right side: 53 Years Service Badge + Dad Image */}
        <div className="flex shrink-0 items-center justify-center gap-3 sm:gap-4 md:gap-5">
          {/* 53 Years Service Logo (53years service.jpg) */}
          <div className="flex shrink-0 items-center justify-center">
            <Image
              src="/53years%20service.jpg"
              alt="53 Years Services"
              width={554}
              height={554}
              priority
              quality={95}
              className="h-16 w-auto object-contain sm:h-20 md:h-22 lg:h-26"
            />
          </div>

          {/* Dad Image in the right side (dad.png) */}
          <div className="flex shrink-0 flex-col items-center justify-center">
            <Image
              src="/dad.png"
              alt="Sri Ajay Kumar Das (Founder)"
              width={362}
              height={470}
              priority
              quality={95}
              className="h-20 w-auto object-contain sm:h-24 md:h-28 lg:h-32"
            />
          </div>
        </div>
      </div>

      {/* Bottom maroon banner bar with Founder Credit */}
      <div className="w-full bg-[#5d090a] px-4 py-1.5 text-center sm:text-right">
        <div className="mx-auto max-w-7xl">
          <span className="font-serif text-xs font-semibold tracking-wider text-amber-100 sm:text-sm">
            {siteConfig.founder.toUpperCase()}
          </span>
        </div>
      </div>
    </header>
  );
}
