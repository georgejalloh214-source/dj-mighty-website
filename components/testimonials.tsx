"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TiltCard } from "@/components/tilt-card";
import { SectionHeading } from "@/components/section-heading";

const testimonials = [
  {
    quote:
      "DJ Mighty had our whole reception on the floor from the first song to the last. He read the crowd perfectly — our families are still talking about it.",
    name: "Sarah & Mike",
    event: "Wedding · Dallas",
  },
  {
    quote:
      "Professional from booking to breakdown. Showed up early, dressed the part, and kept the energy exactly where we needed it for our holiday party.",
    name: "Jennifer R.",
    event: "Corporate Event · Fort Worth",
  },
  {
    quote:
      "The Afrobeats set was UNREAL. He mixed in Latin and Hip-Hop without missing a beat. Best birthday party I've ever thrown.",
    name: "Kwame A.",
    event: "Birthday Party · Arlington",
  },
  {
    quote:
      "Booked him for a private event and he handled every request smoothly. Great equipment, great sound, zero stress.",
    name: "Maria G.",
    event: "Private Party · Plano",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#2f7bff]/8 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          kicker="Social Proof"
          title="What Clients Are Saying"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.15 }}
            >
              <TiltCard maxTilt={6} className="h-full rounded-2xl border border-white/10 bg-[#0a0d1a] p-7 hover:border-[#2f7bff]/40">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-[#33d6ff] text-[#33d6ff]"
                    />
                  ))}
                </div>
                <p className="mt-4 text-white/75">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-[#8fb8ff]">{t.event}</div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
