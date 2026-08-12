"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className,
  maxTilt = 10,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "rotateX(0deg) rotateY(0deg) translateZ(0px)"
  );
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * maxTilt * 2;
      const ry = (px - 0.5) * maxTilt * 2;
      setTransform(
        `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(12px)`
      );
      setGlarePos({ x: px * 100, y: py * 100, opacity: 0.18 });
    },
    [maxTilt]
  );

  const handleLeave = useCallback(() => {
    setTransform("rotateX(0deg) rotateY(0deg) translateZ(0px)");
    setGlarePos((g) => ({ ...g, opacity: 0 }));
  }, []);

  return (
    <div className="perspective-1200">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn(
          "preserve-3d relative transition-transform duration-200 ease-out will-change-transform",
          className
        )}
        style={{ transform }}
      >
        {children}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.9), transparent 55%)`,
            }}
          />
        )}
      </div>
    </div>
  );
}
