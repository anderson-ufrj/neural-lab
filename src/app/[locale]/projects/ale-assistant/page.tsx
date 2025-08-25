import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Sparkles, Zap, Brain, MessageSquare } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ContainerCard } from '@/components/ui/container-card';
import { ContainerSection } from '@/components/layout/container-section';

export default function AleAssistantPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const isPortuguese = params.locale === 'pt';
  
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

            <div className="border-l-4 border-purple-500 pl-6">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                {isPortuguese ? 'PROJETO • PRODUTIVIDADE • PRODUÇÃO' : 'PROJECT • PRODUCTIVITY • PRODUCTION'}
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                ⚡ ALÊ ASSISTANT
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-mono">
                {isPortuguese 
                  ? 'ASSISTENTE PESSOAL QUE FUNCIONA'
                  : 'PERSONAL ASSISTANT THAT WORKS'}
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <ContainerCard size="small" className="text-center">
                <Zap className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-gray-900 dark:text-white font-mono">60%</div>
                <div className="text-xs font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400">
                  {isPortuguese ? 'PRODUTIVIDADE' : 'PRODUCTIVITY'}
                </div>
              </ContainerCard>
              <ContainerCard size="small" className="text-center">
                <Brain className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-gray-900 dark:text-white font-mono">&lt;2s</div>
                <div className="text-xs font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400">
                  {isPortuguese ? 'RESPOSTA' : 'RESPONSE'}
                </div>
              </ContainerCard>
              <ContainerCard size="small" className="text-center">
                <Sparkles className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-gray-900 dark:text-white font-mono">95%</div>
                <div className="text-xs font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400">
                  {isPortuguese ? 'SATISFAÇÃO' : 'SATISFACTION'}
                </div>
              </ContainerCard>
              <ContainerCard size="small" className="text-center">
                <MessageSquare className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <div className="text-xl font-black text-gray-900 dark:text-white font-mono">GPT-4</div>
                <div className="text-xs font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400">
                  {isPortuguese ? 'MODELO IA' : 'AI MODEL'}
                </div>
              </ContainerCard>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={`https://ale-assistant.vercel.app/${params.locale}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-mono font-black text-sm uppercase tracking-wider transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {isPortuguese ? 'EXPERIMENTAR AGORA' : 'TRY NOW'}
              </a>
            </div>
          </div>
        </ContainerSection>

        {/* Content sections */}
        <ContainerSection variant="neutral" size="large">
          <div className="py-12">
            <div className="text-center mb-12">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-4">
                {isPortuguese 
                  ? 'ESPECIFICAÇÕES TÉCNICAS • SISTEMA OPERACIONAL'
                  : 'TECHNICAL SPECIFICATIONS • OPERATIONAL SYSTEM'}
              </div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                {isPortuguese ? 'ARQUITETURA DO SISTEMA' : 'SYSTEM ARCHITECTURE'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ContainerCard>
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-purple-600 mb-3">
                    {isPortuguese ? 'CONCEITO • FUNCIONAMENTO' : 'CONCEPT • OPERATION'}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 uppercase">
                    {isPortuguese ? 'ASSISTENTE INTELIGENTE' : 'INTELLIGENT ASSISTANT'}
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 font-mono leading-relaxed">
                    <p>{isPortuguese 
                      ? '→ CONVERSA NATURAL COM IA'
                      : '→ NATURAL CONVERSATION WITH AI'}</p>
                    <p>{isPortuguese 
                      ? '→ ORGANIZAÇÃO DE TAREFAS'
                      : '→ TASK ORGANIZATION'}</p> 
                    <p>{isPortuguese 
                      ? '→ INTEGRAÇÃO COM FERRAMENTAS'
                      : '→ TOOL INTEGRATION'}</p>
                    <p>{isPortuguese 
                      ? '→ MÉTRICAS DE PRODUTIVIDADE'
                      : '→ PRODUCTIVITY METRICS'}</p>
                  </div>
                </div>
              </ContainerCard>

              <ContainerCard>
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-blue-600 mb-3">
                    {isPortuguese ? 'STACK • TECNOLOGIAS IMPLANTADAS' : 'STACK • DEPLOYED TECHNOLOGIES'}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 uppercase">
                    {isPortuguese ? 'INFRAESTRUTURA' : 'INFRASTRUCTURE'}
                  </h3>
                  <div className="space-y-2 text-sm font-mono text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500"></div>
                      <span>NEXT.JS 14 + TYPESCRIPT</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500"></div>
                      <span>OPENAI GPT-4 API</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500"></div>
                      <span>VERCEL AI SDK</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500"></div>
                      <span>TAILWIND CSS + RADIX UI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500"></div>
                      <span>SUPABASE + POSTGRESQL</span>
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
            <div className="text-xs font-mono uppercase tracking-wider text-purple-600 mb-4">
              {isPortuguese 
                ? 'STATUS DO SISTEMA: OPERACIONAL'
                : 'SYSTEM STATUS: OPERATIONAL'}
            </div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-2xl font-black text-gray-900 dark:text-white font-mono uppercase">
                {isPortuguese 
                  ? 'SISTEMA ATIVO • PRODUÇÃO'
                  : 'SYSTEM ACTIVE • PRODUCTION'}
              </span>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-sm font-mono text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              {isPortuguese 
                ? 'APLICAÇÃO FUNCIONANDO. ACESSE O LINK ACIMA PARA TESTAR.'
                : 'APPLICATION RUNNING. ACCESS THE LINK ABOVE TO TEST.'}
            </p>
          </div>
        </ContainerSection>
      </main>
      
      <Footer />
    </div>
  );
}