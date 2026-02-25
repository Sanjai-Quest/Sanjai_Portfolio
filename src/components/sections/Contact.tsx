import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { Send, Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading text-foreground">Get In Touch</h2>
          <p className="section-subheading mb-12">Let's build something great together</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name" as const, label: "Name", type: "text" },
                { name: "email" as const, label: "Email", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="text-xs font-code text-muted-foreground block mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={form[field.name]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-body placeholder:text-muted-foreground/40"
                    placeholder={`Your ${field.label.toLowerCase()}`}
                  />
                </div>
              ))}
              <div>
                <label className="text-xs font-code text-muted-foreground block mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-body placeholder:text-muted-foreground/40 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <MagneticButton>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-code text-sm hover:opacity-90 transition-opacity glow-cyan"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </MagneticButton>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just a friendly chat about tech.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Github, label: "GitHub", href: personalInfo.github },
                  { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/30 transition-colors group"
                  >
                    <Icon size={18} className="text-primary" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
