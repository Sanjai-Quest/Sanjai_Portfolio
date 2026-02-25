import { hackathons } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const Hackathons = () => (
  <section id="hackathons" className="relative">
    <div className="section-container">
      <ScrollReveal>
        <h2 className="section-heading text-foreground">Hackathons & Achievements</h2>
        <p className="section-subheading mb-12">Competing, building, winning</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hackathons.map((h, i) => (
          <ScrollReveal key={h.name} delay={0.1 * (i + 1)}>
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.15)",
              }}
              className="card-tech p-6 group relative overflow-hidden h-full"
            >
              <div className="text-4xl mb-4">{h.icon}</div>
              <span className="pill-badge mb-3 inline-block">{h.prize}</span>
              <h3 className="text-base font-bold text-foreground mb-2">{h.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.description}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Hackathons;
