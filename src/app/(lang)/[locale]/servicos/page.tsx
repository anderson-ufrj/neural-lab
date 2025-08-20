import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { ServicesGrid } from '@/components/shared/services-grid';

export const metadata: Metadata = {
  title: 'Serviços - Neural LAB',
  description: 'Conheça nossos serviços especializados em inteligência artificial e machine learning.',
  alternates: {
    canonical: '/servicos',
    languages: {
      'pt-BR': '/pt/servicos',
      'en-US': '/en/services',
    },
  },
};

function ServicesContent() {
  const t = useTranslations('services');

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
        
        <div className="mt-16">
          <ServicesGrid />
        </div>
      </Container>
    </Section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ServicesContent />
      </main>
      <Footer />
    </>
  );
}