export const dynamic = "force-dynamic";

import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Ethos } from "@/components/sections/Ethos";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedProjects />
      <ServicesPreview />
      <Ethos />
    </>
  );
}
