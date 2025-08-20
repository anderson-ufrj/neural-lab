import type { Metadata } from 'next';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

export const metadata: Metadata = {
  title: 'Sobre - Neural LAB',
  description: 'Conheça a Neural LAB e nossa missão de democratizar a inteligência artificial.',
};

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Sobre a Neural LAB
              </h1>
              
              <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
                <p>
                  Nossa missão é democratizar a inteligência artificial através de sistemas transparentes e explicáveis.
                </p>
                <p>
                  Fundada com o propósito de criar soluções de IA que não apenas funcionem, mas que possam ser compreendidas e confiáveis.
                </p>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Nossos Princípios
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600" />
                      Transparência em algoritmos
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600" />
                      Ética na implementação
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600" />
                      Inovação responsável
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}