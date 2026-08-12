import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#04050b] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center">
        <Link
          href="#top"
          className="text-3xl tracking-wider text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          DJ <span className="text-[#2f7bff]">MIGHTY</span>
        </Link>
        <p className="max-w-md text-sm text-white/40">{SITE.tagline}</p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-white/60 transition-colors hover:text-[#33d6ff]"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 text-white/60 transition-colors hover:text-[#33d6ff]"
          >
            <Mail className="h-4 w-4" /> {SITE.email}
          </a>
        </div>
        <div className="text-xs text-white/25">
          © {new Date().getFullYear()} DJ Mighty · Dallas–Fort Worth, TX ·
          All rights reserved
        </div>
      </div>
    </footer>
  );
}
