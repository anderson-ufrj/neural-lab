'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface MorphingBlobProps {
  className?: string;
  size?: number;
  color?: string;
  animate?: boolean;
}

export function MorphingBlob({ 
  className = '', 
  size = 300, 
  color = 'bg-gradient-to-r from-purple-400/30 to-pink-400/30',
  animate = true 
}: MorphingBlobProps) {
  const pathRef = useRef<SVGPathElement>(null);
  
  useEffect(() => {
    if (!animate || !pathRef.current) return;

    const path = pathRef.current;
    const morphShapes = [
      // Original organic shape
      "M60,-60C80,-40,100,-20,100,0C100,20,80,40,60,60C40,80,20,100,0,100C-20,100,-40,80,-60,60C-80,40,-100,20,-100,0C-100,-20,-80,-40,-60,-60C-40,-80,-20,-100,0,-100C20,-100,40,-80,60,-60Z",
      // More rounded
      "M70,-50C90,-30,110,-10,110,10C110,30,90,50,70,70C50,90,30,110,10,110C-10,110,-30,90,-50,70C-70,50,-90,30,-90,10C-90,-10,-70,-30,-50,-50C-30,-70,-10,-90,10,-90C30,-90,50,-70,70,-50Z",
      // Stretched
      "M80,-40C100,-20,120,0,120,20C120,40,100,60,80,80C60,100,40,120,20,120C0,120,-20,100,-40,80C-60,60,-80,40,-80,20C-80,0,-60,-20,-40,-40C-20,-60,0,-80,20,-80C40,-80,60,-60,80,-40Z",
      // Wavy
      "M50,-70C70,-50,90,-30,90,-10C90,10,70,30,50,50C30,70,10,90,-10,90C-30,90,-50,70,-70,50C-90,30,-110,10,-110,-10C-110,-30,-90,-50,-70,-70C-50,-90,-30,-110,-10,-110C10,-110,30,-90,50,-70Z"
    ];

    let currentIndex = 0;
    
    const animateMorph = () => {
      currentIndex = (currentIndex + 1) % morphShapes.length;
      const nextShape = morphShapes[currentIndex];
      
      path.style.transition = 'all 3s ease-in-out';
      path.setAttribute('d', nextShape);
      
      setTimeout(animateMorph, 3000 + Math.random() * 2000); // Random delay between 3-5s
    };

    // Start animation after 1s
    const startTimeout = setTimeout(animateMorph, 1000);
    
    return () => {
      clearTimeout(startTimeout);
    };
  }, [animate]);

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <motion.div
        className={`w-${size} h-${size} ${color} rounded-full blur-3xl`}
        style={{ width: size, height: size }}
        animate={{
          scale: [1, 1.2, 0.8, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
          x: [0, 20, -20, 10, 0],
          y: [0, -20, 20, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* SVG Morphing Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          width={size} 
          height={size} 
          viewBox="-150 -150 300 300"
          className="opacity-40"
        >
          <defs>
            <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            ref={pathRef}
            d="M60,-60C80,-40,100,-20,100,0C100,20,80,40,60,60C40,80,20,100,0,100C-20,100,-40,80,-60,60C-80,40,-100,20,-100,0C-100,-20,-80,-40,-60,-60C-40,-80,-20,-100,0,-100C20,-100,40,-80,60,-60Z"
            fill="url(#blobGradient)"
            className="filter blur-sm"
          />
        </svg>
      </div>
    </div>
  );
}