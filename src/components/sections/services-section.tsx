'use client';

import { useLanguage } from '@/contexts/language-context';
import { ServicesGrid } from '@/components/shared/services-grid';

export function ServicesSection() {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-green-400 font-light">
            {t('services.subtitle')}
          </p>
        </div>
        
        <ServicesGrid />
      </div>
    </section>
  );
}