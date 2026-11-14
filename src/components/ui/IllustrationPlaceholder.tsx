import React from "react";

interface IllustrationPlaceholderProps {
  className?: string;
  label?: string;
  description?: string;
  dimensionsText?: string;
  children?: React.ReactNode;
}

export function IllustrationPlaceholder({
  className = "",
  label = "Illustration Placeholder",
  description = "Ready for your custom artwork, 3D asset, or SVG graphic.",
  dimensionsText = "Recommended size: 600 × 400px (16:9 or 3:2)",
  children,
}: IllustrationPlaceholderProps) {
  if (children) {
    return <div className={`relative w-full ${className}`}>{children}</div>;
  }

  return (
    <div
      aria-label="Illustration placeholder container"
      className={`group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50/70 p-8 text-center transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-100/70 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/70 sm:p-12 ${className}`}
    >
      {/* Background blueprint grid watermark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Wireframe placeholder icon */}
      <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-xs dark:border-zinc-800 dark:bg-zinc-900 sm:h-20 sm:w-20">
        <svg
          className="h-8 w-8 text-zinc-400 transition-colors group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300 sm:h-10 sm:w-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          {/* Construction / drafting wireframe icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>

        {/* Small corner tags for architectural look */}
        <span
          className="absolute -top-1 -left-1 h-2 w-2 border-t-2 border-l-2 border-zinc-400 dark:border-zinc-600"
          aria-hidden="true"
        />
        <span
          className="absolute -top-1 -right-1 h-2 w-2 border-t-2 border-r-2 border-zinc-400 dark:border-zinc-600"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-1 -left-1 h-2 w-2 border-b-2 border-l-2 border-zinc-400 dark:border-zinc-600"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-zinc-400 dark:border-zinc-600"
          aria-hidden="true"
        />
      </div>

      {/* Placeholder Details */}
      <div className="relative z-10 max-w-sm space-y-1">
        <h3 className="text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-100 sm:text-base">
          {label}
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
          {description}
        </p>
        <div className="pt-2">
          <span className="inline-block rounded-md border border-zinc-200 bg-white/80 px-2.5 py-1 font-mono text-[11px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-400">
            {dimensionsText}
          </span>
        </div>
      </div>
    </div>
  );
}
