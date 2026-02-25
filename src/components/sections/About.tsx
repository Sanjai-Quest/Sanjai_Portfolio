import { aboutText, stats } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NumberTicker from "@/components/ui/NumberTicker";
import GlitchText from "@/components/ui/GlitchText";

const About = () => (
  <section id="about" className="relative">
    <div className="section-container">
      <ScrollReveal>
        <GlitchText text="> whoami" className="section-heading text-primary font-code mb-8" />
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <ScrollReveal delay={0.1}>
          <div className="space-y-4">
            {aboutText.split("\n\n").map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="card-tech p-6">
                <NumberTicker value={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default About;
