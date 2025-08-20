import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { allCases } from 'contentlayer/generated';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { CaseCard } from '@/components/shared/case-card';

export const metadata: Metadata = {
  title: 'Portfólio - Neural LAB',
  description: 'Conheça nossos projetos e cases de sucesso em inteligência artificial.',
  alternates: {
    canonical: '/portfolio',
    languages: {
      'pt-BR': '/pt/portfolio',
      'en-US': '/en/portfolio',
    },
  },
};

function PortfolioContent() {
  const t = useTranslations('portfolio');
  const locale = useLocale();
  
  const cases = allCases
    .filter(case_ => case_.locale === locale)
    .sort((a, b) => a.order - b.order);

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {cases.map((case_) => (
            <CaseCard
              key={case_._id}
              title={case_.title}
              description={case_.description}
              link={case_.link}
              tech={case_.tech}
              content={case_.body.html}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PortfolioContent />
      </main>
      <Footer />
    </>
  );
}