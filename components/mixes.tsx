"use client";

import { motion } from "framer-motion";
import { Play, Music } from "lucide-react";
import { TiltCard } from "@/components/tilt-card";
import { SectionHeading } from "@/components/section-heading";

const mixes = [
  {
    title: "Afrobeats Takeover",
    desc: "Peak-hour Afrobeats energy — Burna, Wizkid, Rema & the deep cuts.",
    tag: "Afrobeats",
    duration: "62 min",
    gradient: "from-[#2f7bff] to-[#33d6ff]",
  },
  {
    title: "Wedding Reception Gold",
    desc: "From first dance to last call — a full reception journey.",
    tag: "Open Format",
    duration: "78 min",
    gradient: "from-[#7b5cff] to-[#2f7bff]",
  },
  {
    title: "Hip-Hop & R&B Blends",
    desc: "Smooth transitions, classic throwbacks, today's heat.",
    tag: "Hip-Hop / R&B",
    duration: "54 min",
    gradient: "from-[#33d6ff] to-[#2fffc3]",
  },
  {
    title: "Latin x Reggaeton Fuego",
    desc: "Bad Bunny to classic salsa — dance floor guaranteed.",
    tag: "Latin",
    duration: "58 min",
    gradient: "from-[#ff5c8a] to-[#7b5cff]",
  },
  {
    title: "Country Party Mix",
    desc: "Boots-on-the-floor country for Texas-sized celebrations.",
    tag: "Country",
    duration: "45 min",
    gradient: "from-[#ffb347] to-[#ff5c8a]",
  },
  {
    title: "Corporate Vibe Session",
    desc: "Polished, clean, crowd-friendly grooves for professional events.",
    tag: "Corporate",
    duration: "60 min",
    gradient: "from-[#2fffc3] to-[#2f7bff]",
  },
];

export function Mixes() {
  return (
    <section id="mixes" className="relative mx-auto max-w-7xl px-5 py-28">
      <SectionHeading
        kicker="Latest Sets"
        title="Featured Mixes"
        subtitle="A taste of every room I play. Drop your SoundCloud / Mixcloud links here and these cards become live players."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mixes.map((mix, i) => (
          <motion.div
            key={mix.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
          >
            <TiltCard className="group h-full rounded-2xl border border-white/10 bg-[#0a0d1a] p-6 hover:border-[#2f7bff]/50">
              <div
                className={`mb-5 flex h-36 items-center justify-center rounded-xl bg-gradient-to-br ${mix.gradient} opacity-80 transition-opacity group-hover:opacity-100`}
              >
                <button
                  aria-label={`Play ${mix.title}`}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#05060d]/60 text-white backdrop-blur transition-transform group-hover:scale-110"
                >
                  <Play className="ml-1 h-6 w-6" />
                </button>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-white/10 px-2.5 py-1 font-medium text-[#33d6ff]">
                  {mix.tag}
                </span>
                <span className="flex items-center gap-1.5 text-white/40">
                  <Music className="h-3.5 w-3.5" /> {mix.duration}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-white">{mix.title}</h3>
              <p className="mt-2 text-sm text-white/55">{mix.desc}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
