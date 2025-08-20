import type { Metadata } from 'next';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ServicesGrid } from '@/components/shared/services-grid';

export const metadata: Metadata = {
  title: 'Serviços - Neural LAB',
  description: 'Conheça nossos serviços especializados em inteligência artificial e machine learning.',
};

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Nossos Serviços
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Soluções completas em inteligência artificial
              </p>
            </div>
            
            <div className="mt-16">
              <ServicesGrid />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}