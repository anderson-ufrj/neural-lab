import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getServices } from '@/lib/content';
import { Layers, Settings, Cpu, Mountain } from 'lucide-react';

const serviceIcons = {
  'ai-architecture': Layers,
  'mlops': Settings,
  'llm-engineering': Cpu,
  'consulting': Mountain
};

export function ServicesGrid() {
  const services = getServices('pt').sort((a, b) => a.order - b.order);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
      {services.map((service) => {
        const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Layers;
        return (
          <Card key={service.id} className="h-full bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-gradient-to-br from-green-700/25 to-emerald-700/15 border border-green-600/35" style={{ borderRadius: '0.25rem 0.75rem 0.25rem 0.75rem' }}>
                  <Icon className="w-5 h-5 text-green-500" />
                </div>
              </div>
              <CardTitle className="text-xl text-white group-hover:text-green-200 transition-colors font-semibold">
                {service.title}
              </CardTitle>
              <CardDescription className="text-gray-400 font-light">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-sm text-gray-300 leading-relaxed">
                {service.id === 'ai-architecture' && (
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Arquitetura de sistemas escaláveis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Desenvolvimento de modelos customizados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Integração com APIs e serviços</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Otimização de performance</span>
                    </li>
                  </ul>
                )}
                {service.id === 'mlops' && (
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Pipelines CI/CD automatizados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Monitoramento e observabilidade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Versionamento de dados e modelos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Infraestrutura em cloud</span>
                    </li>
                  </ul>
                )}
                {service.id === 'llm-engineering' && (
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Sistemas RAG avançados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Agentes inteligentes autônomos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Frameworks de avaliação</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Fine-tuning especializado</span>
                    </li>
                  </ul>
                )}
                {service.id === 'consulting' && (
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Avaliação de maturidade em IA</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Roadmap estratégico</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
                      <span>Análise de ROI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500" style={{ borderRadius: '0.125rem 0.375rem 0.125rem 0.375rem' }} />
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