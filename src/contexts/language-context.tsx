'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contato',
    'nav.cta': 'Fale Conosco',
    
    // Hero
    'hero.title': 'Estúdio de desenvolvimento com expertise em IA',
    'hero.subtitle': 'Ajudamos fundadores e líderes empresariais a lançar novos produtos ou transformar seus fluxos de trabalho com Inteligência Artificial.',
    'hero.cta.primary': 'Começar Projeto',
    'hero.cta.secondary': 'Conversar',
    
    // Services
    'services.title': 'Como podemos ajudar',
    'services.subtitle': 'Oferecemos duas categorias principais de serviços para transformar sua visão em realidade.',
    'services.ai.title': 'Soluções de IA',
    'services.ai.description': 'Desenvolvemos sistemas de inteligência artificial personalizados que crescem organicamente com seus dados e necessidades específicas.',
    'services.ai.feature1': 'Desenvolvimento de modelos de ML personalizados',
    'services.ai.feature2': 'Sistemas RAG e processamento de linguagem natural',
    'services.ai.feature3': 'Automação inteligente de processos',
    'services.ai.feature4': 'Integração com APIs e sistemas existentes',
    'services.product.title': 'Desenvolvimento de Produto',
    'services.product.description': 'Construímos produtos digitais completos do zero, combinando design excepcional com engenharia sólida e inteligência artificial.',
    'services.product.feature1': 'MVP e prototipagem rápida',
    'services.product.feature2': 'Desenvolvimento full-stack escalável',
    'services.product.feature3': 'Design de experiência do usuário',
    'services.product.feature4': 'Infraestrutura cloud e DevOps',
    
    // Cases
    'cases.title': 'Nosso Trabalho',
    'cases.subtitle': 'Cases de sucesso que demonstram nosso impacto no mundo real.',
    'cases.results': 'Resultados',
    'cases.cidadao.title': 'Plataforma de Transparência Governamental',
    'cases.cidadao.description': 'Desenvolvemos o primeiro sistema multi-agente de IA para transparência pública no Brasil, democratizando o acesso à informação governamental através de agentes especializados.',
    'cases.cidadao.metric1.label': 'Agentes IA especializados',
    'cases.cidadao.metric1.value': '3',
    'cases.cidadao.metric2.label': 'Redução no tempo de análise',
    'cases.cidadao.metric2.value': '85%',
    'cases.cidadao.metric3.label': 'Tempo de desenvolvimento',
    'cases.cidadao.metric3.value': '4 meses',
    'cases.cidadao.testimonial.text': 'A Neural LAB transformou nossa visão de transparência governamental em uma plataforma real e funcional. A expertise em IA foi fundamental.',
    'cases.cidadao.testimonial.author': 'Equipe Cidadão.AI',
    'cases.cidadao.testimonial.role': 'Projeto de Transparência',
    'cases.ale.title': 'Assistente de Produtividade Pessoal',
    'cases.ale.description': 'Criamos um assistente inteligente que maximiza a produtividade através de IA conversacional, integrando-se naturalmente aos fluxos de trabalho existentes.',
    'cases.ale.metric1.label': 'Aumento na produtividade',
    'cases.ale.metric1.value': '60%',
    'cases.ale.metric2.label': 'Tempo de resposta médio',
    'cases.ale.metric2.value': '<2s',
    'cases.ale.metric3.label': 'Satisfação do usuário',
    'cases.ale.metric3.value': '95%',
    'cases.ale.testimonial.text': 'O Alê Assistant revolucionou minha rotina de trabalho. É como ter um assistente pessoal que entende exatamente o que preciso.',
    'cases.ale.testimonial.author': 'Alexandre Silva',
    'cases.ale.testimonial.role': 'Empreendedor',
    
    // About
    'about.title': 'Nossa História',
    'about.paragraph1': 'A Neural LAB nasceu da frustração com agências tradicionais que tratam projetos de IA como commodities. Vimos muitos projetos falharem não por falta de tecnologia, mas por falta de verdadeiro entendimento das necessidades do cliente.',
    'about.paragraph2': 'Baseados em Belo Horizonte, no coração das montanhas de Minas Gerais, combinamos a solidez da engenharia brasileira com a inovação da inteligência artificial moderna. Nossa abordagem é diferente: não somos apenas fornecedores, somos parceiros.',
    'about.paragraph3': 'Cada projeto é uma oportunidade de criar algo verdadeiramente único. Trabalhamos lado a lado com nossos clientes, entendendo profundamente seus desafios e objetivos antes de escrever a primeira linha de código.',
    'about.approach.title': 'Nossa Abordagem',
    'about.approach.ownership.title': 'Senso de Propriedade',
    'about.approach.ownership.description': 'Tratamos cada projeto como se fosse nosso. Seu sucesso é nosso sucesso.',
    'about.approach.partnership.title': 'Parceria Verdadeira',
    'about.approach.partnership.description': 'Trabalhamos como uma extensão da sua equipe, não apenas como fornecedores.',
    'about.approach.quality.title': 'Qualidade Sem Compromisso',
    'about.approach.quality.description': 'Código limpo, arquitetura sólida e soluções que escalam com seu negócio.',
    'about.approach.innovation.title': 'Inovação Responsável',
    'about.approach.innovation.description': 'Usamos as tecnologias mais avançadas, mas sempre com propósito e responsabilidade.',
    'about.paragraph4': 'Se você está procurando uma parceria verdadeira para transformar sua visão em realidade, vamos conversar. Estamos aqui para construir o futuro, um projeto de cada vez.',
    
    // Contact
    'contact.title': 'Vamos Conversar',
    'contact.subtitle': 'Pronto para transformar sua visão em realidade?',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.company': 'Empresa',
    'contact.form.message': 'Conte-nos sobre seu projeto',
    'contact.form.submit': 'Enviar Mensagem',
    
    // Footer
    'footer.description': 'Inteligência Artificial que cresce organicamente com seus dados e necessidades.',
    'footer.nav': 'Navegação',
    'footer.solutions': 'Soluções',
    'footer.solution1': 'Engenharia de IA',
    'footer.solution2': 'Sistemas MLOps',
    'footer.solution3': 'Inteligência Orgânica',
    'footer.solution4': 'Consultoria Estratégica',
    'footer.contact': 'Contato',
    'footer.location': 'Belo Horizonte, Minas Gerais',
    'footer.copyright': '© 2025 Neural LAB. Inteligência que cresce organicamente.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.cta': 'Get in Touch',
    
    // Hero
    'hero.title': 'Development studio with AI expertise',
    'hero.subtitle': 'We help founders and business leaders launch new products or transform their workflows with Artificial Intelligence.',
    'hero.cta.primary': 'Start Project',
    'hero.cta.secondary': 'Let\'s Talk',
    
    // Services
    'services.title': 'How we can help',
    'services.subtitle': 'We offer two main service categories to transform your vision into reality.',
    'services.ai.title': 'AI Solutions',
    'services.ai.description': 'We develop custom artificial intelligence systems that grow organically with your data and specific needs.',
    'services.ai.feature1': 'Custom ML model development',
    'services.ai.feature2': 'RAG systems and natural language processing',
    'services.ai.feature3': 'Intelligent process automation',
    'services.ai.feature4': 'Integration with APIs and existing systems',
    'services.product.title': 'Product Development',
    'services.product.description': 'We build complete digital products from scratch, combining exceptional design with solid engineering and artificial intelligence.',
    'services.product.feature1': 'MVP and rapid prototyping',
    'services.product.feature2': 'Scalable full-stack development',
    'services.product.feature3': 'User experience design',
    'services.product.feature4': 'Cloud infrastructure and DevOps',
    
    // Cases
    'cases.title': 'Our Work',
    'cases.subtitle': 'Success cases that demonstrate our real-world impact.',
    'cases.results': 'Results',
    'cases.cidadao.title': 'Government Transparency Platform',
    'cases.cidadao.description': 'We developed Brazil\'s first multi-agent AI system for public transparency, democratizing access to government information through specialized agents.',
    'cases.cidadao.metric1.label': 'Specialized AI agents',
    'cases.cidadao.metric1.value': '3',
    'cases.cidadao.metric2.label': 'Analysis time reduction',
    'cases.cidadao.metric2.value': '85%',
    'cases.cidadao.metric3.label': 'Development time',
    'cases.cidadao.metric3.value': '4 months',
    'cases.cidadao.testimonial.text': 'Neural LAB transformed our vision of government transparency into a real, functional platform. The AI expertise was fundamental.',
    'cases.cidadao.testimonial.author': 'Cidadão.AI Team',
    'cases.cidadao.testimonial.role': 'Transparency Project',
    'cases.ale.title': 'Personal Productivity Assistant',
    'cases.ale.description': 'We created an intelligent assistant that maximizes productivity through conversational AI, integrating naturally with existing workflows.',
    'cases.ale.metric1.label': 'Productivity increase',
    'cases.ale.metric1.value': '60%',
    'cases.ale.metric2.label': 'Average response time',
    'cases.ale.metric2.value': '<2s',
    'cases.ale.metric3.label': 'User satisfaction',
    'cases.ale.metric3.value': '95%',
    'cases.ale.testimonial.text': 'Alê Assistant revolutionized my work routine. It\'s like having a personal assistant who understands exactly what I need.',
    'cases.ale.testimonial.author': 'Alexandre Silva',
    'cases.ale.testimonial.role': 'Entrepreneur',
    
    // About
    'about.title': 'Our Story',
    'about.paragraph1': 'Neural LAB was born from frustration with traditional agencies that treat AI projects like commodities. We\'ve seen too many projects fail not due to lack of technology, but lack of true understanding of client needs.',
    'about.paragraph2': 'Based in Belo Horizonte, in the heart of Minas Gerais mountains, we combine the solidity of Brazilian engineering with modern artificial intelligence innovation. Our approach is different: we\'re not just suppliers, we\'re partners.',
    'about.paragraph3': 'Each project is an opportunity to create something truly unique. We work side by side with our clients, deeply understanding their challenges and objectives before writing the first line of code.',
    'about.approach.title': 'Our Approach',
    'about.approach.ownership.title': 'Sense of Ownership',
    'about.approach.ownership.description': 'We treat each project as if it were our own. Your success is our success.',
    'about.approach.partnership.title': 'True Partnership',
    'about.approach.partnership.description': 'We work as an extension of your team, not just as suppliers.',
    'about.approach.quality.title': 'Uncompromised Quality',
    'about.approach.quality.description': 'Clean code, solid architecture, and solutions that scale with your business.',
    'about.approach.innovation.title': 'Responsible Innovation',
    'about.approach.innovation.description': 'We use the most advanced technologies, but always with purpose and responsibility.',
    'about.paragraph4': 'If you\'re looking for a true partnership to transform your vision into reality, let\'s talk. We\'re here to build the future, one project at a time.',
    
    // Contact
    'contact.title': 'Let\'s Talk',
    'contact.subtitle': 'Ready to transform your vision into reality?',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Tell us about your project',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.description': 'Artificial Intelligence that grows organically with your data and needs.',
    'footer.nav': 'Navigation',
    'footer.solutions': 'Solutions',
    'footer.solution1': 'AI Engineering',
    'footer.solution2': 'MLOps Systems',
    'footer.solution3': 'Organic Intelligence',
    'footer.solution4': 'Strategic Consulting',
    'footer.contact': 'Contact',
    'footer.location': 'Belo Horizonte, Minas Gerais',
    'footer.copyright': '© 2025 Neural LAB. Intelligence that grows organically.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}