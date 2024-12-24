import Achievements from "@/components/Achivements";
import FAQS from "@/components/Faq";
import FeatureShowcase from "@/components/FeatureShowcase";
import Hero from "@/components/Hero";
import MarqueeComponent from "@/components/TechnologyMarquee";
import ScrollAnimatedText from "@/components/Word";
import Services from "@/components/Services";
import AIPoweredHero from "@/components/AIPoweredHero";

export default function Home() {
  return (
    <main className="dark bg-black text-white min-h-screen">
      <Hero/>
      <MarqueeComponent/>
      <Achievements/>
      {/* <ScrollAnimatedText/> */}
      <FeatureShowcase/>
      <Services/>
      <AIPoweredHero/>
      <FAQS/>
    </main>
  );
}
