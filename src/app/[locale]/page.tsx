import { MainLayout } from "@/components/layout/main-layout"
import { HeroV2 } from "@/components/sections/hero-v2"
import { ExperimentsV2 } from "@/components/sections/experiments-v2"

export default function Home() {
  return (
    <MainLayout>
      <HeroV2 />
      <ExperimentsV2 />
    </MainLayout>
  );
}
