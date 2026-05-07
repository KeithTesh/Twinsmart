"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CONTACT, NAV_LINKS, SITE_NAME } from "@/lib/constants";

const ease = [0.19, 1, 0.22, 1] as const;

export function Footer() {
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const year = new Date().getFullYear();

  return (
    <footer ref={ref} className="bg-charcoal text-cream/70">
      <div className="container-tw py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="space-y-4"
          >
            <div>
              <p className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-cream/30 mb-1">EST. 2010</p>
              <p className="font-display text-3xl text-cream">Twinsmart</p>
              <p className="font-mono text-[0.5rem] tracking-[0.16em] uppercase text-cream/30 mt-1">Consultants Kenya</p>
            </div>
            <p className="text-sm text-cream/45 leading-relaxed max-w-xs">
              Innovation in research, design and construction. Registered architects,
              landscape architects, interior designers and builders.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <p className="font-mono text-[0.55rem] tracking-[0.18em] uppercase text-cream/30 mb-5">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream/55 hover:text-terracotta transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <p className="font-mono text-[0.55rem] tracking-[0.18em] uppercase text-cream/30 mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-cream/55">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-terracotta transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-terracotta transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="leading-relaxed text-cream/35 text-xs">
                {CONTACT.address}<br />
                {CONTACT.city}<br />
                {CONTACT.poBox}
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
        >
          <p className="font-mono text-[0.5rem] tracking-[0.18em] uppercase text-cream/25">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p className="font-mono text-[0.5rem] tracking-[0.18em] uppercase text-cream/25">
            Nairobi · Meru, Kenya
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
