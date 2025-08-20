import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';

export const metadata: Metadata = {
  title: 'Blog - Neural LAB',
  description: 'Insights e conhecimento sobre inteligência artificial e tecnologia.',
  alternates: {
    canonical: '/blog',
    languages: {
      'pt-BR': '/pt/blog',
      'en-US': '/en/blog',
    },
  },
};

function BlogContent() {
  const t = useTranslations('blog');

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
        
        <div className="mt-16 text-center">
          <div className="rounded-lg border border-border bg-surface p-8">
            <p className="text-muted-foreground">
              {t('empty')}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <BlogContent />
      </main>
      <Footer />
    </>
  );
}