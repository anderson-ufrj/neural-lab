import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Neural LAB',
    template: '%s | Neural LAB',
  },
  description: 'Construímos sistemas de IA que se explicam.',
  keywords: ['inteligência artificial', 'machine learning', 'IA', 'desenvolvimento', 'consultoria'],
  authors: [{ name: 'Neural LAB' }],
  creator: 'Neural LAB',
  publisher: 'Neural LAB',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}