'use client';

import { useLanguage } from '@/contexts/language-context';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { NeuralNetwork } from '@/components/ui/neural-network';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { MorphingBlob } from '@/components/ui/morphing-blob';

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Neural Network Background */}
      <NeuralNetwork />
      
      {/* Morphing Blobs */}
      <MorphingBlob 
        className="top-20 -left-20" 
        size={400} 
        color="bg-gradient-to-br from-purple-400/20 to-blue-500/20"
      />
      <MorphingBlob 
        className="-top-10 -right-32" 
        size={350} 
        color="bg-gradient-to-bl from-pink-400/20 to-purple-500/20"
      />
      <MorphingBlob 
        className="bottom-20 right-10" 
        size={300} 
        color="bg-gradient-to-tl from-blue-400/15 to-teal-500/15"
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TypingAnimation 
            text={t('hero.title')}
            speed={50}
            delay={500}
          />
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <MagneticButton className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
            {t('hero.cta.primary')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </MagneticButton>
          
          <MagneticButton className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium rounded-lg bg-white transition-colors">
            <MessageCircle className="mr-2 w-5 h-5" />
            {t('hero.cta.secondary')}
          </MagneticButton>
        </motion.div>
        
      </div>
    </section>
  );
}