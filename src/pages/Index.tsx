import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Hackathons from "@/components/sections/Hackathons";
import Certifications from "@/components/sections/Certifications";
import WhyHireMe from "@/components/sections/WhyHireMe";
import Contact from "@/components/sections/Contact";
import SpotlightBackground from "@/components/ui/SpotlightBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <SpotlightBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Hackathons />
        <Certifications />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
