# Neural LAB

Construímos sistemas de IA que se explicam. Entre o cálculo e o sonho, habita a inteligência.

---

We build AI systems that explain themselves. Between calculation and dream, intelligence resides.

## 🚀 Tecnologias / Technologies

- **Framework**: Next.js 15 (App Router)
- **Linguagem / Language**: TypeScript
- **Estilização / Styling**: Tailwind CSS + shadcn/ui
- **Internacionalização / Internationalization**: next-intl (PT/EN)
- **Conteúdo / Content**: JSON-based translations
- **Deploy**: Vercel (otimizado)

## 📁 Estrutura do Projeto / Project Structure

```
src/
├── app/
│   ├── [locale]/                # Rotas localizadas / Localized routes  
│   │   ├── layout.tsx           # Layout principal / Main layout
│   │   └── page.tsx             # Página inicial / Home page
│   ├── layout.tsx               # Root redirect layout
│   └── middleware.ts            # Locale detection
├── components/
│   ├── ui/                      # Componentes base (shadcn/ui)
│   └── shared/                  # Componentes compartilhados
├── messages/                    # Arquivos de tradução / Translation files
│   ├── pt.json                  # Traduções em português
│   └── en.json                  # English translations
├── i18n/                        # Configuração next-intl
│   ├── request.ts              # Configuração do servidor
│   └── routing.ts              # Roteamento e locales
├── lib/                         # Utilitários / Utilities
└── styles/                      # Estilos globais / Global styles
```

## 🛠️ Desenvolvimento / Development

### Pré-requisitos / Prerequisites

- Node.js 18+
- npm ou pnpm

### Instalação / Installation

```bash
# Clonar o repositório / Clone repository
git clone <repository-url>
cd neural-lab

# Instalar dependências / Install dependencies
npm install

# Executar em desenvolvimento / Run development server
npm run dev
```

### Scripts Disponíveis / Available Scripts

```bash
npm run dev          # Servidor de desenvolvimento / Development server
npm run build        # Build para produção / Production build
npm run start        # Executar build / Run production build
npm run lint         # Verificar código / Lint code
npm run typecheck    # Verificar tipos / Type checking
npm run format       # Formatar código / Format code
npm run contentlayer # Processar MDX / Process MDX content
```

## 🌐 Internacionalização / Internationalization

O projeto usa **next-intl** para suporte completo a internacionalização:
The project uses **next-intl** for complete internationalization support:

- **Português (PT)**: `/pt/*` - idioma padrão / default language
- **English (EN)**: `/en/*`

### Estrutura de Traduções / Translation Structure

- **Arquivos de tradução**: `src/messages/{locale}.json`
- **Configuração**: `src/i18n/routing.ts` e `src/i18n/request.ts`
- **Middleware**: Detecção automática de locale

### Uso em Componentes / Component Usage

```typescript
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations('section'); // namespace da seção
  return <h1>{t('title')}</h1>;
}
```

### Adicionando Traduções / Adding Translations

1. Edite os arquivos JSON em `src/messages/`
2. Use `useTranslations('namespace')` nos componentes  
3. Organize as traduções por seções (hero, nav, footer, etc.)

## 📝 Gerenciamento de Conteúdo / Content Management

### Traduções Estruturadas / Structured Translations

O conteúdo é gerenciado através de arquivos JSON estruturados:
Content is managed through structured JSON files:

- **Navegação**: `nav` namespace
- **Hero Section**: `hero` namespace  
- **Serviços**: `services` namespace
- **Cases**: `cases` namespace
- **Sobre**: `about` namespace
- **Contato**: `contact` namespace
- **Rodapé**: `footer` namespace

### Adicionando Novo Conteúdo / Adding New Content

1. Edite `src/messages/pt.json` e `src/messages/en.json`
2. Organize o conteúdo em namespaces lógicos
3. Use a estrutura aninhada para organização
4. Teste as traduções com `useTranslations('namespace')`

## 🎨 Design System

### Cores / Colors

- **Base**: `#F7F9FA` (background), `#111827` (text)
- **Acentos / Accents**: `#0A84FF` (primary), `#00C48C` (neural-green), `#6E56CF` (neural-purple)
- **Feedback**: `#16A34A` (success), `#F59E0B` (warning), `#DC2626` (error)

### Tipografia / Typography

- **Principal / Primary**: Inter (sistema)
- **Destaque / Accent**: Newsreader (slogans)

### Espaçamento / Spacing

- **Container**: max-width 1200px
- **Espaçamento base / Base spacing**: 4px
- **Border radius**: 1.25rem

## 📊 SEO e Performance / SEO and Performance

### Metas de Qualidade / Quality Goals

- **Performance**: ≥95
- **Acessibilidade / Accessibility**: ≥100
- **Melhores Práticas / Best Practices**: ≥100
- **SEO**: ≥100

### Recursos Implementados / Implemented Features

- ✅ Metadata dinâmica por página / Dynamic metadata per page
- ✅ Open Graph e Twitter Cards
- ✅ Sitemap automático / Automatic sitemap
- ✅ Robots.txt
- ✅ Landmarks semânticos / Semantic landmarks
- ✅ Suporte a aria-* / aria-* support
- ✅ Navegação por teclado / Keyboard navigation
- ✅ Contraste AA+ / AA+ contrast

## 🚀 Deploy na Vercel / Vercel Deployment

### Deploy Automático / Automatic Deploy

1. Conecte o repositório ao Vercel / Connect repository to Vercel
2. Configure as variáveis de ambiente / Set environment variables:
   ```
   SITE_URL=https://seu-dominio.vercel.app
   GOOGLE_SITE_VERIFICATION=seu-codigo (opcional/optional)
   ```
3. Deploy automático a cada push / Automatic deploy on every push

### Build Manual / Manual Build

```bash
npm run build
npm run start
```

## 🔧 Configuração Avançada / Advanced Configuration

### Customização do Tema / Theme Customization

Edite `src/styles/globals.css` e `tailwind.config.ts` para personalizar cores e espaçamento.
Edit `src/styles/globals.css` and `tailwind.config.ts` to customize colors and spacing.

### Adição de Novas Rotas / Adding New Routes

1. Crie a pasta em `src/app/(lang)/[locale]/nova-rota/`
2. Adicione `page.tsx` com metadata SEO
3. Atualize as traduções em `src/i18n/`
4. Adicione ao navbar se necessário

### Integração com CMS / CMS Integration

O projeto usa Contentlayer, mas pode ser facilmente adaptado para:
The project uses Contentlayer, but can be easily adapted for:

- Sanity
- Strapi
- Contentful
- Notion

## 📞 Suporte / Support

Para dúvidas sobre implementação:
For implementation questions:

- 📧 E-mail: hello@neural-lab.com
- 💬 Issues no GitHub / GitHub Issues

---

**Neural LAB** © 2025 - Construindo o futuro da IA explicável / Building the future of explainable AI
