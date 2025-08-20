'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  stagger?: number;
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  stagger = 0.05
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const directionVariants = {
    up: { y: 30, opacity: 0 },
    down: { y: -30, opacity: 0 },
    left: { x: 30, opacity: 0 },
    right: { x: -30, opacity: 0 }
  };

  const words = typeof children === 'string' 
    ? children.split(' ') 
    : [children];

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          initial={directionVariants[direction]}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]}
          transition={{
            duration: 0.6,
            delay: delay + index * stagger,
            ease: [0.25, 0.4, 0.25, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}