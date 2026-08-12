"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { TiltCard } from "@/components/tilt-card";
import { SITE, IMAGES } from "@/lib/site";

const points = [
  "Professional Setup",
  "Smooth Transitions",
  "Crowd-Focused Mixing",
  "Reliable & On-Time",
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#2f7bff]/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <TiltCard maxTilt={6} className="overflow-hidden rounded-3xl border border-white/10">
            <div className="relative aspect-[4/5]">
              <Image
                src={IMAGES.tracksuitVertical}
                alt="DJ Mighty mixing live"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05060d]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span
                  className="text-3xl text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {SITE.years}{" "}
                  <span className="text-[#33d6ff]">YEARS ON THE DECKS</span>
                </span>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#33d6ff]">
            About
          </span>
          <h2
            className="mt-3 text-4xl uppercase text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Man Behind <span className="text-[#2f7bff]">The Mix</span>
          </h2>
          <p className="mt-6 text-white/65">
            With over {SITE.years} years behind the decks, DJ Mighty has turned
            weddings, club nights, corporate events, and private parties across
            Dallas–Fort Worth into nights people can&apos;t stop talking about.
          </p>
          <p className="mt-4 text-white/65">
            The secret? Reading the room. Whether it&apos;s Afrobeats at full
            throttle, a smooth R&B slow-down, or a Country line-dance breakout —
            the music always matches the moment, and the floor never empties.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <div
                key={p}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-[#33d6ff]" />
                <span className="text-sm font-medium text-white/80">{p}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {SITE.genres.map((g) => (
              <span
                key={g}
                className="rounded-full border border-[#2f7bff]/30 bg-[#2f7bff]/10 px-4 py-1.5 text-sm font-medium text-[#8fb8ff]"
              >
                {g}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
