"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#33d6ff]">
        {kicker}
      </span>
      <h2
        className="mt-3 text-4xl uppercase text-white sm:text-6xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-white/60">{subtitle}</p>
      )}
    </motion.div>
  );
}
