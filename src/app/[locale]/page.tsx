import type { Metadata } from 'next';
import { Navbar } from '@/components/shared/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { TechnologiesStack } from '@/components/sections/technologies-stack';
import { ServicesOverview } from '@/components/sections/services-overview';
import { TeamSection } from '@/components/sections/team-section';
import { Footer } from '@/components/shared/footer';
import { ContainerSection } from '@/components/layout/container-section';

export const metadata: Metadata = {
  title: 'Neural LAB - AI Development Studio from Brazil',
  description: 'We help founders and business leaders launch new products or transform their workflows with AI. From Brazil to the world.',
};

export default function HomePage() {
  return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative transition-colors duration-300">
        <Navbar />
        
        {/* Container Ship Layout - Each section fits perfectly like shipping containers */}
        <main className="space-y-0">
          {/* Hero Container - Command Bridge */}
          <ContainerSection variant="primary" size="large">
            <HeroSection />
          </ContainerSection>
          
          {/* Technologies Container - Engine Room */}
          <ContainerSection variant="secondary" size="full">
            <TechnologiesStack />
          </ContainerSection>
          
          {/* Services Container - Service Bay */}
          <ContainerSection variant="neutral" size="large">
            <ServicesOverview />
          </ContainerSection>
          
          {/* Team Container - Crew Quarters */}
          <ContainerSection variant="accent" size="medium">
            <TeamSection />
          </ContainerSection>
        </main>
        
        {/* Footer - Ship's Foundation */}
        <Footer />
      </div>
  );
}