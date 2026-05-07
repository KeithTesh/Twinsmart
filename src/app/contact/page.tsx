import type { Metadata } from "next";
import { CONTACT, TEAM_MEMBERS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Twinsmart Consultants Kenya — Nairobi and Meru offices.",
};

export default function ContactPage() {
  const director = TEAM_MEMBERS[0];
  const partner  = TEAM_MEMBERS[1];

  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-40 pb-10 md:pb-14 bg-charcoal">
        <div className="container-tw">
          <AnimateIn delay={0.05} amount={0.01}>
            <p className="label-section text-cream/30 mb-4">E · Contact</p>
          </AnimateIn>
          <AnimateIn delay={0.18} amount={0.01}>
            <h1 className="font-display text-display-xl text-cream max-w-2xl">
              Let&apos;s build something together
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section-pad bg-cream">
        <div className="container-tw grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — form */}
          <AnimateIn direction="left" delay={0.05}>
            <p className="label-section text-stone mb-8">Send us a brief</p>
            <form className="space-y-6">
              <div>
                <label className="label-index text-stone block mb-2">Your name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full border border-stone/20 bg-cream px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="label-index text-stone block mb-2">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-stone/20 bg-cream px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="label-index text-stone block mb-2">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-stone/20 bg-cream px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                  placeholder="+254 700 000 000"
                />
              </div>
              <div>
                <label className="label-index text-stone block mb-2">Tell us about your project</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full border border-stone/20 bg-cream px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-terracotta transition-colors resize-none"
                  placeholder="Type of project, location, budget range, timeline…"
                />
              </div>
              <Button type="submit" size="lg" className="w-full justify-center">
                Send message →
              </Button>
            </form>
          </AnimateIn>

          {/* Right — contact details */}
          <AnimateIn direction="right" delay={0.15}>
            <div className="space-y-10">
              <div>
                <p className="label-section text-stone mb-4">Office</p>
                <p className="text-charcoal leading-relaxed">{CONTACT.address}</p>
                <p className="text-charcoal">{CONTACT.city}</p>
                <p className="text-stone text-sm mt-1">{CONTACT.poBox}</p>
              </div>

              <div>
                <p className="label-section text-stone mb-4">Direct contact</p>
                <a href={`mailto:${CONTACT.email}`} className="block text-charcoal hover:text-terracotta transition-colors font-display text-xl mb-2">
                  {CONTACT.email}
                </a>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="block label-section text-stone hover:text-terracotta transition-colors">
                  {CONTACT.phone}
                </a>
              </div>

              <div>
                <p className="label-section text-stone mb-4">Key contacts</p>
                <div className="space-y-4">
                  {[director, partner].map((m) => (
                    <div key={m.name} className="flex flex-col">
                      <span className="text-sm text-charcoal font-medium">{m.name}</span>
                      <span className="label-index text-stone">{m.role}</span>
                      <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="label-index text-stone hover:text-terracotta transition-colors">
                        {m.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
