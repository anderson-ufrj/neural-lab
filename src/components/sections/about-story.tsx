'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Parallax } from '@/components/ui/parallax';
import { FloatingElements } from '@/components/ui/floating-elements';
import { TextReveal } from '@/components/ui/text-reveal';
import { BreathingCard } from '@/components/ui/breathing-card';

export function AboutStory() {
  const t = useTranslations('about');
  
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      <FloatingElements count={4} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TextReveal className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            {t('title')}
          </TextReveal>
        </motion.div>
        
        <Parallax speed={-0.1}>
          <motion.div 
            className="prose prose-lg prose-gray max-w-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-300">
            {t('paragraph1')}
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-300">
            {t('paragraph2')}
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-300">
            {t('paragraph3')}
          </p>
          
          <BreathingCard intensity={1.005} duration={8}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 my-12 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              {t('approach.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  {t('approach.ownership.title')}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {t('approach.ownership.description')}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  {t('approach.partnership.title')}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {t('approach.partnership.description')}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  {t('approach.quality.title')}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {t('approach.quality.description')}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  {t('approach.innovation.title')}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {t('approach.innovation.description')}
                </p>
              </div>
            </div>
            </div>
          </BreathingCard>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('paragraph4')}
          </p>
          </motion.div>
        </Parallax>
      </div>
    </section>
  );
}