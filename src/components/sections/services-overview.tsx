'use client';

import { useLanguage } from '@/contexts/language-context';
import { Brain, Rocket, ArrowRight } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { Parallax } from '@/components/ui/parallax';
import { motion } from 'framer-motion';

export function ServicesOverview() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      features: [
        t('services.ai.feature1'),
        t('services.ai.feature2'),
        t('services.ai.feature3'),
        t('services.ai.feature4')
      ]
    },
    {
      icon: Rocket,
      title: t('services.product.title'),
      description: t('services.product.description'),
      features: [
        t('services.product.feature1'),
        t('services.product.feature2'),
        t('services.product.feature3'),
        t('services.product.feature4')
      ]
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Parallax key={index} speed={index % 2 === 0 ? -0.3 : 0.3}>
                <GlassCard className="p-8 group">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <ArrowRight className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </GlassCard>
              </Parallax>
            );
          })}
        </div>
      </div>
    </section>
  );
}