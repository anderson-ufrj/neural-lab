export interface Service {
  id: string;
  title: string;
  description: string;
  content: string;
  order: number;
}

export interface Case {
  id: string;
  title: string;
  description: string;
  content: string;
  link?: string;
  tech?: string[];
  order: number;
}

export const servicesData: Record<string, Service[]> = {
  pt: [
    {
      id: 'ai-architecture',
      title: 'Arquitetura & Desenvolvimento de Sistemas de IA',
      description: 'Desenvolvimento completo de sistemas de inteligência artificial escaláveis e robustos',
      content: `
        <h1>Arquitetura & Desenvolvimento de Sistemas de IA</h1>
        <p>Criamos sistemas de inteligência artificial completos, desde a concepção até a implementação, garantindo escalabilidade, robustez e manutenibilidade.</p>
        <h2>O que oferecemos</h2>
        <ul>
          <li><strong>Arquitetura de sistemas</strong>: Desenho de arquiteturas escaláveis para IA</li>
          <li><strong>Desenvolvimento de modelos</strong>: Criação de modelos customizados</li>
          <li><strong>Integração de APIs</strong>: Conectividade com serviços externos</li>
          <li><strong>Otimização de performance</strong>: Ajuste fino para máxima eficiência</li>
        </ul>
        <h2>Tecnologias</h2>
        <p>Python, TensorFlow, PyTorch, FastAPI, Docker, Kubernetes</p>
      `,
      order: 1
    },
    {
      id: 'mlops',
      title: 'MLOps & Infraestrutura',
      description: 'Implementação de pipelines de machine learning robustos e infraestrutura para IA em produção',
      content: `
        <h1>MLOps & Infraestrutura</h1>
        <p>Implementamos pipelines completos de MLOps e infraestrutura para colocar seus modelos de IA em produção com segurança e eficiência.</p>
        <h2>O que oferecemos</h2>
        <ul>
          <li><strong>Pipelines de CI/CD</strong>: Automação de deploy de modelos</li>
          <li><strong>Monitoramento</strong>: Observabilidade completa dos modelos</li>
          <li><strong>Versionamento</strong>: Controle de versões de dados e modelos</li>
          <li><strong>Infraestrutura cloud</strong>: Setup em AWS, GCP ou Azure</li>
        </ul>
        <h2>Tecnologias</h2>
        <p>MLflow, Kubeflow, GitHub Actions, Terraform, Prometheus, Grafana</p>
      `,
      order: 2
    },
    {
      id: 'llm-engineering',
      title: 'LLM Engineering',
      description: 'Desenvolvimento de soluções com Large Language Models: RAG, agentes e sistemas de avaliação',
      content: `
        <h1>LLM Engineering (RAG, agentes, evals/guardrails)</h1>
        <p>Especializados em soluções avançadas com Large Language Models, incluindo sistemas RAG, agentes inteligentes e frameworks de avaliação.</p>
        <h2>O que oferecemos</h2>
        <ul>
          <li><strong>RAG (Retrieval-Augmented Generation)</strong>: Sistemas de busca e geração</li>
          <li><strong>Agentes inteligentes</strong>: Desenvolvimento de agentes autônomos</li>
          <li><strong>Evals & Guardrails</strong>: Frameworks de avaliação e segurança</li>
          <li><strong>Fine-tuning</strong>: Ajuste de modelos para domínios específicos</li>
        </ul>
        <h2>Tecnologias</h2>
        <p>OpenAI, Anthropic, LangChain, LlamaIndex, Chroma, Pinecone</p>
      `,
      order: 3
    },
    {
      id: 'consulting',
      title: 'Consultoria Estratégica em IA',
      description: 'Orientação estratégica para implementação de inteligência artificial em empresas',
      content: `
        <h1>Consultoria Estratégica em IA</h1>
        <p>Oferecemos orientação estratégica para empresas que desejam implementar soluções de inteligência artificial de forma eficaz e responsável.</p>
        <h2>O que oferecemos</h2>
        <ul>
          <li><strong>Avaliação de maturidade</strong>: Análise do estado atual da empresa</li>
          <li><strong>Roadmap estratégico</strong>: Planejamento de implementação de IA</li>
          <li><strong>Análise de ROI</strong>: Cálculo de retorno sobre investimento</li>
          <li><strong>Treinamento de equipes</strong>: Capacitação em IA e ML</li>
        </ul>
        <h2>Benefícios</h2>
        <p>Redução de riscos, otimização de investimentos, capacitação interna, vantagem competitiva</p>
      `,
      order: 4
    }
  ],
  en: [
    {
      id: 'ai-architecture',
      title: 'AI Systems Architecture & Development',
      description: 'Complete development of scalable and robust artificial intelligence systems',
      content: `
        <h1>AI Systems Architecture & Development</h1>
        <p>We create complete artificial intelligence systems, from conception to implementation, ensuring scalability, robustness and maintainability.</p>
        <h2>What we offer</h2>
        <ul>
          <li><strong>Systems architecture</strong>: Design of scalable AI architectures</li>
          <li><strong>Model development</strong>: Creation of custom models</li>
          <li><strong>API integration</strong>: Connectivity with external services</li>
          <li><strong>Performance optimization</strong>: Fine-tuning for maximum efficiency</li>
        </ul>
        <h2>Technologies</h2>
        <p>Python, TensorFlow, PyTorch, FastAPI, Docker, Kubernetes</p>
      `,
      order: 1
    },
    {
      id: 'mlops',
      title: 'MLOps & Infrastructure',
      description: 'Implementation of robust machine learning pipelines and infrastructure for AI in production',
      content: `
        <h1>MLOps & Infrastructure</h1>
        <p>We implement complete MLOps pipelines and infrastructure to put your AI models into production safely and efficiently.</p>
        <h2>What we offer</h2>
        <ul>
          <li><strong>CI/CD pipelines</strong>: Model deployment automation</li>
          <li><strong>Monitoring</strong>: Complete model observability</li>
          <li><strong>Versioning</strong>: Data and model version control</li>
          <li><strong>Cloud infrastructure</strong>: Setup on AWS, GCP or Azure</li>
        </ul>
        <h2>Technologies</h2>
        <p>MLflow, Kubeflow, GitHub Actions, Terraform, Prometheus, Grafana</p>
      `,
      order: 2
    },
    {
      id: 'llm-engineering',
      title: 'LLM Engineering',
      description: 'Development of Large Language Model solutions: RAG, agents and evaluation systems',
      content: `
        <h1>LLM Engineering (RAG, agents, evals/guardrails)</h1>
        <p>Specialized in advanced solutions with Large Language Models, including RAG systems, intelligent agents and evaluation frameworks.</p>
        <h2>What we offer</h2>
        <ul>
          <li><strong>RAG (Retrieval-Augmented Generation)</strong>: Search and generation systems</li>
          <li><strong>Intelligent agents</strong>: Development of autonomous agents</li>
          <li><strong>Evals & Guardrails</strong>: Evaluation and safety frameworks</li>
          <li><strong>Fine-tuning</strong>: Model adjustment for specific domains</li>
        </ul>
        <h2>Technologies</h2>
        <p>OpenAI, Anthropic, LangChain, LlamaIndex, Chroma, Pinecone</p>
      `,
      order: 3
    },
    {
      id: 'consulting',
      title: 'Strategic AI Consulting',
      description: 'Strategic guidance for implementing artificial intelligence in companies',
      content: `
        <h1>Strategic AI Consulting</h1>
        <p>We offer strategic guidance for companies that want to implement artificial intelligence solutions effectively and responsibly.</p>
        <h2>What we offer</h2>
        <ul>
          <li><strong>Maturity assessment</strong>: Analysis of the company's current state</li>
          <li><strong>Strategic roadmap</strong>: AI implementation planning</li>
          <li><strong>ROI analysis</strong>: Return on investment calculation</li>
          <li><strong>Team training</strong>: AI and ML capability building</li>
        </ul>
        <h2>Benefits</h2>
        <p>Risk reduction, investment optimization, internal capability building, competitive advantage</p>
      `,
      order: 4
    }
  ]
};

