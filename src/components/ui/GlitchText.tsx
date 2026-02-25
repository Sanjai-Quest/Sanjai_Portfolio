import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

const GlitchText = ({ text, className = "", as: Tag = "h2" }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Tag className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 text-primary opacity-70"
            style={{
              clipPath: "inset(20% 0 60% 0)",
              transform: "translate(-2px, 2px)",
            }}
            aria-hidden
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 text-secondary opacity-70"
            style={{
              clipPath: "inset(60% 0 10% 0)",
              transform: "translate(2px, -1px)",
            }}
            aria-hidden
          >
            {text}
          </span>
        </>
      )}
    </Tag>
  );
};

export default GlitchText;
