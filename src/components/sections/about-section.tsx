'use client';

import { useLanguage } from '@/contexts/language-context';
import { CheckCircle, Code, Zap } from 'lucide-react';

export function AboutSection() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: CheckCircle,
      title: t('about.feature1.title'),
      description: t('about.feature1.desc')
    },
    {
      icon: Code,
      title: t('about.feature2.title'),
      description: t('about.feature2.desc')
    },
    {
      icon: Zap,
      title: t('about.feature3.title'),
      description: t('about.feature3.desc')
    }
  ];
  
  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-green-400 font-light mb-8">
            {t('about.subtitle')}
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 bg-gray-800/50 border border-gray-700 hover:bg-gray-800/70 transition-all duration-300"
                style={{ borderRadius: '1rem 0.5rem 1rem 0.5rem' }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-700/25 to-emerald-700/15 border border-green-600/35 mb-6" 
                     style={{ borderRadius: '0.5rem 1rem 0.5rem 1rem' }}>
                  <Icon className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}