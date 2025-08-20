import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Construímos sistemas de IA que se explicam.
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600 italic sm:text-xl lg:text-2xl">
            Entre o cálculo e o sonho, habita a inteligência.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
            <Button asChild size="lg">
              <Link href="/servicos">
                Conheça nossos serviços
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">
                Ver portfólio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}