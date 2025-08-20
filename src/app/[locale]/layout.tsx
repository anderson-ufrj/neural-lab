import type { Metadata } from "next";
import { Inter, Sora } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { locales } from '@/lib/i18n';
// import { notFound } from 'next/navigation';
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: 'swap',
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ 
  params 
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return {
    title: "Neural Lab - Engenharia de IA",
    description: t('hero.headline'),
    keywords: "IA, Machine Learning, Engenharia de Dados, Consultoria, AI, MLOps",
    authors: [{ name: "Neural Lab" }],
    creator: "Neural Lab",
    publisher: "Neural Lab",
    robots: "index,follow",
    openGraph: {
      type: 'website',
      locale: locale,
      url: `https://neural-lab.vercel.app/${locale}`,
      title: 'Neural Lab - Engenharia de IA',
      description: t('hero.headline'),
      siteName: 'Neural Lab',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Neural Lab - Engenharia de IA',
      description: t('hero.headline'),
    },
    alternates: {
      languages: {
        'pt-BR': '/pt-BR',
        'en-US': '/en-US',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}