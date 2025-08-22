'use client';

import { TechCarousel } from '@/components/ui/tech-carousel';
import { motion } from 'framer-motion';
import { Cpu, Activity, Zap } from 'lucide-react';

export function TechnologiesStack() {

  return (
    <div>
      {/* Container Header - Engine Room */}
      <motion.div 
        className="inline-flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded text-xs font-mono uppercase tracking-wider mb-8 border-l-4 border-green-500"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Cpu className="w-3 h-3" />
        ENGINE ROOM • TECHNOLOGY STACK • ACTIVE
        <Activity className="w-3 h-3 animate-pulse text-green-400" />
      </motion.div>

      <motion.h2 
        className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        CORE TECHNOLOGY SYSTEMS
      </motion.h2>

      <motion.p 
        className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12 font-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Comprehensive expertise across AI, Cloud Infrastructure, Development, and DevOps. 
        Ready to architect and build scalable solutions for your business.
      </motion.p>

      {/* Industrial Carousel Container */}
      <motion.div 
        className="bg-gray-100 dark:bg-gray-800 p-8 border-l-4 border-green-500 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gray-900 dark:bg-gray-700 p-2 rounded">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight uppercase">
              DEPLOYED TECHNOLOGIES
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
              33+ technologies • Production ready • High availability
            </p>
          </div>
        </div>

        <TechCarousel />

        {/* System Status */}
        <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-600 flex items-center justify-between">
          <div className="text-xs font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider">
            SYSTEM STATUS: ALL OPERATIONAL
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-green-600 dark:text-green-400 uppercase tracking-wider">
              READY FOR DEPLOYMENT
            </span>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}