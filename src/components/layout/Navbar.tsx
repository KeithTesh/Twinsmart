"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { useScrolled } from "@/hooks/useScrolled";

export function Navbar() {
  const pathname = usePathname();
  const scrolled  = useScrolled(30);
  const [open, setOpen] = useState(false);

  /* Only go transparent on the home page — other pages have light backgrounds */
  const isHome    = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        transparent
          ? "h-20 md:h-28 bg-transparent"
          : "h-16 md:h-20 bg-cream/95 backdrop-blur-md border-b border-stone/15 shadow-sm"
      )}
    >
      <nav className="container-tw h-full flex items-center justify-between">

        {/* ── Logo ───────────────────────────────── */}
        <Link href="/" className="group flex flex-col leading-none">
          <span className={cn(
            "font-mono text-[0.55rem] tracking-[0.2em] uppercase transition-colors duration-500",
            transparent ? "text-cream/50" : "text-stone"
          )}>
            Est. 2010
          </span>
          <span className={cn(
            "font-display text-2xl md:text-3xl tracking-tight transition-colors duration-500",
            transparent ? "text-cream" : "text-charcoal"
          )}>
            Twinsmart
          </span>
          <span className={cn(
            "font-mono text-[0.5rem] tracking-[0.18em] uppercase transition-colors duration-500",
            transparent ? "text-cream/40" : "text-stone/60"
          )}>
            Consultants Kenya
          </span>
        </Link>

        {/* ── Desktop links ──────────────────────── */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={cn(
                    "font-mono text-[0.65rem] tracking-[0.18em] uppercase transition-colors duration-300",
                    active
                      ? "text-terracotta"
                      : transparent
                      ? "text-cream/80 hover:text-cream"
                      : "text-stone hover:text-terracotta"
                  )}
                >
                  <span className={cn(
                    "text-[0.5rem] mr-1.5 transition-colors",
                    transparent ? "text-cream/30" : "text-stone/40"
                  )}>
                    {link.index}
                  </span>
                  {link.label}
                </Link>
                {/* Active underline */}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-terracotta"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* ── CTA button ─────────────────────────── */}
        <Link
          href="/contact"
          className={cn(
            "hidden md:inline-flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.16em] uppercase px-5 py-2.5 border transition-all duration-300",
            transparent
              ? "border-cream/40 text-cream hover:bg-cream hover:text-charcoal"
              : "border-charcoal/25 text-charcoal hover:border-terracotta hover:text-terracotta"
          )}
        >
          Get in touch
        </Link>

        {/* ── Mobile hamburger ───────────────────── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={cn("block w-7 h-[1.5px] origin-center", transparent ? "bg-cream" : "bg-charcoal")}
              animate={
                open
                  ? i === 0
                    ? { rotate: 45, y: 6.5 }
                    : i === 1
                    ? { opacity: 0, scaleX: 0 }
                    : { rotate: -45, y: -6.5 }
                  : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.25 }}
            />
          ))}
        </button>
      </nav>

      {/* ── Mobile menu ────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden bg-cream border-b border-stone/10 md:hidden"
          >
            <ul className="container-tw py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "font-mono text-sm tracking-widest uppercase",
                      pathname === link.href ? "text-terracotta" : "text-charcoal hover:text-terracotta"
                    )}
                  >
                    <span className="text-[0.55rem] mr-2 text-stone/50">{link.index}</span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.06 + 0.1 }}
                className="pt-2 border-t border-stone/10"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 font-mono text-[0.6rem] tracking-widest uppercase border border-charcoal/20 px-5 py-3 text-charcoal hover:border-terracotta hover:text-terracotta transition-colors"
                >
                  Get in touch
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
