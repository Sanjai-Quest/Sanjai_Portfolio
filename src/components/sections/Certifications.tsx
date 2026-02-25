import { certifications } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Award } from "lucide-react";

const Certifications = () => (
  <section id="certifications" className="relative">
    <div className="section-container">
      <ScrollReveal>
        <h2 className="section-heading text-foreground">Certifications</h2>
        <p className="section-subheading mb-12">Verified skills & knowledge</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, i) => (
          <ScrollReveal key={cert} delay={0.08 * (i + 1)}>
            <div className="card-tech p-5 flex items-start gap-3 h-full">
              <Award size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{cert}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
