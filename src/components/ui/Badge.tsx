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
        className={`inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3.5 py-1 text-xs font-medium text-emerald-800 ${className}`}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
        </span>
        {children}
      </span>
    );
  }

  if (variant === "outline") {
    return (
      <span
        className={`inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 ${className}`}
    >
      {children}
    </span>
  );
}
