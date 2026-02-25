import { whyHireMe } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlitchText from "@/components/ui/GlitchText";

const WhyHireMe = () => (
  <section className="relative">
    <div className="section-container">
      <ScrollReveal>
        <GlitchText text="Why Hire Me" className="section-heading text-foreground mb-8" />
      </ScrollReveal>

      <div className="max-w-3xl">
        {whyHireMe.split("\n\n").map((p, i) => (
          <ScrollReveal key={i} delay={0.1 * (i + 1)}>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
              {p}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyHireMe;
