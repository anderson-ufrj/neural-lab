'use client';

import { useLanguage } from '@/contexts/language-context';
import { motion } from 'framer-motion';
import { Parallax } from '@/components/ui/parallax';

export function AboutStory() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h2>
        </motion.div>
        
        <Parallax speed={-0.1}>
          <motion.div 
            className="prose prose-lg prose-gray max-w-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {t('about.paragraph1')}
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {t('about.paragraph2')}
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {t('about.paragraph3')}
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('about.approach.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('about.approach.ownership.title')}
                </h4>
                <p className="text-gray-600">
                  {t('about.approach.ownership.description')}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('about.approach.partnership.title')}
                </h4>
                <p className="text-gray-600">
                  {t('about.approach.partnership.description')}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('about.approach.quality.title')}
                </h4>
                <p className="text-gray-600">
                  {t('about.approach.quality.description')}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('about.approach.innovation.title')}
                </h4>
                <p className="text-gray-600">
                  {t('about.approach.innovation.description')}
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('about.paragraph4')}
          </p>
          </motion.div>
        </Parallax>
      </div>
    </section>
  );
}