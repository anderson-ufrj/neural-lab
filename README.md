# Neural Lab - Website

Site institucional da Neural Lab, software house especializada em IA e engenharia de dados.

## 🚀 Stack

- **Framework**: Next.js 15 com App Router
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS v4
- **Internacionalização**: next-intl (pt-BR/en-US)
- **Temas**: next-themes (claro/escuro)
- **Animações**: Framer Motion
- **Chatbot**: Vercel AI SDK + OpenAI
- **Deploy**: Vercel

## 🎨 Design System

- **Paleta**: #111111, #2a2a2a, #cce1df, #ecf4f3
- **Tipografia**: Inter (texto) + Sora (display)
- **Mobile-first**: Responsivo e otimizado
- **Acessibilidade**: WCAG 2.1 AA

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/neural-lab.git
cd neural-lab

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas chaves de API

# Execute o servidor de desenvolvimento
npm run dev
```

### Variáveis de Ambiente

```env
OPENAI_API_KEY=sk-your-openai-api-key-here
```

### Comandos

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Verificar código
```

## 📁 Estrutura

```
src/
├── app/
│   ├── [locale]/         # Páginas por idioma
│   ├── api/chat/         # API do chatbot
│   └── globals.css       # Estilos globais
├── components/
│   ├── ui/               # Componentes base
│   ├── layout/           # Layout components
│   ├── sections/         # Seções da página
│   └── chat/             # Chatbot
├── lib/
│   ├── i18n.ts          # Configuração i18n
│   └── utils.ts         # Utilitários
└── messages/
    ├── pt-BR.json       # Traduções português
    └── en-US.json       # Traduções inglês
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Push para GitHub
2. Conecte no Vercel
3. Configure as variáveis de ambiente
4. Deploy automático

### Manual

```bash
npm run build
npm run start
```

## 📱 Funcionalidades

- ✅ Site responsivo mobile-first
- ✅ Internacionalização pt-BR/en-US
- ✅ Modo claro/escuro
- ✅ Chatbot com IA para qualificação de leads
- ✅ Animações suaves com Framer Motion
- ✅ SEO otimizado
- ✅ Performance otimizada

## 🤖 Chatbot

O chatbot utiliza GPT-4 para:

- Qualificar leads tecnicamente
- Entender problemas reais dos clientes
- Avaliar fit técnico e orçamentário
- Direcionar para reunião comercial

## 📄 Licença

Copyright © 2025 Neural LABS - Todos os direitos reservados.
Desenvolvido por Anderson Henrique da Silva - Engenheiro de Sistemas de IA.
Veja [LICENSE](LICENSE) para detalhes completos.

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

Desenvolvido com ❤️ pela Neural Lab
