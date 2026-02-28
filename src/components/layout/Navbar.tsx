import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";
import PillNav from "@/components/ui/PillNav";

const Navbar = () => {
  const [activeHref, setActiveHref] = useState("#about");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when moving into the top portion
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHref(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections
    navLinks.forEach((link) => {
      if (link.href.startsWith("#")) {
        const sectionId = link.href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <PillNav
          logoAlt="Sanjai L"
          items={navLinks.map(link => ({
            label: link.label,
            href: link.href
          }))}
          activeHref={activeHref}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          initialLoadAnimation={false}
          onMobileMenuClick={() => console.log("Mobile menu clicked")}
        />
      </div>
    </div>
  );
};

export default Navbar;
