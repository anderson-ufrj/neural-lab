'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContainerCardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'highlighted' | 'accent';
}

export function ContainerCard({ 
  children, 
  title,
  subtitle,
  className = '',
  size = 'medium',
  variant = 'default'
}: ContainerCardProps) {
  
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'p-6';
      case 'large':
        return 'p-10';
      default:
        return 'p-8';
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'highlighted':
        return 'bg-white dark:bg-gray-800 shadow-lg border border-blue-200 dark:border-blue-800';
      case 'accent':
        return 'bg-blue-50 dark:bg-blue-950/30 shadow-md border border-blue-300 dark:border-blue-700';
      default:
        return 'bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <motion.div
      className={`
        relative rounded-lg overflow-hidden
        ${getSizeStyles()}
        ${getVariantStyles()}
        transition-all duration-300 ease-in-out
        hover:shadow-xl hover:-translate-y-1
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Container ID Label */}
      <div className="absolute top-2 right-2 text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
        {variant.toUpperCase()}
      </div>
      
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Container Alignment Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full grid grid-cols-12 grid-rows-8 gap-1">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}