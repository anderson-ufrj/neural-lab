'use client';

import { motion } from 'framer-motion';

interface BreathingCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  duration?: number;
}

export function BreathingCard({
  children,
  className = '',
  intensity = 1.02,
  duration = 4
}: BreathingCardProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, intensity, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }}
    >
      {children}
    </motion.div>
  );
}