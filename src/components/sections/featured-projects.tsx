'use client';

import { ContainerCard } from '@/components/ui/container-card';
import { ExternalLink, Github, Play, Info } from 'lucide-react';
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
      tech: ["Python", "FastAPI", "HuggingFace", "Multi-Agent", "Grafana", "Docker"],
      metrics: {
        agents: "15+ AI Agents",
        apis: "Multiple Gov APIs", 
        deployment: "HF Spaces",
        monitoring: "Full Observability"
      },
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
      tech: ["Next.js", "GPT-4", "TypeScript", "Vercel AI SDK", "Supabase"],
      metrics: {
        productivity: "60% Increase",
        response: "<2s Response",
        satisfaction: "95% Satisfaction",
        integrations: "10+ Tools"
      },
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
    },
    {
      id: "neural-lab",
      title: t('neuralLab.title'),
      description: t('neuralLab.description'),
      status: t('neuralLab.status'),
      tech: ["Next.js", "Three.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      metrics: {
        components: "50+ Components",
        animations: "3D Neural Networks",
        performance: "Optimized SSR",
        responsive: "Mobile First"
      },
      highlights: [
        t('neuralLab.highlight1'),
        t('neuralLab.highlight2'),
        t('neuralLab.highlight3'),
        t('neuralLab.highlight4')
      ],
      links: {
        live: "https://neural-lab.vercel.app",
        github: "https://github.com/anderson-ufrj/neural-lab"
      }
    },
    {
      id: "ai-automation",
      title: t('enterprise.title'),
      description: t('enterprise.description'),
      status: t('enterprise.status'),
      tech: ["LangChain", "OpenAI", "Azure", "Python", "REST APIs", "Webhooks"],
      metrics: {
        efficiency: "70% Time Saved",
        accuracy: "95% Automation Rate",
        clients: "Multiple Industries",
        integration: "Seamless APIs"
      },
      highlights: [
        t('enterprise.highlight1'),
        t('enterprise.highlight2'),
        t('enterprise.highlight3'),
        t('enterprise.highlight4')
      ],
      links: {
        contact: "mailto:anderson@neural-lab.ai"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production':
      case 'Produção': return 'text-green-700 bg-green-100 dark:bg-green-900/30';
      case 'Development':
      case 'Desenvolvimento': return 'text-blue-700 bg-blue-100 dark:bg-blue-900/30';
      case 'Consulting':
      case 'Consultoria': return 'text-purple-700 bg-purple-100 dark:bg-purple-900/30';
      default: return 'text-gray-700 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ContainerCard
              key={project.id}
              variant={index === 0 ? 'highlighted' : 'default'}
              size="large"
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                    </div>
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-semibold shrink-0
                      ${getStatusColor(project.status)}
                    `}>
                      {project.status}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      {t('techStack')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      {t('keyHighlights')}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
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
                        className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm"
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
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        {t('documentation')}
                      </a>
                    )}
                    {project.links.details && (
                      <Link
                        href={`/${locale}${project.links.details}`}
                        className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                      >
                        <Info className="w-4 h-4 mr-2" />
                        {t('viewDetails')}
                      </Link>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                <div className="lg:col-span-1">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    {t('projectMetrics')}
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ContainerCard>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('haveProject')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('discussProject')}
            </p>
            <button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
              onClick={() => trackClick('cta_button', 'start_project')}
            >
              {t('startProject')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}