import type { Metadata } from 'next';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { CaseCard } from '@/components/shared/case-card';
import { getCases } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Portfólio - Neural LAB',
  description: 'Conheça nossos projetos e cases de sucesso em inteligência artificial.',
};

export default function PortfolioPage() {
  const cases = getCases('pt').sort((a, b) => a.order - b.order);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Portfólio
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Projetos que demonstram nossa expertise
              </p>
            </div>
            
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {cases.map((case_) => (
                <CaseCard
                  key={case_.id}
                  title={case_.title}
                  description={case_.description}
                  link={case_.link}
                  tech={case_.tech}
                  content={case_.content}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}