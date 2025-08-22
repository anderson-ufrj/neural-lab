'use client';

import { useTranslations } from 'next-intl';
import { ExternalLink, TrendingUp, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Parallax } from '@/components/ui/parallax';
import { TiltCard } from '@/components/ui/tilt-card';

export function CaseStudies() {
  const t = useTranslations('cases');
  
  const cases = [
    {
      client: 'Cidadão.AI',
      logo: '🏛️',
      title: t('cidadao.title'),
      description: t('cidadao.description'),
      metrics: [
        { icon: Users, label: t('cidadao.metric1.label'), value: t('cidadao.metric1.value') },
        { icon: TrendingUp, label: t('cidadao.metric2.label'), value: t('cidadao.metric2.value') },
        { icon: Clock, label: t('cidadao.metric3.label'), value: t('cidadao.metric3.value') }
      ],
      testimonial: {
        text: t('cidadao.testimonial.text'),
        author: t('cidadao.testimonial.author'),
        role: t('cidadao.testimonial.role')
      },
      link: 'https://neural-thinker-cidadao-ai-backend.hf.space/docs',
      tech: ['FastAPI', 'LangChain', 'Groq', 'HuggingFace', 'Docker']
    },
    {
      client: 'Alê Assistant',
      logo: '🤖',
      title: t('ale.title'),
      description: t('ale.description'),
      metrics: [
        { icon: TrendingUp, label: t('ale.metric1.label'), value: t('ale.metric1.value') },
        { icon: Clock, label: t('ale.metric2.label'), value: t('ale.metric2.value') },
        { icon: Users, label: t('ale.metric3.label'), value: t('ale.metric3.value') }
      ],
      testimonial: {
        text: t('ale.testimonial.text'),
        author: t('ale.testimonial.author'),
        role: t('ale.testimonial.role')
      },
      link: '#',
      tech: ['Next.js', 'OpenAI', 'Vercel', 'TypeScript', 'Tailwind']
    }
  ];
  
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            {t('subtitle')}
          </p>
        </motion.div>
        
        <div className="space-y-20">
          {cases.map((case_, index) => (
            <Parallax key={index} speed={index % 2 === 0 ? -0.2 : 0.2}>
              <motion.div 
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{case_.logo}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{case_.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{case_.client}</p>
                  </div>
                  {case_.link !== '#' && (
                    <a 
                      href={case_.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                  {case_.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {case_.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Testimonial */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-600 transition-colors duration-300">
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4 transition-colors duration-300">
                    &ldquo;{case_.testimonial.text}&rdquo;
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">{case_.testimonial.author}</p>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{case_.testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Metrics */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <TiltCard className="transform-gpu">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-600 transition-colors duration-300">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">{t('results')}</h4>
                  <div className="space-y-8">
                    {case_.metrics.map((metric, metricIndex) => {
                      const Icon = metric.icon;
                      return (
                        <div key={metricIndex} className="flex items-center">
                          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4 transition-colors duration-300">
                            <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-colors duration-300" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{metric.value}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">{metric.label}</p>
                          </div>
                        </div>
                      );
                    })}
                    </div>
                  </div>
                </TiltCard>
              </div>
              </motion.div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}