export const casesData: Record<string, Case[]> = {
  pt: [
    {
      id: 'cidadao-ai',
      title: 'Cidadão.AI',
      description: 'Plataforma multi-agente para transparência governamental brasileira',
      link: 'https://neural-thinker-cidadao-ai-backend.hf.space/docs',
      tech: ['FastAPI', 'LangChain', 'Groq', 'HuggingFace', 'Docker'],
      content: `
        <h1>Cidadão.AI</h1>
        <p>Uma plataforma revolucionária de transparência governamental que utiliza agentes de IA para analisar dados públicos brasileiros.</p>
        <h2>Visão Geral</h2>
        <p>O Cidadão.AI é um sistema multi-agente que democratiza o acesso à informação pública, transformando dados complexos em insights acessíveis para todos os cidadãos.</p>
        <h2>Características Principais</h2>
        <ul>
          <li><strong>Agentes especializados</strong>: Zumbi dos Palmares (detecção de anomalias), Anita Garibaldi (análise), Tiradentes (relatórios)</li>
          <li><strong>API robusta</strong>: FastAPI com documentação temática brasileira</li>
          <li><strong>Observabilidade</strong>: Stack Grafana + Prometheus para monitoramento</li>
          <li><strong>Segurança</strong>: JWT e sistemas de autenticação enterprise</li>
        </ul>
        <h2>Impacto</h2>
        <p>Primeira plataforma brasileira de transparência com IA, democratizando o acesso à informação pública e promovendo maior engajamento cívico.</p>
      `,
      order: 1
    },
    {
      id: 'ale-assistant',
      title: 'Alê Assistant',
      description: 'Assistente inteligente para produtividade pessoal e profissional',
      link: '#',
      tech: ['Next.js', 'OpenAI', 'Vercel', 'TypeScript', 'Tailwind'],
      content: `
        <h1>Alê Assistant</h1>
        <p>Um assistente inteligente projetado para maximizar a produtividade pessoal e profissional através de IA conversacional avançada.</p>
        <h2>Visão Geral</h2>
        <p>O Alê Assistant combina a potência dos Large Language Models com uma interface intuitiva para oferecer suporte personalizado em diversas tarefas do dia a dia.</p>
        <h2>Características Principais</h2>
        <ul>
          <li><strong>Interface conversacional</strong>: Chat intuitivo e responsivo</li>
          <li><strong>Múltiplas capacidades</strong>: Planejamento, análise, escrita e automação</li>
          <li><strong>Personalização</strong>: Adapta-se ao estilo e necessidades do usuário</li>
          <li><strong>Integração</strong>: Conecta-se com ferramentas de produtividade</li>
        </ul>
        <h2>Impacto</h2>
        <p>Aumento significativo na produtividade dos usuários, com automação inteligente de tarefas repetitivas e suporte na tomada de decisões.</p>
      `,
      order: 2
    }
  ],
  en: [
    {
      id: 'cidadao-ai',
      title: 'Cidadão.AI',
      description: 'Multi-agent platform for Brazilian government transparency',
      link: 'https://neural-thinker-cidadao-ai-backend.hf.space/docs',
      tech: ['FastAPI', 'LangChain', 'Groq', 'HuggingFace', 'Docker'],
      content: `
        <h1>Cidadão.AI</h1>
        <p>A revolutionary government transparency platform that uses AI agents to analyze Brazilian public data.</p>
        <h2>Overview</h2>
        <p>Cidadão.AI is a multi-agent system that democratizes access to public information, transforming complex data into accessible insights for all citizens.</p>
        <h2>Key Features</h2>
        <ul>
          <li><strong>Specialized agents</strong>: Zumbi dos Palmares (anomaly detection), Anita Garibaldi (analysis), Tiradentes (reporting)</li>
          <li><strong>Robust API</strong>: FastAPI with Brazilian-themed documentation</li>
          <li><strong>Observability</strong>: Grafana + Prometheus stack for monitoring</li>
          <li><strong>Security</strong>: JWT and enterprise authentication systems</li>
        </ul>
        <h2>Impact</h2>
        <p>First Brazilian transparency platform with AI, democratizing access to public information and promoting greater civic engagement.</p>
      `,
      order: 1
    },
    {
      id: 'ale-assistant',
      title: 'Alê Assistant',
      description: 'Intelligent assistant for personal and professional productivity',
      link: '#',
      tech: ['Next.js', 'OpenAI', 'Vercel', 'TypeScript', 'Tailwind'],
      content: `
        <h1>Alê Assistant</h1>
        <p>An intelligent assistant designed to maximize personal and professional productivity through advanced conversational AI.</p>
        <h2>Overview</h2>
        <p>Alê Assistant combines the power of Large Language Models with an intuitive interface to offer personalized support for various daily tasks.</p>
        <h2>Key Features</h2>
        <ul>
          <li><strong>Conversational interface</strong>: Intuitive and responsive chat</li>
          <li><strong>Multiple capabilities</strong>: Planning, analysis, writing and automation</li>
          <li><strong>Personalization</strong>: Adapts to user style and needs</li>
          <li><strong>Integration</strong>: Connects with productivity tools</li>
        </ul>
        <h2>Impact</h2>
        <p>Significant increase in user productivity, with intelligent automation of repetitive tasks and support in decision making.</p>
      `,
      order: 2
    }
  ]
};

export function getServices(locale: string): Service[] {
  return servicesData[locale] || servicesData.pt;
}

export function getCases(locale: string): Case[] {
  return casesData[locale] || casesData.pt;
}