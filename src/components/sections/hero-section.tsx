'use client';

import { useTranslations } from 'next-intl';
import { Activity, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const t = useTranslations('hero');
  
  return (
    <section className="relative pt-32 pb-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Grid overlay - matching site pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(90deg, rgba(156,163,175,0.5) 1px, transparent 1px), linear-gradient(180deg, rgba(156,163,175,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* Container corners - industrial theme */}
      <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-gray-400/30"></div>
      <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-gray-400/30"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-gray-400/30"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-gray-400/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Industrial header - signature pattern */}
        <motion.div 
          className="inline-flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 text-xs font-mono uppercase tracking-wider mb-8 border-l-4 border-green-500"
          style={{ borderRadius: '0.25rem 0.75rem 0.25rem 0.75rem' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Terminal className="w-3 h-3" />
          {t('status')}
          <Activity className="w-3 h-3 animate-pulse text-green-400" />
        </motion.div>

        <div className="text-center mb-16">
          
          {/* Main heading - following site typography */}
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('title')}
          </motion.h1>
          
          {/* Subtitle with green accent - matching site pattern */}
          <motion.p
            className="text-xl text-green-400 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('subtitle')}
          </motion.p>
        </div>
          
      </div>
    </section>
  );
}