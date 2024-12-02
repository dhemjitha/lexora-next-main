import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import ScrollAnimatedText from "@/components/Word";

export default function Home() {
  return (
    <main className="dark bg-black text-white min-h-screen">
      <Hero/>
      <ScrollAnimatedText/>
    </main>
  );
}
