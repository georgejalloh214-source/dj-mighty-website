"use client";

import { cn } from "@/lib/utils";

export function Vinyl({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div className="vinyl-grooves animate-spin-slow relative aspect-square w-full rounded-full border border-white/10 shadow-[0_0_80px_-10px_rgba(47,123,255,0.5)]">
        {/* label */}
        <div className="absolute left-1/2 top-1/2 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#2f7bff] to-[#33d6ff]">
          <span
            className="text-center text-[10px] font-bold uppercase tracking-widest text-[#05060d] sm:text-xs"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DJ
            <br />
            MIGHTY
          </span>
        </div>
        {/* spindle */}
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#05060d]" />
        {/* light streak */}
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_20deg,transparent_0deg,rgba(255,255,255,0.08)_20deg,transparent_60deg,transparent_180deg,rgba(255,255,255,0.05)_200deg,transparent_240deg)]" />
      </div>
    </div>
  );
}

export function Equalizer({ bars = 5 }: { bars?: number }) {
  return (
    <div className="flex h-6 items-end gap-[3px]">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="eq-bar w-[4px] rounded-sm bg-gradient-to-t from-[#2f7bff] to-[#33d6ff]"
          style={{
            height: "100%",
            animationDelay: `${i * 0.13}s`,
            animationDuration: `${0.7 + (i % 3) * 0.25}s`,
          }}
        />
      ))}
    </div>
  );
}
