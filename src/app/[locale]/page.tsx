import { Navbar } from '@/components/shared/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { TechnologiesStack } from '@/components/sections/technologies-stack';
import { ServicesOverview } from '@/components/sections/services-overview';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { TeamSection } from '@/components/sections/team-section';
import { Footer } from '@/components/shared/footer';
import { ContainerSection } from '@/components/layout/container-section';
import { AIChatButton } from '@/components/ui/ai-chat-button';

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
          
          {/* Portfolio Badge - Industrial Status */}
          <ContainerSection variant="accent" size="small">
            <div className="text-center py-4">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-500">
                BAÍA DE SERVIÇOS • SOLUÇÕES DE ENGENHARIA • OPERACIONAL
              </div>
            </div>
          </ContainerSection>
          
          {/* Portfolio Container - Project Gallery */}
          <ContainerSection variant="primary" size="large" id="portfolio">
            <FeaturedProjects />
          </ContainerSection>
          
          {/* Team Container - Crew Quarters */}
          <ContainerSection variant="accent" size="medium">
            <TeamSection />
          </ContainerSection>
        </main>
        
        {/* Footer - Ship's Foundation */}
        <Footer />
        
        {/* AI Chat Button */}
        <AIChatButton />
      </div>
  );
}