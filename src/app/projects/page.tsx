export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { getAllProjects } from "@/sanity/lib/queries";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Projects",
  description: "200+ projects across residential, hospitality, institutional, healthcare and more — Twinsmart Consultants Kenya.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <>
      {/* Header */}
      <section className="pt-24 md:pt-40 pb-8 md:pb-14 bg-cream border-b border-stone/10">
        <div className="container-tw">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <AnimateIn delay={0.05} amount={0.01}>
              <p className="label-section text-stone mb-3">D · Portfolio</p>
              <h1 className="font-display text-display-xl text-charcoal">
                Our Projects
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2} amount={0.01}>
              <p className="label-index text-stone">{projects.length} projects</p>
            </AnimateIn>
          </div>

          {/* Category pills */}
          <AnimateIn delay={0.3} amount={0.01}>
            <div className="flex flex-wrap gap-2 mt-8">
              {PROJECT_CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="badge badge-concept cursor-default"
                >
                  {cat}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-cream">
        <div className="container-tw py-0 px-0 md:px-0">
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </>
  );
}
