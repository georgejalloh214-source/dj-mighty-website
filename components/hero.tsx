"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Calendar, ChevronDown } from "lucide-react";
import { Vinyl, Equalizer } from "@/components/vinyl";
import { SITE, IMAGES } from "@/lib/site";

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouse = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const { innerWidth, innerHeight } = window;
    setMouse({
      x: (e.clientX / innerWidth - 0.5) * 2,
      y: (e.clientY / innerHeight - 0.5) * 2,
    });
  }, []);

  return (
    <section
      id="top"
      onMouseMove={handleMouse}
      className="perspective-2000 relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Photo backdrop — deepest layer */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(${mouse.x * -14}px, ${mouse.y * -10}px, 0) scale(1.08)`,
        }}
      >
        <Image
          src={IMAGES.suit}
          alt="DJ Mighty performing behind the decks"
          fill
          priority
          className="object-cover object-top opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060d]/70 via-[#05060d]/60 to-[#05060d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(47,123,255,0.18),transparent_65%)]" />
      </div>

      {/* 3D grid floor */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45vh] overflow-hidden">
        <div className="grid-floor absolute inset-0" />
      </div>

      {/* Floating glow orbs — mid layer */}
      <div
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(${mouse.x * 20}px, ${mouse.y * 14}px, 0)` }}
      >
        <div className="absolute left-[12%] top-[22%] h-56 w-56 rounded-full bg-[#2f7bff]/20 blur-3xl" />
        <div className="absolute bottom-[24%] right-[14%] h-72 w-72 rounded-full bg-[#33d6ff]/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-24 pt-32 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Copy */}
        <div
          className="will-change-transform"
          style={{ transform: `translate3d(${mouse.x * 8}px, ${mouse.y * 6}px, 0)` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#2f7bff]/40 bg-[#2f7bff]/10 px-4 py-2"
          >
            <Equalizer />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#33d6ff]">
              {SITE.years} Years of Experience · Dallas, TX
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-glow text-6xl leading-[0.95] text-white sm:text-8xl lg:text-9xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DJ{" "}
            <span className="bg-gradient-to-r from-[#2f7bff] to-[#33d6ff] bg-clip-text text-transparent">
              MIGHTY
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-white/70 sm:text-xl"
          >
            {SITE.tagline}. Afrobeats to Country — I read the room and keep the
            floor moving all night.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#book"
              className="glow-blue group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2f7bff] to-[#33d6ff] px-7 py-3.5 font-semibold text-[#05060d] transition-transform hover:scale-105"
            >
              <Calendar className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Book Your Event
            </Link>
            <Link
              href="#mixes"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:border-[#33d6ff]/60 hover:text-[#33d6ff]"
            >
              <Play className="h-5 w-5" />
              Listen to Sets
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {SITE.genres.map((g) => (
              <span
                key={g}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
              >
                {g}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Vinyl — nearest layer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, type: "spring" }}
          className="mx-auto hidden w-full max-w-md will-change-transform lg:block"
          style={{
            transform: `translate3d(${mouse.x * 26}px, ${mouse.y * 20}px, 0) rotateY(${mouse.x * 8}deg) rotateX(${mouse.y * -8}deg)`,
          }}
        >
          <Vinyl />
        </motion.div>
      </div>

      <Link
        href="#mixes"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/40 transition-colors hover:text-[#33d6ff]"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </Link>
    </section>
  );
}
