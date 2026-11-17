import Flow from "@/components/sections/Flow";
import Founder from "@/components/sections/Founder";
import Hero from "@/components/sections/Hero";
import PressNews from "@/components/sections/PressNews";
import Services from "@/components/sections/Services";
import StatsGrid from "@/components/sections/Stats";
import Works from "@/components/sections/Works";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <StatsGrid />
      <Services />
      <Works />
      <PressNews />
      <Founder />
      <Flow />
    </main>
  );
}
