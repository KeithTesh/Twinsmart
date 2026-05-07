"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

const ease = [0.19, 1, 0.22, 1] as const;

export function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-cream border-b border-stone/10">
      <div className="container-tw">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone/10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="bg-cream py-8 md:py-10 px-5 md:px-6 flex flex-col gap-1"
            >
              <span className="font-mono text-[0.55rem] tracking-[0.18em] uppercase text-stone/60 mb-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-4xl md:text-5xl text-charcoal">{stat.value}</span>
              <span className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-stone">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
