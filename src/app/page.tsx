import { Hero } from "@/components/sections/hero";
import { Proof } from "@/components/sections/proof";
import { Services } from "@/components/sections/services";
import { FeaturedWork } from "@/components/sections/featured-work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Proof />
      <Services />
      <FeaturedWork />
    </main>
  );
}
