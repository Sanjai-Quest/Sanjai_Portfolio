import { navLinks } from "@/data/portfolio";
import PillNav from "@/components/ui/PillNav";

const Navbar = () => {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <PillNav
          logoAlt="Sanjai L"
          items={navLinks.map(link => ({
            label: link.label,
            href: link.href
          }))}
          activeHref="/"
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
