'use client';

import { useLanguage } from '@/contexts/language-context';
import { ExternalLink, TrendingUp, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Parallax } from '@/components/ui/parallax';
import { TiltCard } from '@/components/ui/tilt-card';

export function CaseStudies() {
  const { t } = useLanguage();
  
  const cases = [
    {
      client: 'Cidadão.AI',
      logo: '🏛️',
      title: t('cases.cidadao.title'),
      description: t('cases.cidadao.description'),
      metrics: [
        { icon: Users, label: t('cases.cidadao.metric1.label'), value: t('cases.cidadao.metric1.value') },
        { icon: TrendingUp, label: t('cases.cidadao.metric2.label'), value: t('cases.cidadao.metric2.value') },
        { icon: Clock, label: t('cases.cidadao.metric3.label'), value: t('cases.cidadao.metric3.value') }
      ],
      testimonial: {
        text: t('cases.cidadao.testimonial.text'),
        author: t('cases.cidadao.testimonial.author'),
        role: t('cases.cidadao.testimonial.role')
      },
      link: 'https://neural-thinker-cidadao-ai-backend.hf.space/docs',
      tech: ['FastAPI', 'LangChain', 'Groq', 'HuggingFace', 'Docker']
    },
    {
      client: 'Alê Assistant',
      logo: '🤖',
      title: t('cases.ale.title'),
      description: t('cases.ale.description'),
      metrics: [
        { icon: TrendingUp, label: t('cases.ale.metric1.label'), value: t('cases.ale.metric1.value') },
        { icon: Clock, label: t('cases.ale.metric2.label'), value: t('cases.ale.metric2.value') },
        { icon: Users, label: t('cases.ale.metric3.label'), value: t('cases.ale.metric3.value') }
      ],
      testimonial: {
        text: t('cases.ale.testimonial.text'),
        author: t('cases.ale.testimonial.author'),
        role: t('cases.ale.testimonial.role')
      },
      link: '#',
      tech: ['Next.js', 'OpenAI', 'Vercel', 'TypeScript', 'Tailwind']
    }
  ];
  
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {t('cases.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('cases.subtitle')}
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
                    <h3 className="text-2xl font-bold text-gray-900">{case_.title}</h3>
                    <p className="text-gray-600">{case_.client}</p>
                  </div>
                  {case_.link !== '#' && (
                    <a 
                      href={case_.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {case_.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {case_.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Testimonial */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <p className="text-gray-700 italic mb-4">
                    &ldquo;{case_.testimonial.text}&rdquo;
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">{case_.testimonial.author}</p>
                    <p className="text-gray-600">{case_.testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Metrics */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <TiltCard className="transform-gpu">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-8">{t('cases.results')}</h4>
                  <div className="space-y-8">
                    {case_.metrics.map((metric, metricIndex) => {
                      const Icon = metric.icon;
                      return (
                        <div key={metricIndex} className="flex items-center">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                            <Icon className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                            <p className="text-gray-600 text-sm">{metric.label}</p>
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