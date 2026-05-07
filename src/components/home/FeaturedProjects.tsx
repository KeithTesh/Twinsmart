import { getFeaturedProjects } from "@/sanity/lib/queries";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";

export async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  if (projects.length === 0) return null;

  return (
    <section className="section-pad bg-cream">
      <div className="container-tw">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="label-section text-stone mb-3">C · Selected work</p>
            <h2 className="font-display text-display-lg text-charcoal">Featured Projects</h2>
          </div>
          <Button href="/projects" variant="outline">
            All projects →
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/10">
          {projects.map((project, i) => (
            <ProjectCard key={project._id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
