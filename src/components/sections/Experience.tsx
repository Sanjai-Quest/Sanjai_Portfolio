import { internship } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading text-foreground">Experience</h2>
          <p className="section-subheading mb-12">Professional journey so far</p>
        </ScrollReveal>

        <div className="relative pl-8 md:pl-12" ref={lineRef}>
          {/* Animated vertical line */}
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-border">
            <motion.div
              className="w-full bg-primary"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {/* Timeline node */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute left-0.5 md:left-2.5 top-0 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center"
          >
            <Briefcase size={10} className="text-primary" />
          </motion.div>

          <ScrollReveal delay={0.2}>
            <div className="card-tech p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{internship.role}</h3>
                  <p className="text-primary font-code text-sm">{internship.company} · {internship.type}</p>
                </div>
                <span className="pill-badge text-xs">{internship.duration}</span>
              </div>
              <ul className="space-y-3">
                {internship.bullets.map((bullet, i) => (
                  <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {bullet}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
