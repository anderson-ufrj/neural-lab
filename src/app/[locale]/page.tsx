import { MainLayout } from "@/components/layout/main-layout"
import { Hero } from "@/components/sections/hero"
import { Experiments } from "@/components/sections/experiments"

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Experiments />
    </MainLayout>
  );
}
