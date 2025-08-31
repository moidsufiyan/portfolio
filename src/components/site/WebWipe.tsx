import { AnimatePresence, motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect, useState } from "react";

export const WebWipe = () => {
  const { active } = useActiveSection();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((c) => c + 1);
  }, [active]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={count}
        className="pointer-events-none fixed inset-y-0 left-0 z-[60]"
        initial={{ x: "-110%" }}
        animate={{ x: "110%" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        aria-hidden
      >
        {/* Main web strand */}
        <div
          className="h-full w-[24vw] skew-x-[-12deg] opacity-40"
          style={{
            background:
              "linear-gradient(90deg, hsla(353,81%,38%,0) 0%, hsla(353,81%,38%,0.9) 35%, hsla(0,0%,100%,0.8) 50%, hsla(353,81%,38%,0.9) 65%, hsla(353,81%,38%,0) 100%)",
          }}
        />
        {/* Secondary web strand */}
        <div
          className="absolute inset-0 h-full w-[12vw] skew-x-[-8deg] opacity-20 ml-[6vw]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default WebWipe;
