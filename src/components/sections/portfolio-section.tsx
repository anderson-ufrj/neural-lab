'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getCases } from '@/lib/content';
import { ExternalLink, Code } from 'lucide-react';
import Link from 'next/link';

export function PortfolioSection() {
  const t = useTranslations('portfolio');
  const language = useLocale();
  const cases = getCases(language).sort((a, b) => a.order - b.order);
  
  return (
    <section id="portfolio" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-green-400 font-light">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((case_) => (
            <Card 
              key={case_.id} 
              className="h-full bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-gradient-to-br from-green-700/25 to-emerald-700/15 border border-green-600/35" 
                       style={{ borderRadius: '0.25rem 0.75rem 0.25rem 0.75rem' }}>
                    <Code className="w-5 h-5 text-green-500" />
                  </div>
                  {case_.link && case_.link !== '#' && (
                    <Link 
                      href={case_.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="p-2 text-gray-400 hover:text-green-200 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-green-200 transition-colors font-semibold">
                  {case_.title}
                </CardTitle>
                <CardDescription className="text-gray-400 font-light">
                  {case_.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {case_.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {case_.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-green-700/20 text-green-300 border border-green-600/30"
                        style={{ borderRadius: '0.25rem 0.5rem 0.25rem 0.5rem' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div 
                  className="text-sm text-gray-300 leading-relaxed prose prose-sm prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: case_.content.replace(/<h[1-6][^>]*>.*?<\/h[1-6]>/g, '').substring(0, 200) + '...' }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}