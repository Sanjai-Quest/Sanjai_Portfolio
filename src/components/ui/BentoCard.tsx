import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { techColors } from "@/data/portfolio";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: "large" | "medium" | "small";
  techStack?: string[];
}

const BentoCard = ({ children, className = "", size = "medium", techStack }: BentoCardProps) => {
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-1",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 30px rgba(0, 212, 255, 0.15)",
      }}
      transition={{ duration: 0.3 }}
      className={`card-tech p-6 relative overflow-hidden group ${sizeClasses[size]} ${className}`}
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsla(191, 100%, 50%, 0.06) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10">
        {children}
        {techStack && (
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full text-xs font-code border"
                style={{
                  borderColor: `hsl(${techColors[tech] || "191 100% 50%"} / 0.3)`,
                  background: `hsl(${techColors[tech] || "191 100% 50%"} / 0.08)`,
                  color: `hsl(${techColors[tech] || "191 100% 50%"})`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BentoCard;
