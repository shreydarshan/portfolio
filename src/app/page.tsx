import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { BuildingSystems } from "@/components/sections/BuildingSystems";
import { Work } from "@/components/sections/Work";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <BuildingSystems />
      <Work />
      <Journey />
      <Contact />
    </>
  );
}
