import { Hero } from "@/components/sections/hero";
import { Proof } from "@/components/sections/proof";
import { Services } from "@/components/sections/services";
import { Ecosystem } from "@/components/sections/ecosystem";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Proof />
      <Services />
      <Ecosystem />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
