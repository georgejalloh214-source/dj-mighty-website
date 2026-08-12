"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/tilt-card";
import { SectionHeading } from "@/components/section-heading";
import { IMAGES } from "@/lib/site";

const photos = [
  {
    src: IMAGES.decksLean,
    alt: "DJ Mighty locked in on the decks",
    caption: "Locked In",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: IMAGES.suit,
    alt: "DJ Mighty in a navy suit at a wedding reception",
    caption: "Wedding Ready",
    span: "",
  },
  {
    src: IMAGES.tracksuitVertical,
    alt: "DJ Mighty mixing at a private party",
    caption: "Private Party Mode",
    span: "",
  },
  {
    src: IMAGES.flyer,
    alt: "DJ Mighty official services flyer",
    caption: "The Official Flyer",
    span: "md:col-span-2",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-28">
      <SectionHeading
        kicker="Past Events"
        title="Gallery"
        subtitle="Real events, real energy. More photos and event videos dropping in soon."
      />
      <div className="grid auto-rows-[240px] grid-cols-1 gap-5 md:grid-cols-3">
        {photos.map((p, i) => (
          <motion.div
            key={p.caption}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={p.span}
          >
            <TiltCard maxTilt={5} className="group h-full overflow-hidden rounded-2xl border border-white/10">
              <div className="relative h-full w-full">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060d]/85 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
                <span
                  className="absolute bottom-4 left-4 text-xl uppercase tracking-wide text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.caption}
                </span>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
