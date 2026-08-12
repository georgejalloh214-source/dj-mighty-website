"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Plus, Zap } from "lucide-react";
import { TiltCard } from "@/components/tilt-card";
import { SectionHeading } from "@/components/section-heading";

const rates = [
  {
    icon: Clock,
    price: "$350",
    label: "1–3 Hours",
    desc: "Perfect for shorter celebrations, cocktail hours & intimate gatherings.",
    featured: false,
  },
  {
    icon: Zap,
    price: "$400",
    label: "4 Hours",
    desc: "The full-event package — the most popular pick for weddings & parties.",
    featured: true,
  },
  {
    icon: Plus,
    price: "$60",
    label: "Per Additional Hour",
    desc: "Party still going? Keep the music rolling as long as you need.",
    featured: false,
  },
];

export function Rates() {
  return (
    <section id="rates" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#33d6ff]/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker="Simple Pricing"
          title="Rates"
          subtitle="Straightforward, no surprises. Professional setup included with every booking."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {rates.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <TiltCard
                maxTilt={8}
                className={
                  r.featured
                    ? "glow-blue relative h-full rounded-2xl border border-[#2f7bff]/60 bg-gradient-to-b from-[#0d1430] to-[#080b18] p-8"
                    : "h-full rounded-2xl border border-white/10 bg-[#0a0d1a] p-8"
                }
              >
                {r.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2f7bff] to-[#33d6ff] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#05060d]">
                    Most Popular
                  </span>
                )}
                <r.icon
                  className={`h-8 w-8 ${r.featured ? "text-[#33d6ff]" : "text-white/40"}`}
                />
                <div
                  className="mt-5 text-5xl text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {r.price}
                </div>
                <div className="mt-1 font-semibold text-[#8fb8ff]">{r.label}</div>
                <p className="mt-4 text-sm text-white/55">{r.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="#book"
            className="glow-blue inline-block rounded-full bg-gradient-to-r from-[#2f7bff] to-[#33d6ff] px-8 py-4 font-semibold text-[#05060d] transition-transform hover:scale-105"
          >
            Reserve Your Date
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
