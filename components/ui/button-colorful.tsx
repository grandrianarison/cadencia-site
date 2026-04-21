"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonColorfulProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  href?: string;
  target?: string;
}

export function ButtonColorful({
  className,
  label = "Réserver un appel",
  href,
  target,
  ...props
}: ButtonColorfulProps) {
  const inner = (
    <>
      {/* hover glow ring */}
      <span
        className={cn(
          "absolute inset-0 rounded-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "bg-[conic-gradient(from_180deg,#3b82f6,#6366f1,#8b5cf6,#06b6d4,#3b82f6)]"
        )}
      />
      {/* inner face */}
      <span className="relative z-10 flex items-center gap-2 rounded-[4px] bg-[#0f0f0f] px-5 py-[10px] text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-[#1a1a1a]">
        {label}
      </span>
    </>
  );

  const outerClass = cn(
    "group relative inline-flex cursor-pointer items-center justify-center p-[2px] rounded-[6px] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
    className
  );

  if (href) {
    return (
      <a href={href} target={target} className={outerClass}>
        {inner}
      </a>
    );
  }

  return (
    <button className={outerClass} {...props}>
      {inner}
    </button>
  );
}
