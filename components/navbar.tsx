"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const links = [
  { href: "#mixes", label: "Sets" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#rates", label: "Rates" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-[#05060d]/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="text-2xl tracking-wider text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          DJ <span className="text-[#2f7bff]">MIGHTY</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-[#33d6ff]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#book"
            className="glow-blue rounded-full bg-gradient-to-r from-[#2f7bff] to-[#33d6ff] px-5 py-2 text-sm font-semibold text-[#05060d] transition-transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-[#05060d]/95 px-5 pb-6 pt-2 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/70 hover:text-[#33d6ff]"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <Link
              href="#book"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-[#2f7bff] to-[#33d6ff] px-5 py-2 text-sm font-semibold text-[#05060d]"
            >
              Book Now
            </Link>
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 text-sm text-white/70"
            >
              <Phone className="h-4 w-4 text-[#33d6ff]" /> {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
