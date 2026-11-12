import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Flow from "@/components/sections/Flow";
import Founder from "@/components/sections/Founder";
import Hero from "@/components/sections/Hero";
import PressNews from "@/components/sections/PressNews";
import Price from "@/components/sections/Price";
import Role from "@/components/sections/Role";
import Services from "@/components/sections/Services";
import StatsGrid from "@/components/sections/Stats";
import Works from "@/components/sections/Works";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <StatsGrid />
      <Services />
      <Role />
      <Price />
      <Works />
      <PressNews />
      <Founder />
      <Flow />
      <Faq />
      <Contact />
    </main>
  );
}
