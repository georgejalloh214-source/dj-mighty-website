import type { Metadata } from "next";
import { Anton, Sora } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "DJ Mighty — High-Energy Sets for Weddings, Clubs & Private Events",
  description:
    "DJ Mighty · 15+ years of experience. Afrobeats, Hip-Hop, R&B, Reggaeton, Country & Latin. Book for weddings, birthdays, corporate events, clubs & private parties. Call or text 214-854-1734.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${anton.variable} ${sora.variable} font-[var(--font-body)] noise-overlay`}
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
