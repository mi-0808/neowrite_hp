// filepath: app/page.tsx
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Works from "@/components/sections/Works";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Works />
      <Contact />
    </main>
  );
}
