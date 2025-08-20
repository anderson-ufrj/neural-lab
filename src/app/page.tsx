import type { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/language-context';
import { Navbar } from '@/components/shared/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesOverview } from '@/components/sections/services-overview';
import { CaseStudies } from '@/components/sections/case-studies';
import { AboutStory } from '@/components/sections/about-story';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/shared/footer';
import { SmoothScroll } from '@/components/ui/smooth-scroll';

export const metadata: Metadata = {
  title: 'Neural LAB - AI Development Studio from Brazil',
  description: 'We help founders and business leaders launch new products or transform their workflows with AI. From Brazil to the world.',
};

export default function HomePage() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <HeroSection />
            <ServicesOverview />
            <CaseStudies />
            <AboutStory />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}