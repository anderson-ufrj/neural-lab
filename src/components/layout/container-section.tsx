'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContainerSectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  size?: 'small' | 'medium' | 'large' | 'full';
  alignment?: 'left' | 'center' | 'right';
}

export function ContainerSection({ 
  children, 
  className = '', 
  variant = 'neutral',
  size = 'full',
  alignment = 'center'
}: ContainerSectionProps) {
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-white dark:bg-gray-900 border-l-4 border-blue-500';
      case 'secondary':
        return 'bg-gray-50 dark:bg-gray-800 border-l-4 border-green-500';
      case 'accent':
        return 'bg-blue-50 dark:bg-blue-950/20 border-l-4 border-orange-500';
      default:
        return 'bg-gray-50 dark:bg-gray-900';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'max-w-4xl mx-auto';
      case 'medium':
        return 'max-w-6xl mx-auto';
      case 'large':
        return 'max-w-7xl mx-auto';
      default:
        return 'w-full';
    }
  };

  const getAlignmentStyles = () => {
    switch (alignment) {
      case 'left':
        return 'text-left';
      case 'right':
        return 'text-right';
      default:
        return 'text-center';
    }
  };

  return (
    <motion.section 
      className={`
        relative py-20 px-4 sm:px-6 lg:px-8
        ${getVariantStyles()}
        transition-all duration-300 ease-in-out
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Container Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(156,163,175,0.5) 1px, transparent 1px),
            linear-gradient(180deg, rgba(156,163,175,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Content Container */}
      <div className={`
        relative z-10 
        ${getSizeStyles()} 
        ${getAlignmentStyles()}
      `}>
        {children}
      </div>
      
      {/* Container Corner Indicators */}
      <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-gray-400/30"></div>
      <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-gray-400/30"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-gray-400/30"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-gray-400/30"></div>
    </motion.section>
  );
}