import type { Metadata } from 'next';
import { Navbar } from '@/components/shared/navbar';
import { Hero } from '@/components/shared/hero';
import { Footer } from '@/components/shared/footer';

export const metadata: Metadata = {
  title: 'Neural LAB - Construímos sistemas de IA que se explicam',
  description: 'Entre o cálculo e o sonho, habita a inteligência. Especialistas em desenvolvimento de sistemas de IA explicável.',
};

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