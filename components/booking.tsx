"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, CheckCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/section-heading";
import { SITE } from "@/lib/site";

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Booking Request — ${form.eventType || "Event"} on ${form.date || "TBD"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nEvent Date: ${form.date}\nEvent Type: ${form.eventType}\n\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="book" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(ellipse_at_bottom,rgba(47,123,255,0.15),transparent_70%)]" />
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          kicker="Let's Talk"
          title="Reserve Your Date"
          subtitle="Dates fill fast — lock yours in today. Call, text, or drop the details below."
        />

        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SITE.phoneHref}
            className="glow-blue flex items-center gap-3 rounded-full bg-gradient-to-r from-[#2f7bff] to-[#33d6ff] px-7 py-3.5 font-bold text-[#05060d] transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white transition-colors hover:border-[#33d6ff]/60 hover:text-[#33d6ff]"
          >
            <Mail className="h-5 w-5" />
            {SITE.email}
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-[#0a0d1a]/80 p-8 backdrop-blur sm:p-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle className="h-14 w-14 text-[#33d6ff]" />
              <h3 className="mt-4 text-2xl font-bold text-white">
                Your email app is opening!
              </h3>
              <p className="mt-2 max-w-md text-white/60">
                Hit send in your email client and DJ Mighty will get back to you
                fast. Or just call/text {SITE.phone}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/70">
                  Name
                </Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/70">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date" className="text-white/70">
                  Event Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="border-white/10 bg-white/5 text-white [color-scheme:dark]"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-white/70">Event Type</Label>
                <Select
                  value={form.eventType}
                  onValueChange={(v) => setForm({ ...form, eventType: v })}
                >
                  <SelectTrigger className="border-white/10 bg-white/5 text-white">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    {SITE.events.map((ev) => (
                      <SelectItem key={ev} value={ev}>
                        {ev}
                      </SelectItem>
                    ))}
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message" className="text-white/70">
                  Tell me about your event
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Venue, guest count, music vibe, special moments..."
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="glow-blue flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2f7bff] to-[#33d6ff] py-4 font-bold text-[#05060d] transition-transform hover:scale-[1.02]"
                >
                  <Send className="h-5 w-5" />
                  Send Booking Request
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
