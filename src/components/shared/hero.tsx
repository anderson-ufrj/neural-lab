import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background inspired by concrete and Brazilian mountains */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-stone-800 to-zinc-900" />
      
      {/* Concrete texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-amber-600/5 to-transparent" />
      
      {/* Curved elements inspired by Niemeyer */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-bl from-amber-500/10 to-orange-600/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-amber-600/8 to-yellow-500/5 blur-3xl" />
      
      {/* Concrete grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(120,113,108,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(120,113,108,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800/50 border border-amber-600/30 backdrop-blur-sm" style={{
              borderRadius: '2rem 0.5rem 2rem 0.5rem'
            }}>
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-100 tracking-wide">ENGENHARIA DE IA • BRASIL</span>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            <span className="block">Construímos o futuro</span>
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              com Inteligência Artificial
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-center text-xl sm:text-2xl text-stone-300 mb-12 max-w-3xl mx-auto font-light">
            Construímos soluções sólidas em IA. Das montanhas de Minas ao mundo, 
            criamos sistemas que transformam negócios com a confiabilidade do concreto armado.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-0 shadow-2xl shadow-amber-900/40 font-semibold"
              style={{ borderRadius: '0.5rem 1.5rem 0.5rem 1.5rem' }}
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
              className="border-stone-600 text-stone-300 hover:bg-stone-800 hover:text-amber-100"
              style={{ borderRadius: '1.5rem 0.5rem 1.5rem 0.5rem' }}
            >
              <Link href="/portfolio">
                Ver Cases de Sucesso
              </Link>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-stone-700">
            <p className="text-center text-sm text-stone-400 mb-6 font-light">Soluções construídas com solidez brasileira</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-stone-400 font-medium tracking-wider">MINERAÇÃO.AI</div>
              <div className="text-stone-400 font-medium tracking-wider">CONSTRUTEC</div>
              <div className="text-stone-400 font-medium tracking-wider">AGROTECH.BR</div>
              <div className="text-stone-400 font-medium tracking-wider">INFRALAB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}