"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const ease = [0.19, 1, 0.22, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const line = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const fade = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const slideUp = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-12 md:pb-16 pt-20 md:pt-28 overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-bg.png"
        alt="Modern architecture — Twinsmart Consultants Kenya"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/45 to-charcoal/5" />

      {/* Volume label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="absolute top-24 md:top-32 left-0 right-0 container-tw"
      >
        <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cream/35">
          VOL. 015 · 2010 — {new Date().getFullYear()}
        </p>
      </motion.div>

      {/* Main content */}
      <div className="container-tw relative z-10">
        <motion.div
          className="max-w-5xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Category label */}
          <motion.p
            variants={slideUp}
            className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-terracotta mb-7"
          >
            A · Architecture · Landscape · Interiors · Construction
          </motion.p>

          {/* Headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              variants={line}
              className="font-display text-display-2xl text-cream leading-none"
            >
              Innovation in
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.div variants={line} className="font-display text-display-2xl text-cream leading-none">
              Research, Design
            </motion.div>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.div
              variants={line}
              className="font-display text-display-2xl text-sand italic leading-none"
            >
              + Construction
            </motion.div>
          </div>

          {/* Subtext */}
          <motion.p
            variants={fade}
            className="font-body text-cream/65 text-base md:text-lg max-w-xl mb-8 md:mb-10 leading-relaxed"
          >
            Registered architects, landscape architects, interior designers and builders.
            Based in Nairobi and Meru, serving clients across Kenya since 2010.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fade} className="flex flex-wrap items-center gap-3 md:gap-4">
            <Button href="/projects" size="lg" className="flex-1 sm:flex-none justify-center">
              View our work
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="flex-1 sm:flex-none justify-center border-cream/35 text-cream hover:border-terracotta hover:text-terracotta"
            >
              Start a project
            </Button>
          </motion.div>
        </motion.div>

        {/* Bottom rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 md:mt-16 hidden sm:flex items-center gap-6"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.3, duration: 1.2, ease }}
            style={{ transformOrigin: "left" }}
            className="flex-1 h-px bg-cream/10"
          />
          <p className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-cream/25">
            Scroll to explore
          </p>
          <div className="w-px h-8 bg-cream/10" />
        </motion.div>
      </div>
    </section>
  );
}
