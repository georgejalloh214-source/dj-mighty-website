import { SITE } from "@/lib/site";

export function GenreMarquee() {
  const items = [...SITE.genres, ...SITE.events];
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-[#080a14] py-4">
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span
              className="text-xl uppercase tracking-widest text-white/25"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#2f7bff] to-[#33d6ff]" />
          </span>
        ))}
      </div>
    </div>
  );
}
