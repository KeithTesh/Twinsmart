export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/sanity/lib/queries";
import { SanityImage } from "@/components/ui/SanityImage";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { formatKsh } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const meta = [
    project.client   && { label: "Client",   value: project.client },
    project.location && { label: "Location",  value: project.location },
    project.year     && { label: "Year",      value: project.year },
    project.contractValue && { label: "Value", value: formatKsh(project.contractValue) },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      {/* Hero image */}
      <section className="relative h-[55vh] md:h-[65vh] min-h-[360px] bg-charcoal">
        {project.mainImage && (
          <SanityImage
            image={project.mainImage}
            fill
            sizes="100vw"
            priority
            className="opacity-70"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        <div className="absolute bottom-8 md:bottom-10 left-0 right-0 container-tw">
          <Tag status={project.status} className="mb-3 md:mb-4" />
          <h1 className="font-display text-display-xl text-cream max-w-3xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Meta strip */}
      <section className="bg-cream border-b border-stone/10">
        <div className="container-tw py-6 md:py-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-5 sm:gap-8">
          {meta.map(({ label, value }) => (
            <div key={label}>
              <p className="label-index text-stone mb-0.5">{label}</p>
              <p className="text-sm text-charcoal font-medium">{value}</p>
            </div>
          ))}
          {project.category && (
            <div>
              <p className="label-index text-stone mb-0.5">Category</p>
              <p className="text-sm text-charcoal font-medium capitalize">{project.category}</p>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-cream">
        <div className="container-tw grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Description */}
          <div className="md:col-span-2">
            {project.excerpt && (
              <p className="font-display text-2xl text-charcoal leading-snug mb-8">
                {project.excerpt}
              </p>
            )}
            {project.services && project.services.length > 0 && (
              <div>
                <p className="label-section text-stone mb-3">Services provided</p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((s) => (
                    <span key={s} className="badge badge-concept capitalize">{s.replace("-", " ")}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA */}
          <div className="flex flex-col gap-4">
            <Button href="/contact" size="md">
              Start a similar project →
            </Button>
            <Button href="/projects" variant="outline" size="md">
              ← Back to projects
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-cream border-t border-stone/10 pb-section">
          <div className="container-tw">
            <p className="label-section text-stone mb-8">Gallery</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone/10">
              {project.gallery.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] bg-sand/20">
                  <SanityImage
                    image={img}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
