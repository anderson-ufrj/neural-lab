import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Users, Shield, BarChart3, Clock } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

export const metadata: Metadata = {
  title: 'Cidadão.AI - Transparência Governamental com IA | Neural LAB',
  description: 'Sistema multi-agente de IA para análise de transparência governamental usando personas culturais brasileiras.',
};

export default function CidadaoAIPage({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link 
            href={`/${params.locale}#portfolio`}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar aos projetos</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              🇧🇷 Cidadão.AI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Plataforma de Transparência Governamental com Inteligência Artificial
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <Users className="w-5 h-5 text-green-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">17+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Agentes IA</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <BarChart3 className="w-5 h-5 text-green-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">85%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Redução de tempo</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <Shield className="w-5 h-5 text-green-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Segurança</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <Clock className="w-5 h-5 text-green-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">4 meses</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Desenvolvimento</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://anderson-ufrj.github.io/cidadao.ai-docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Ver Documentação
              </a>
              <a
                href="https://github.com/anderson-ufrj/cidadao.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                Código Fonte
              </a>
            </div>
          </div>

          {/* Content sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sobre o Projeto</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                O Cidadão.AI é o primeiro sistema multi-agente de IA do Brasil para transparência governamental. 
                Utilizamos personas culturais brasileiras para criar agentes especializados que analisam dados públicos 
                e facilitam o acesso à informação.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Cada agente é inspirado em figuras históricas brasileiras, como Zumbi dos Palmares (detector de anomalias), 
                Anita Garibaldi (analista de dados) e Tiradentes (gerador de relatórios).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tecnologias Utilizadas</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Python + FastAPI</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">LangChain + Groq</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">PostgreSQL + Redis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Docker + Kubernetes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Prometheus + Grafana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Funcionalidades Principais</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  🔍 Análise Multi-Agente
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sistema distribuído com agentes especializados em diferentes aspectos da transparência pública.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  📊 Monitoramento em Tempo Real
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Stack completo de observabilidade com métricas, logs e traces para garantir performance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  🛡️ Segurança Enterprise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Implementação robusta com autenticação JWT, rate limiting e criptografia de dados sensíveis.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  🚀 API RESTful Completa
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Documentação interativa com Swagger UI e endpoints bem estruturados para integração.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}