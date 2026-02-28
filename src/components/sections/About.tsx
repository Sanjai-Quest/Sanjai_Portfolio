import { aboutText } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlitchText from "@/components/ui/GlitchText";
import ProfileCard from "@/components/ui/ProfileCard";

const About = () => (
  <section id="about" className="relative py-20">
    <div className="section-container">
      <ScrollReveal>
        <GlitchText text="> whoami" className="section-heading text-primary font-code mb-12" />
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal delay={0.1}>
          <div className="space-y-6">
            {aboutText.split("\n\n").map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex justify-center">
          <ProfileCard
            name="SANJAI L"
            title="Software Engineering Student"
            handle="Sanjai-Quest"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/MeeProfilePic.jpeg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              const el = document.querySelector("#contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default About;
