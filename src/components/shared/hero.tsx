'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background inspired by concrete */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />
      
      {/* Concrete texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-green-800/8 to-transparent" />
      
      {/* Organic curved elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-bl from-green-700/15 to-emerald-800/8 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-green-800/12 to-teal-700/6 blur-3xl" />
      
      {/* Concrete grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(107,114,128,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(107,114,128,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/60 border border-green-700/40 backdrop-blur-sm" style={{
              borderRadius: '2rem 0.5rem 2rem 0.5rem'
            }}>
              <Sparkles className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-200 tracking-wide">{t('hero.badge')}</span>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            <span className="block mb-2">{t('hero.title.line1')}</span>
            <span className="block bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent mb-4">
              {t('hero.title.line2')}
            </span>
          </h1>
          
          <div className="text-center mb-8">
            <p className="text-2xl sm:text-3xl font-light text-gray-300 italic">
              {t('hero.subtitle')}
            </p>
          </div>
          
          {/* Subheading */}
          <p className="text-center text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
            {t('hero.description')}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-white border-0 shadow-2xl shadow-green-900/50 font-semibold"
              style={{ borderRadius: '0.5rem 1.5rem 0.5rem 1.5rem' }}
            >
              <Link href="#contact" className="inline-flex items-center gap-2">
                {t('hero.cta.primary')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-green-200"
              style={{ borderRadius: '1.5rem 0.5rem 1.5rem 0.5rem' }}
            >
              <Link href="#portfolio">
                {t('hero.cta.secondary')}
              </Link>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-center text-sm text-gray-400 mb-6 font-light">{t('hero.trust')}</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-gray-400 font-medium tracking-wider">MINERAÇÃO.AI</div>
              <div className="text-gray-400 font-medium tracking-wider">AGROTECH.BR</div>
              <div className="text-gray-400 font-medium tracking-wider">BIOLAB.AI</div>
              <div className="text-gray-400 font-medium tracking-wider">ECOTECH</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}