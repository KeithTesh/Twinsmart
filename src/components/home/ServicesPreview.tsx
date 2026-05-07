"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

const ease = [0.19, 1, 0.22, 1] as const;

export function ServicesPreview() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <section className="section-pad bg-cream">
      <div className="container-tw">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <AnimateIn>
            <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-stone mb-3">
              B · What we do
            </p>
            <h2 className="font-display text-display-lg text-charcoal">Our Services</h2>
          </AnimateIn>
          <AnimateIn delay={0.1} direction="left">
            <Button href="/services" variant="outline">All services →</Button>
          </AnimateIn>
        </div>

        {/* Services grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone/10">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.index}
              initial={{ opacity: 0, y: 40 }}
              animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.75, delay: i * 0.12, ease }}
              className="relative bg-cream p-8 md:p-10 group hover:bg-charcoal transition-colors duration-500 cursor-default overflow-hidden"
            >
              {/* Amber top bar — always visible on mobile, slides in on desktop hover */}
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-amber origin-left scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

              {/* Amber left glow — subtle ambient on hover */}
              <span className="absolute inset-y-0 left-0 w-[2px] bg-amber/0 group-hover:bg-amber/60 transition-colors duration-500" />

              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[0.55rem] tracking-widest uppercase text-amber md:text-stone md:group-hover:text-amber transition-colors duration-300">
                  {service.index}
                </span>
                <span className="text-amber md:text-stone/30 md:group-hover:text-amber md:group-hover:translate-x-2 transition-all duration-300 text-xl inline-block">
                  →
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-charcoal group-hover:text-cream transition-colors mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-stone group-hover:text-cream/60 transition-colors leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.scopeOfWork.slice(0, 4).map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={gridInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                    transition={{ delay: i * 0.12 + j * 0.05 + 0.3, duration: 0.5, ease }}
                    className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-stone/70 group-hover:text-cream/45 transition-colors flex items-center gap-2"
                  >
                    <span className="w-3 h-px bg-stone/40 group-hover:bg-amber shrink-0 transition-colors duration-300" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Bottom amber line — scales from right on hover */}
              <span className="absolute bottom-0 left-0 right-0 h-px bg-amber/30 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
