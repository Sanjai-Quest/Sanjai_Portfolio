import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.04, duration: 0.4 },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden">
      <div className="section-container text-center relative z-10">
        {/* Open to opportunities badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-success/30 bg-success/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse-glow" />
          <span className="text-xs font-code text-success">Currently Open to Opportunities</span>
        </motion.div>

        {/* Name with staggered animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4">
          {personalInfo.name.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={letter === " " ? "inline" : "inline-block text-foreground"}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl font-code mb-2"
        >
          <span className="text-primary text-glow">{displayText}</span>
          <span className="text-primary animate-cursor-blink">|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-10"
        >
          <MapPin size={14} />
          <span className="font-code">{personalInfo.location}</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <MagneticButton>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-code text-sm hover:opacity-90 transition-opacity glow-cyan"
            >
              Contact Me
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-code text-sm hover:border-primary/50 transition-colors"
            >
              View Projects
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
