import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface NumberTickerProps {
  value: number;
  suffix?: string;
  label: string;
}

const NumberTicker = ({ value, suffix = "", label }: NumberTickerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const stepTime = duration / value;
    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-mono font-bold text-primary text-glow">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2 font-code">{label}</div>
    </motion.div>
  );
};

export default NumberTicker;
