import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import Press from "@/components/sections/Press";
import Profile from "@/components/sections/Profile";
import Services from "@/components/sections/Services";
import Works from "@/components/sections/Works";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Works />
      <Press />
      <News />
      <Profile />
      <Contact />
    </main>
  );
}
