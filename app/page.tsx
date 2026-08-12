import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { GenreMarquee } from "@/components/marquee";
import { Mixes } from "@/components/mixes";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Rates } from "@/components/rates";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <GenreMarquee />
      <Mixes />
      <About />
      <Services />
      <Rates />
      <Gallery />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
