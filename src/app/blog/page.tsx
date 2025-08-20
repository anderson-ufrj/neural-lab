import type { Metadata } from 'next';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

export const metadata: Metadata = {
  title: 'Blog - Neural LAB',
  description: 'Insights e conhecimento sobre inteligência artificial e tecnologia.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Blog
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Insights e conhecimento em IA
              </p>
            </div>
            
            <div className="mt-16 text-center">
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <p className="text-gray-600">
                  Em breve, artigos sobre inteligência artificial e tecnologia.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}