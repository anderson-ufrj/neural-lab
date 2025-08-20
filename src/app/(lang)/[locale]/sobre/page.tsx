import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';

export const metadata: Metadata = {
  title: 'Sobre - Neural LAB',
  description: 'Conheça a Neural LAB e nossa missão de democratizar a inteligência artificial.',
  alternates: {
    canonical: '/sobre',
    languages: {
      'pt-BR': '/pt/sobre',
      'en-US': '/en/about',
    },
  },
};

function AboutContent() {
  const t = useTranslations('about');

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t('title')}
          </h1>
          
          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
            <p>{t('mission')}</p>
            <p>{t('founder')}</p>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Nossos Princípios
              </h2>
              <ul className="space-y-2">
                {(t.raw('principles') as string[]).map((principle, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}