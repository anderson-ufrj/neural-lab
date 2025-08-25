'use client';

import { ContainerCard } from '@/components/ui/container-card';
import { ExternalLink, Github, Play, Info, Users, Brain } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useAnalytics } from '@/hooks/use-analytics';

export function FeaturedProjects() {
  const t = useTranslations('featuredProjects');
  const locale = useLocale();
  const { trackClick } = useAnalytics();

  const projects = [
    {
      id: "cidadao-ai",
      title: t('cidadao.title'),
      description: t('cidadao.description'),
      status: t('cidadao.status'),
      color: "blue",
      icon: <Users className="w-6 h-6" />,
      tech: ["Python", "FastAPI", "HuggingFace", "Multi-Agent", "Grafana", "Docker"],
      metrics: [
        { label: "Agentes IA", value: "17+" },
        { label: "APIs Gov", value: "Multiple" },
        { label: "Deploy", value: "HF Spaces" },
        { label: "Monitoring", value: "Full Stack" }
      ],
      highlights: [
        t('cidadao.highlight1'),
        t('cidadao.highlight2'),
        t('cidadao.highlight3'),
        t('cidadao.highlight4')
      ],
      links: {
        live: "https://neural-thinker-cidadao-ai-backend.hf.space/",
        github: "https://github.com/anderson-ufrj/cidadao.ai-backend",
        docs: "https://anderson-ufrj.github.io/cidadao.ai-docs/",
        details: `/projects/cidadao-ai`
      }
    },
    {
      id: "ale-assistant",
      title: t('aleAssistant.title'),
      description: t('aleAssistant.description'),
      status: t('aleAssistant.status'),
      color: "purple",
      icon: <Brain className="w-6 h-6" />,
      tech: ["Next.js", "GPT-4", "TypeScript", "Vercel AI SDK", "Supabase"],
      metrics: [
        { label: "Produtividade", value: "60%" },
        { label: "Resposta", value: "<2s" },
        { label: "Satisfação", value: "95%" },
        { label: "Integrações", value: "10+" }
      ],
      highlights: [
        t('aleAssistant.highlight1'),
        t('aleAssistant.highlight2'),
        t('aleAssistant.highlight3'),
        t('aleAssistant.highlight4')
      ],
      links: {
        live: `https://ale-assistant.vercel.app/${locale}`,
        details: `/projects/ale-assistant`
      }
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          border: 'border-blue-500',
          text: 'text-blue-600 dark:text-blue-400',
          bg: 'bg-blue-500',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      case 'purple':
        return {
          border: 'border-purple-500', 
          text: 'text-purple-600 dark:text-purple-400',
          bg: 'bg-purple-500',
          button: 'bg-purple-600 hover:bg-purple-700'
        };
      default:
        return {
          border: 'border-gray-500',
          text: 'text-gray-600 dark:text-gray-400', 
          bg: 'bg-gray-500',
          button: 'bg-gray-600 hover:bg-gray-700'
        };
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Industrial */}
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-4">
            BAÍA DE SERVIÇOS • SOLUÇÕES DE ENGENHARIA • OPERACIONAL
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-mono max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <ContainerCard
                key={project.id}
                variant={index === 0 ? 'highlighted' : 'default'}
                size="large"
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    {/* Project Header */}
                    <div className={`border-l-4 ${colors.border} pl-6 mb-6`}>
                      <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider ${colors.text} mb-2`}>
                        {project.icon}
                        <span>PROJETO • {project.status.toUpperCase()}</span>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-mono">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Industrial */}
                    <div className="mb-6">
                      <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">
                        {t('techStack')} IMPLANTADO
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="px-3 py-1 bg-gray-900 dark:bg-gray-700 text-gray-100 dark:text-gray-300 font-mono text-xs uppercase tracking-wider"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights Industrial */}
                    <div className="mb-6">
                      <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">
                        {t('keyHighlights')} SISTEMA
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <div
                            key={highlightIndex}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-400 font-mono"
                          >
                            <div className={`w-2 h-2 ${colors.bg} mr-3 flex-shrink-0`}></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Links Industrial */}
                    <div className="flex flex-wrap gap-3">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-4 py-2 ${colors.button} text-white font-mono font-black text-xs uppercase tracking-wider transition-colors`}
                          onClick={() => trackClick('project_link', `${project.title}_live_demo`)}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t('liveDemo')}
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-800 text-white hover:bg-gray-900 font-mono font-black text-xs uppercase tracking-wider transition-colors"
                          onClick={() => trackClick('project_link', `${project.title}_github`)}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          {t('sourceCode')}
                        </a>
                      )}
                      {project.links.docs && (
                        <a
                          href={project.links.docs}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-green-600 text-white hover:bg-green-700 font-mono font-black text-xs uppercase tracking-wider transition-colors"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          {t('documentation')}
                        </a>
                      )}
                      {project.links.details && (
                        <Link
                          href={`/${locale}${project.links.details}`}
                          className="inline-flex items-center px-4 py-2 bg-gray-700 text-white hover:bg-gray-800 font-mono font-black text-xs uppercase tracking-wider transition-colors"
                        >
                          <Info className="w-4 h-4 mr-2" />
                          {t('viewDetails')}
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Metrics Industrial */}
                  <div className="lg:col-span-1">
                    <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-4">
                      {t('projectMetrics')} SISTEMA
                    </div>
                    <div className="space-y-3">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="p-3 bg-gray-900 dark:bg-gray-700 border-l-4 border-green-500">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                              {metric.label}:
                            </span>
                            <span className="text-sm font-black text-green-400 font-mono">
                              {metric.value}
                            </span>
                          </div>
                        </div>
                      ))}
                      
                      {/* Status Indicator */}
                      <div className="mt-4 p-3 bg-gray-900 dark:bg-gray-700 border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                            STATUS:
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-black text-green-400 font-mono uppercase">
                              OPERACIONAL
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ContainerCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}