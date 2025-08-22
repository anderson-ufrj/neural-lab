'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

interface FloatingElement {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

export function FloatingElements({ count = 6, className = '' }: FloatingElementsProps) {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Generate elements only on client side to avoid hydration mismatch
    const newElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 20,
      color: [
        'bg-blue-300/20',
        'bg-purple-300/20',
        'bg-pink-300/20',
        'bg-teal-300/20',
        'bg-green-300/20',
        'bg-yellow-300/20'
      ][Math.floor(Math.random() * 6)]
    }));
    setElements(newElements);
  }, [count]);

  // Don't render anything until elements are generated
  if (elements.length === 0) {
    return null;
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full blur-sm ${element.color}`}
          style={{
            width: element.size,
            height: element.size,
            left: `${element.left}%`,
            top: '100%',
          }}
          animate={{
            y: [0, -1200],
            x: [0, Math.sin(element.id) * 100],
            rotate: [0, 360],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.1, 0.9, 1]
          }}
        />
      ))}
    </div>
  );
}