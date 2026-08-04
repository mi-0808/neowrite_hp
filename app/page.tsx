import Contact from "@/components/sections/Contact";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/sections/Faq";
import Flow from "@/components/sections/Flow";
import Founder from "@/components/sections/Founder";
import Hero from "@/components/sections/Hero";
import PressNews from "@/components/sections/PressNews";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import TickerMarquee from "@/components/sections/TickerMarquee";
import Works from "@/components/sections/Works";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TickerMarquee />
      <Stats />
      <Services />
      <Works />
      <Products />
      <PressNews />
      <Founder />
      <Flow />
      <Faq />
      <CtaBanner />
      <Contact />
    </main>
  );
}
