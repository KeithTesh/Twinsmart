"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  amount?: number;
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = "up",
  amount = 0.15,
}: AnimateInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });

  const yOffset = 36;
  const xOffset = 20;
  const initial = {
    opacity: 0,
    y: direction === "up" ? yOffset : direction === "down" ? -yOffset : 0,
    x: direction === "left" ? xOffset : direction === "right" ? -xOffset : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration, delay, ease: [0.19, 1, 0.22, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Stagger wrapper — children must be <AnimateIn> or motion elements */
interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
}

const staggerVariants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const childVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
  },
};

export function StaggerIn({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  amount = 0.1,
}: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerVariants}
      custom={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

export { childVariants as staggerChild };
