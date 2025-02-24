import Achievements from "@/components/Achivements";
import FeatureShowcase from "@/components/FeatureShowcase";
import Hero from "@/components/Hero";
import MarqueeComponent from "@/components/TechnologyMarquee";
import ScrollAnimatedText from "@/components/Word";
import Services from "@/components/Services";
import AIPoweredHero from "@/components/AIPoweredHero";
import Contact from "@/components/Contact";
import { Testimonials } from "@/components/Testimotionals";

export default function Home() {
  return (
    <main className="dark bg-black text-white min-h-screen">
      <Hero/>
      <MarqueeComponent/>
      <Achievements/>
      <ScrollAnimatedText/>
      <FeatureShowcase/>
      <Testimonials/>
      <Services/>
      <AIPoweredHero/>
      <Contact/>
    </main>
  );
}
