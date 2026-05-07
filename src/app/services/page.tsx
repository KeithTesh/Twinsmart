import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description: "Architecture, landscape architecture, interior design and construction management — full-service delivery from Twinsmart Consultants Kenya.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-40 pb-12 md:pb-20 bg-cream">
        <div className="container-tw">
          <p className="label-section text-stone mb-4">B · Services</p>
          <h1 className="font-display text-display-xl text-charcoal max-w-3xl mb-8">
            Full-service delivery,<br />one accountable team
          </h1>
          <p className="font-body text-stone text-lg max-w-xl leading-relaxed">
            From concept to construction, we carry projects end-to-end.
            Every service connects — architecture informs the landscape,
            interiors complete the architecture.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-cream border-t border-stone/10">
        {SERVICES.map((service, i) => (
          <div key={service.index} className="border-b border-stone/10">
            <div className="container-tw py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              {/* Left */}
              <div>
                <span className="label-index text-stone block mb-4">{service.index}</span>
                <h2 className="font-display text-display-lg text-charcoal mb-4">
                  {service.title}
                </h2>
                <p className="text-stone leading-relaxed">{service.description}</p>
              </div>

              {/* Right — scope */}
              <div className="flex flex-col justify-center">
                <p className="label-section text-stone mb-4">Scope of work</p>
                <ol className="space-y-3">
                  {service.scopeOfWork.map((item, j) => (
                    <li key={item} className="flex items-baseline gap-3">
                      <span className="label-index text-stone/40 shrink-0">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-charcoal">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="section-pad bg-charcoal">
        <div className="container-tw text-center max-w-2xl mx-auto">
          <h2 className="font-display text-display-lg text-cream mb-4">
            Have a project in mind?
          </h2>
          <p className="text-cream/60 mb-8">
            Tell us about your brief and we will get back within 24 hours.
          </p>
          <Button href="/contact" size="lg" className="bg-terracotta text-cream hover:bg-terracotta-dark">
            Start a conversation →
          </Button>
        </div>
      </section>
    </>
  );
}
