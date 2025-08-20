import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getServices } from '@/lib/content';
import { Brain, Cog, Zap, Target } from 'lucide-react';

const serviceIcons = {
  'ai-architecture': Brain,
  'mlops': Cog,
  'llm-engineering': Zap,
  'consulting': Target
};

export function ServicesGrid() {
  const services = getServices('pt').sort((a, b) => a.order - b.order);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
      {services.map((service) => {
        const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Brain;
        return (
          <Card key={service.id} className="h-full bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                {service.title}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-sm text-gray-300 leading-relaxed">
                {service.id === 'ai-architecture' && (
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Arquitetura de sistemas escaláveis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Desenvolvimento de modelos customizados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Integração com APIs e serviços</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Otimização de performance</span>
                    </li>
                  </ul>
                )}
                {service.id === 'mlops' && (
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Pipelines CI/CD automatizados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Monitoramento e observabilidade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Versionamento de dados e modelos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Infraestrutura em cloud</span>
                    </li>
                  </ul>
                )}
                {service.id === 'llm-engineering' && (
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Sistemas RAG avançados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Agentes inteligentes autônomos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Frameworks de avaliação</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Fine-tuning especializado</span>
                    </li>
                  </ul>
                )}
                {service.id === 'consulting' && (
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Avaliação de maturidade em IA</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Roadmap estratégico</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Análise de ROI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Capacitação de equipes</span>
                    </li>
                  </ul>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}