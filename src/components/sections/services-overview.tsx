'use client';

import { useTranslations } from 'next-intl';
import { Brain, Rocket, Cog, Activity, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnalytics } from '@/hooks/use-analytics';

export function ServicesOverview() {
  const t = useTranslations('servicesOverview');
  const tServices = useTranslations('services');
  const { trackClick } = useAnalytics();
  
  const services = [
    {
      icon: Brain,
      title: tServices('ai.title'),
      description: tServices('ai.description'),
      features: [
        tServices('ai.feature1'),
        tServices('ai.feature2'),
        tServices('ai.feature3'),
        tServices('ai.feature4')
      ],
      color: 'border-blue-500'
    },
    {
      icon: Rocket,
      title: tServices('product.title'),
      description: tServices('product.description'),
      features: [
        tServices('product.feature1'),
        tServices('product.feature2'),
        tServices('product.feature3'),
        tServices('product.feature4')
      ],
      color: 'border-green-500'
    }
  ];
  
  return (
    <div>
      {/* Container Header - Service Bay */}
      <motion.div 
        className="inline-flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded text-xs font-mono uppercase tracking-wider mb-8 border-l-4 border-orange-500"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Cog className="w-3 h-3 animate-spin" />
        {t('header')}
        <Activity className="w-3 h-3 animate-pulse text-green-400" />
      </motion.div>

      <motion.h2 
        className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {t('engineeringServices')}
      </motion.h2>

      <motion.p 
        className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12 font-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {tServices('ai.description')}
      </motion.p>

      {/* Service Modules Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              className={`bg-gray-100 dark:bg-gray-800 p-8 border-l-4 ${service.color} hover:shadow-lg transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Service Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gray-900 dark:bg-gray-700 p-3 rounded">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 tracking-tight uppercase">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-3">
                <div className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                  {t('technicalSpecs')}
                </div>
                {service.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Status Indicator */}
              <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    {t('statusActive')}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 dark:text-green-400 uppercase tracking-wider">
                      {t('operational')}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action - Industrial */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-900 dark:bg-gray-800 text-white p-8 border-l-4 border-yellow-500">
          <div className="text-xs font-mono uppercase tracking-wider text-yellow-400 mb-3">
            {t('readyToDeploy')}
          </div>
          <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">
            {t('initiateProject')}
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {t('projectContact')}
          </p>
          <button 
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 font-black text-lg tracking-wide transition-colors uppercase"
            onClick={() => trackClick('cta_button', 'contact_engineering')}
          >
            {t('contactEngineering')}
          </button>
        </div>
      </motion.div>
    </div>
  );
}