import { useEffect, useState, useCallback } from "react";

const SpotlightBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, hsla(191, 100%, 50%, 0.04), transparent 40%)`,
      }}
    />
  );
};

export default SpotlightBackground;
