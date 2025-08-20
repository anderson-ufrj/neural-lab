'use client';

import { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  scaleIntensity?: number;
  glareEffect?: boolean;
}

export function TiltCard({
  children,
  className = '',
  tiltIntensity = 15,
  scaleIntensity = 1.05,
  glareEffect = true
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useSpring(0, { stiffness: 300, damping: 40 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 40 });
  const scale = useSpring(1, { stiffness: 300, damping: 40 });
  const glareOpacity = useSpring(0, { stiffness: 300, damping: 40 });
  const glareX = useSpring(0, { stiffness: 300, damping: 40 });
  const glareY = useSpring(0, { stiffness: 300, damping: 40 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const element = ref.current;
    const { left, top, width, height } = element.getBoundingClientRect();
    
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    const centerX = x - 0.5;
    const centerY = y - 0.5;
    
    rotateY.set(centerX * tiltIntensity);
    rotateX.set(-centerY * tiltIntensity);
    scale.set(scaleIntensity);
    
    if (glareEffect) {
      glareOpacity.set(0.3);
      glareX.set(x * 100);
      glareY.set(y * 100);
    }
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    glareOpacity.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Content */}
      <div style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
      
      {/* Glare effect */}
      {glareEffect && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, 
              rgba(255, 255, 255, 0.8) 0%, 
              rgba(255, 255, 255, 0.3) 20%, 
              transparent 50%)`,
            opacity: glareOpacity,
            borderRadius: 'inherit',
          }}
        />
      )}
      
      {/* Reflection layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent"
        style={{
          borderRadius: 'inherit',
          opacity: isHovered ? 0.1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}