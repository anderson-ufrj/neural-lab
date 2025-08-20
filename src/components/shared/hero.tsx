import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient inspired by Brazilian sunset */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/10 to-transparent animate-pulse" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">AI Studio from Brazil 🇧🇷</span>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            <span className="block">Construímos o futuro</span>
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              com Inteligência Artificial
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-center text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transformamos ideias em soluções inteligentes. Do Brasil para o mundo, 
            criamos sistemas de IA que impulsionam negócios.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25"
            >
              <Link href="/contato" className="inline-flex items-center gap-2">
                Iniciar Projeto
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <Link href="/portfolio">
                Ver Cases de Sucesso
              </Link>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-center text-sm text-gray-400 mb-6">Confiado por empresas inovadoras</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              <div className="text-gray-400 font-semibold">StartupX</div>
              <div className="text-gray-400 font-semibold">TechCorp</div>
              <div className="text-gray-400 font-semibold">InnovaBR</div>
              <div className="text-gray-400 font-semibold">FutureLab</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}