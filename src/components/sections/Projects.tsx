import { projects } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BentoCard from "@/components/ui/BentoCard";

const Projects = () => (
  <section id="projects" className="relative">
    <div className="section-container">
      <ScrollReveal>
        <h2 className="section-heading text-foreground">Projects</h2>
        <p className="section-subheading mb-12">Systems I've designed and built</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={0.1 * (i + 1)}>
            <BentoCard size={project.size} techStack={project.techStack}>
              <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
              <p className="text-primary font-code text-sm mb-4">{project.description}</p>
              <ul className="space-y-2">
                {project.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </BentoCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
