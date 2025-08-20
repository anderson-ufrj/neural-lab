'use client';

import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          {t('hero.title')}
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold"
          >
            {t('hero.cta.primary')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            {t('hero.cta.secondary')}
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="border-t border-gray-200 pt-12">
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider font-medium">
            {t('hero.trust')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-400 font-semibold text-lg">PETROBRAS</div>
            <div className="text-gray-400 font-semibold text-lg">VALE</div>
            <div className="text-gray-400 font-semibold text-lg">AMBEV</div>
            <div className="text-gray-400 font-semibold text-lg">ITAÚ</div>
            <div className="text-gray-400 font-semibold text-lg">EMBRAER</div>
          </div>
        </div>
      </div>
    </section>
  );
}