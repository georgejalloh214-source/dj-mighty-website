"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Briefcase, Music, Star } from "lucide-react";
import { TiltCard } from "@/components/tilt-card";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    desc: "Ceremony to send-off — elegant, seamless, unforgettable. First dances handled with care.",
  },
  {
    icon: Zap,
    title: "Birthdays",
    desc: "High-energy celebrations tailored to the guest of honor's favorite sounds.",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Clean, professional, crowd-friendly sets for galas, holiday parties & launches.",
  },
  {
    icon: Music,
    title: "Clubs",
    desc: "Peak-hour mixing that keeps the floor packed until the lights come on.",
  },
  {
    icon: Star,
    title: "Private Parties",
    desc: "Your house, your rules, your soundtrack — custom sets for any vibe.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-28">
      <SectionHeading
        kicker="What I Offer"
        title="Perfect For Every Event"
        subtitle="One DJ, every occasion. Full professional setup included at every booking."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
            className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
          >
            <TiltCard className="group h-full rounded-2xl border border-white/10 bg-gradient-to-b from-[#0a0d1a] to-[#070912] p-7 hover:border-[#33d6ff]/40">
              <div className="glow-blue mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#2f7bff] to-[#33d6ff]">
                <s.icon className="h-7 w-7 text-[#05060d]" />
              </div>
              <h3
                className="text-2xl uppercase text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-white/55">{s.desc}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
