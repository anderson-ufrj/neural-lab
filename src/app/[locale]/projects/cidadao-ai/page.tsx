import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Users, Shield, BarChart3, Zap } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ContainerCard } from '@/components/ui/container-card';
import { ContainerSection } from '@/components/layout/container-section';

export default function CidadaoAIPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      
      <main className="space-y-0">
        {/* Header Container */}
        <ContainerSection variant="primary" size="large">
          <div className="pt-16 pb-8">
            <Link 
              href={`/${params.locale}#portfolio`}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors font-mono text-sm uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← PORTFOLIO</span>
            </Link>

            <div className="border-l-4 border-blue-500 pl-6">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                PROJETO • TRANSPARÊNCIA PÚBLICA • PRODUÇÃO
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                🇧🇷 CIDADÃO.AI
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-mono">
                SISTEMA MULTI-AGENTE PARA TRANSPARÊNCIA GOVERNAMENTAL
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <ContainerCard size="small" className="text-center">
                <Users className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-gray-900 dark:text-white font-mono">17+</div>
                <div className="text-xs font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400">AGENTES IA</div>
              </ContainerCard>
              <ContainerCard size="small" className="text-center">
                <BarChart3 className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-gray-900 dark:text-white font-mono">85%</div>
                <div className="text-xs font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400">REDUÇÃO TEMPO</div>
              </ContainerCard>
              <ContainerCard size="small" className="text-center">
                <Shield className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <div className="text-xl font-black text-gray-900 dark:text-white font-mono">ENTERPRISE</div>
                <div className="text-xs font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400">SEGURANÇA</div>
              </ContainerCard>
              <ContainerCard size="small" className="text-center">
                <Zap className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <div className="text-xl font-black text-gray-900 dark:text-white font-mono">PRODUÇÃO</div>
                <div className="text-xs font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400">STATUS</div>
              </ContainerCard>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://anderson-ufrj.github.io/cidadao.ai-docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-mono font-black text-sm uppercase tracking-wider transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                DOCUMENTAÇÃO
              </a>
              <a
                href="https://github.com/anderson-ufrj/cidadao.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-mono font-black text-sm uppercase tracking-wider transition-colors"
              >
                <Github className="w-4 h-4" />
                CÓDIGO FONTE
              </a>
            </div>
          </div>
        </ContainerSection>

        {/* Content sections */}
        <ContainerSection variant="neutral" size="large">
          <div className="py-12">
            <div className="text-center mb-12">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-4">
                ESPECIFICAÇÕES TÉCNICAS • SISTEMA OPERACIONAL
              </div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                ARQUITETURA DO SISTEMA
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ContainerCard>
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-green-600 mb-3">
                    CONCEITO • FUNCIONAMENTO
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 uppercase">
                    AGENTES BRASILEIROS
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 font-mono leading-relaxed">
                    <p>→ ZUMBI DOS PALMARES: Detecção de anomalias</p>
                    <p>→ ANITA GARIBALDI: Análise de dados</p> 
                    <p>→ TIRADENTES: Geração de relatórios</p>
                    <p>→ SISTEMA MULTI-AGENTE COORDENADO</p>
                  </div>
                </div>
              </ContainerCard>

              <ContainerCard>
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-blue-600 mb-3">
                    STACK • TECNOLOGIAS IMPLANTADAS
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 uppercase">
                    INFRAESTRUTURA
                  </h3>
                  <div className="space-y-2 text-sm font-mono text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500"></div>
                      <span>PYTHON + FASTAPI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500"></div>
                      <span>LANGCHAIN + GROQ</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500"></div>
                      <span>POSTGRESQL + REDIS</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500"></div>
                      <span>DOCKER + KUBERNETES</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500"></div>
                      <span>PROMETHEUS + GRAFANA</span>
                    </div>
                  </div>
                </div>
              </ContainerCard>
            </div>
          </div>
        </ContainerSection>

        {/* Status Final */}
        <ContainerSection variant="accent" size="medium">
          <div className="py-8 text-center">
            <div className="text-xs font-mono uppercase tracking-wider text-green-600 mb-4">
              STATUS DO SISTEMA: OPERACIONAL
            </div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-2xl font-black text-gray-900 dark:text-white font-mono uppercase">
                SISTEMA ATIVO • PRODUÇÃO
              </span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-sm font-mono text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              PLATAFORMA FUNCIONANDO. ACESSE OS LINKS ACIMA PARA TESTAR.
            </p>
          </div>
        </ContainerSection>
      </main>
      
      <Footer />
    </div>
  );
}