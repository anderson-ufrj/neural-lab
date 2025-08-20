import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { ContactForm } from '@/components/shared/contact-form';

export const metadata: Metadata = {
  title: 'Contato - Neural LAB',
  description: 'Entre em contato conosco para discutir seu projeto de inteligência artificial.',
  alternates: {
    canonical: '/contato',
    languages: {
      'pt-BR': '/pt/contato',
      'en-US': '/en/contact',
    },
  },
};

function ContactContent() {
  const t = useTranslations('contact');

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
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}