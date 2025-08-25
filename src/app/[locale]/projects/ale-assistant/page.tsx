'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Sparkles, Zap, Brain, MessageSquare } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { useAnalytics } from '@/hooks/use-analytics';

export default function AleAssistantPage({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const isPortuguese = params.locale === 'pt';
  const { trackProjectView, trackClick } = useAnalytics();
  
  useEffect(() => {
    trackProjectView('ale-assistant', 'Alê Assistant');
  }, [trackProjectView]);
  
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
            <span>{isPortuguese ? 'Voltar aos projetos' : 'Back to projects'}</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              ⚡ Alê Assistant
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {isPortuguese 
                ? 'Assistente pessoal que funciona'
                : 'Personal assistant that works'}
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <Zap className="w-5 h-5 text-purple-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">60%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {isPortuguese ? 'Aumento produtividade' : 'Productivity increase'}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <Brain className="w-5 h-5 text-purple-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">&lt;2s</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {isPortuguese ? 'Tempo resposta' : 'Response time'}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <Sparkles className="w-5 h-5 text-purple-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {isPortuguese ? 'Satisfação' : 'Satisfaction'}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <MessageSquare className="w-5 h-5 text-purple-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">GPT-4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {isPortuguese ? 'Modelo IA' : 'AI Model'}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://ale-assistant.vercel.app/${params.locale}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                onClick={() => trackClick('project_action', 'ale_assistant_try_now')}
              >
                <ExternalLink className="w-4 h-4" />
                {isPortuguese ? 'Experimentar Agora' : 'Try Now'}
              </a>
            </div>
          </div>

          {/* Content sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {isPortuguese ? 'Sobre o Projeto' : 'About the Project'}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {isPortuguese 
                  ? 'Conversa natural, organiza tarefas, se conecta com suas ferramentas. Simples assim.'
                  : 'Natural conversation, organizes tasks, connects with your tools. Simple as that.'}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {isPortuguese
                  ? 'Pode testar no link acima.'
                  : 'You can test it in the link above.'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {isPortuguese ? 'Tecnologias Utilizadas' : 'Technologies Used'}
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Next.js 14 + TypeScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">OpenAI GPT-4 API</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Vercel AI SDK</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Tailwind CSS + Radix UI</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Supabase + PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {isPortuguese ? 'Funcionalidades Principais' : 'Main Features'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  💬 {isPortuguese ? 'Chat Inteligente' : 'Smart Chat'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {isPortuguese
                    ? 'Interface conversacional natural que entende contexto e oferece respostas precisas.'
                    : 'Natural conversational interface that understands context and provides accurate responses.'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  📝 {isPortuguese ? 'Gestão de Tarefas' : 'Task Management'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {isPortuguese
                    ? 'Organização inteligente de tarefas com priorização automática baseada em IA.'
                    : 'Smart task organization with automatic AI-based prioritization.'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  🔄 {isPortuguese ? 'Integrações' : 'Integrations'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {isPortuguese
                    ? 'Conecta-se com suas ferramentas favoritas: Google Calendar, Notion, Slack e mais.'
                    : 'Connects with your favorite tools: Google Calendar, Notion, Slack and more.'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  📊 {isPortuguese ? 'Analytics Pessoal' : 'Personal Analytics'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {isPortuguese
                    ? 'Insights sobre sua produtividade com relatórios visuais e recomendações personalizadas.'
                    : 'Productivity insights with visual reports and personalized recommendations.'}
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-800 p-8 rounded-lg text-white">
            <blockquote className="text-lg italic mb-4">
              {isPortuguese
                ? '"O Alê Assistant revolucionou minha rotina de trabalho. É como ter um assistente pessoal que entende exatamente o que preciso."'
                : '"Alê Assistant revolutionized my work routine. It\'s like having a personal assistant who understands exactly what I need."'}
            </blockquote>
            <p className="font-semibold">— Alexandre Silva, {isPortuguese ? 'Empreendedor' : 'Entrepreneur'}</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}