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
import LiquidEther from "@/components/LiquidEther";
import SpotlightBackground from "@/components/ui/SpotlightBackground";
import LightRays from "@/components/ui/LightRays"; // Added LightRays import

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1, pointerEvents: 'none' }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={16}
          iterationsPoisson={16}
          resolution={0.4}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      {/* Added LightRays component */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
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
