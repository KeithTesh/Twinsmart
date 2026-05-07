"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CORE_VALUES } from "@/lib/constants";
import { AnimateIn } from "@/components/ui/AnimateIn";

const ease = [0.19, 1, 0.22, 1] as const;

export function Ethos() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <section className="section-pad bg-charcoal">
      <div className="container-tw">
        {/* Pull quote */}
        <div className="max-w-3xl mb-20">
          <AnimateIn direction="none" delay={0}>
            <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cream/25 mb-6">
              D · Our ethos
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <blockquote className="font-display text-display-lg text-cream leading-tight">
              "We believe every build is a commitment — to the client, to the
              place, and to the people who will live or work there."
            </blockquote>
          </AnimateIn>
        </div>

        {/* Values grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/5">
          {CORE_VALUES.map((value, i) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.65, delay: i * 0.07, ease }}
              className="bg-charcoal p-6 lg:p-8 group hover:bg-charcoal-50 transition-colors duration-300"
            >
              <span className="font-mono text-[0.55rem] tracking-widest text-cream/20 block mb-4">
                {value.number}
              </span>
              <h3 className="font-display text-lg text-cream mb-2 group-hover:text-sand transition-colors">
                {value.title}
              </h3>
              <p className="text-sm text-cream/45 leading-relaxed group-hover:text-cream/60 transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
