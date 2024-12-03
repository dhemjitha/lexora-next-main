import Achievements from "@/components/Achivements";
import FeatureShowcase from "@/components/FeatureShowcase";
import Hero from "@/components/Hero";
import TechnologyMarquee from "@/components/TechnologyMarquee";
import ScrollAnimatedText from "@/components/Word";

export default function Home() {
  return (
    <main className="dark bg-black text-white min-h-screen">
      <Hero/>
      <TechnologyMarquee/>
      <Achievements/>
      <ScrollAnimatedText/>
      <FeatureShowcase/>
    </main>
  );
}
