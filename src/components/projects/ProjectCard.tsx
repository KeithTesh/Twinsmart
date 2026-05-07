"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Tag } from "@/components/ui/Tag";
import { SanityImage } from "@/components/ui/SanityImage";
import { formatKsh, padIndex } from "@/lib/utils";
import type { ProjectCard as ProjectCardType } from "@/types/sanity";

interface Props {
  project: ProjectCardType;
  index: number;
}

export function ProjectCard({ project, index }: Props) {
  return (
    <Link
      href={`/projects/${project.slug.current}`}
      className="group block bg-cream border border-stone/10 hover:border-stone/30 transition-colors overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-sand/20">
        {project.mainImage ? (
          <SanityImage
            image={project.mainImage}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="placeholder-crosshair w-full h-full" />
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/25 transition-colors duration-500" />

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <Tag status={project.status} />
        </div>

        {/* Index */}
        <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="font-mono text-[0.55rem] tracking-widest text-cream/70 bg-charcoal/70 px-2 py-1">
            {padIndex(index)}
          </span>
        </div>

        {/* View arrow */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-mono text-[0.6rem] tracking-widest uppercase text-cream bg-terracotta px-4 py-2">
            View project →
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 md:p-6">
        <p className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-terracotta mb-1.5 capitalize">
          {project.category}
        </p>
        <h3 className="font-display text-xl md:text-2xl text-charcoal group-hover:text-terracotta transition-colors duration-300 mb-2">
          {project.title}
        </h3>

        <div className="flex items-center gap-3 mt-3">
          {project.client && (
            <p className="font-mono text-[0.55rem] tracking-widest uppercase text-stone truncate">
              {project.client}
            </p>
          )}
          {project.location && (
            <>
              <span className="w-px h-3 bg-stone/30" />
              <p className="font-mono text-[0.55rem] tracking-widest uppercase text-stone truncate">
                {project.location}
              </p>
            </>
          )}
        </div>

        {project.contractValue && (
          <p className="font-mono text-[0.58rem] tracking-widest uppercase text-terracotta mt-2">
            {formatKsh(project.contractValue)}
          </p>
        )}
      </div>
    </Link>
  );
}
