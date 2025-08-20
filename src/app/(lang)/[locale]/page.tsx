import type { Metadata } from 'next';
import { Hero } from '@/components/shared/hero';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { siteConfig } from '../../../../site.config';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const description = locale === 'pt' ? siteConfig.description.pt : siteConfig.description.en;
  
  return {
    title: siteConfig.name,
    description,
    openGraph: {
      title: siteConfig.name,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description,
    },
    alternates: {
      canonical: '/',
      languages: {
        'pt-BR': '/pt',
        'en-US': '/en',
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}