"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import type { ProjectCard as ProjectCardType } from "@/types/sanity";

const ease = [0.19, 1, 0.22, 1] as const;

interface Props {
  projects: ProjectCardType[];
}

export function ProjectGrid({ projects }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  if (projects.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="font-mono text-[0.6rem] tracking-widest uppercase text-stone">
          No projects found
        </p>
      </div>
    );
  }

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/10">
      {projects.map((project, i) => (
        <motion.div
          key={project._id}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: (i % 3) * 0.1 + Math.floor(i / 3) * 0.05, ease }}
        >
          <ProjectCard project={project} index={i + 1} />
        </motion.div>
      ))}
    </div>
  );
}
