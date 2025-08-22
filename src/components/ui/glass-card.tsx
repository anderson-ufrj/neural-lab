'use client';

import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`
        backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 border border-white/20 dark:border-gray-600/30
        shadow-xl shadow-black/5 dark:shadow-black/20 rounded-2xl transition-colors duration-300
        ${hover ? 'hover:bg-white/20 dark:hover:bg-gray-700/40 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}