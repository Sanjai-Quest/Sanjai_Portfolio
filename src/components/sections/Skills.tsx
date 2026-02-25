import ScrollReveal from "@/components/ui/ScrollReveal";
import SkillMarquee from "@/components/ui/SkillMarquee";
import { skillCategories, techColors } from "@/data/portfolio";

const Skills = () => (
  <section id="skills" className="relative">
    <div className="section-container">
      <ScrollReveal>
        <h2 className="section-heading text-foreground">Technical Skills</h2>
        <p className="section-subheading mb-12">Technologies I work with daily</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <SkillMarquee />
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {skillCategories.map((cat, i) => (
          <ScrollReveal key={cat.category} delay={0.1 * (i + 1)}>
            <div className="card-tech p-5">
              <h3 className="text-xs font-code text-primary mb-4 uppercase tracking-widest">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded text-xs font-code"
                    style={{
                      background: `hsl(${techColors[skill] || "191 100% 50%"} / 0.08)`,
                      color: `hsl(${techColors[skill] || "191 100% 50%"})`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
