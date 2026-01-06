import { motion } from "framer-motion";

export const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 100, 50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-brand-pink/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -60, 60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-brand-cyan/15 rounded-full blur-3xl"
      />
    </div>
  );
};
