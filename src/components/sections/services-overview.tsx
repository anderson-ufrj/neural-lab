'use client';

import { useLanguage } from '@/contexts/language-context';
import { Brain, Rocket, ArrowRight } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}