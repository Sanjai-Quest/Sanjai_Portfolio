import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-mono text-sm text-muted-foreground">
        © {new Date().getFullYear()} {personalInfo.name}. Built with React & TypeScript.
      </span>
      <div className="flex items-center gap-4">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
        <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
