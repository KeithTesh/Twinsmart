export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { getAllTeamMembers } from "@/sanity/lib/queries";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Ethos } from "@/components/sections/Ethos";
import { CONTACT, CORE_VALUES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the Twinsmart Consultants Kenya team — registered architects, landscape architects, interior designers and builders since 2010.",
};

export default async function AboutPage() {
  const members = await getAllTeamMembers();

  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-40 pb-12 md:pb-20 bg-cream">
        <div className="container-tw">
          <p className="label-section text-stone mb-4">A · About us</p>
          <h1 className="font-display text-display-xl text-charcoal max-w-3xl mb-8">
            Research-led design, grounded in practice
          </h1>
          <p className="font-body text-stone text-lg max-w-xl leading-relaxed">
            Founded in 2010, Twinsmart Consultants Kenya is a multidisciplinary firm offering
            architecture, landscape architecture, interior design and construction management
            across Kenya.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-cream border-t border-stone/10">
        <div className="container-tw">
          <p className="label-section text-stone mb-3">B · The team</p>
          <h2 className="font-display text-display-lg text-charcoal mb-14">Our People</h2>
          <TeamGrid members={members.length > 0 ? members : undefined} />
        </div>
      </section>

      <Ethos />

      {/* Contact strip */}
      <section className="section-pad bg-cream border-t border-stone/10">
        <div className="container-tw">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="label-section text-stone mb-3">E · Find us</p>
              <h2 className="font-display text-display-lg text-charcoal mb-6">Our Offices</h2>
              <p className="text-stone leading-relaxed">{CONTACT.address}</p>
              <p className="text-stone">{CONTACT.city}</p>
              <p className="text-stone">{CONTACT.poBox}</p>
            </div>
            <div className="flex flex-col justify-end">
              <a href={`mailto:${CONTACT.email}`} className="font-display text-2xl text-charcoal hover:text-terracotta transition-colors">
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="label-section text-stone hover:text-terracotta transition-colors mt-2">
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
