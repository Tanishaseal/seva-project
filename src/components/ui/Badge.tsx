import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "status" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "status",
  className = "",
}: BadgeProps) {
  if (variant === "status") {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300 ${className}`}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        {children}
      </span>
    );
  }

  if (variant === "outline") {
    return (
      <span
        className={`inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300 ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 ${className}`}
    >
      {children}
    </span>
  );
}
