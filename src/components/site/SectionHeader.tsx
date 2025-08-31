import { motion } from "framer-motion";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeader = ({ children, className = "" }: SectionHeaderProps) => {
  return (
    <motion.h2 
      className={`text-3xl md:text-4xl font-bold text-center mb-12 text-foreground swing-in ${className}`}
      initial={{ opacity: 0, y: -50, rotate: -15 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  );
};