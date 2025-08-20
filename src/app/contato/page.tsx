import type { Metadata } from 'next';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ContactForm } from '@/components/shared/contact-form';

export const metadata: Metadata = {
  title: 'Contato - Neural LAB',
  description: 'Entre em contato conosco para discutir seu projeto de inteligência artificial.',
};

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Contato
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Vamos conversar sobre seu projeto
              </p>
            </div>
            
            <div className="mt-16">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}