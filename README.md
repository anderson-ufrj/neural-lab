# Neural LAB

Construímos sistemas de IA que se explicam. Entre o cálculo e o sonho, habita a inteligência.

---

We build AI systems that explain themselves. Between calculation and dream, intelligence resides.

## 🚀 Tecnologias / Technologies

- **Framework**: Next.js 15 (App Router)
- **Linguagem / Language**: TypeScript
- **Estilização / Styling**: Tailwind CSS + shadcn/ui
- **Internacionalização / Internationalization**: next-intl (PT/EN)
- **Conteúdo / Content**: Contentlayer + MDX
- **Deploy**: Vercel (otimizado)

## 📁 Estrutura do Projeto / Project Structure

```
src/
├── app/
│   ├── (lang)/[locale]/          # Rotas localizadas / Localized routes
│   │   ├── layout.tsx           # Layout principal / Main layout
│   │   ├── page.tsx             # Página inicial / Home page
│   │   ├── sobre/               # Sobre nós / About us
│   │   ├── servicos/            # Serviços / Services
│   │   ├── portfolio/           # Portfólio / Portfolio
│   │   ├── blog/                # Blog
│   │   └── contato/             # Contato / Contact
│   ├── layout.tsx               # Root layout
│   └── robots.txt               # SEO
├── components/
│   ├── ui/                      # Componentes base (shadcn/ui)
│   └── shared/                  # Componentes compartilhados
├── content/
│   ├── pt/                      # Conteúdo em português
│   └── en/                      # English content
├── i18n/                        # Traduções / Translations
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

O projeto suporta dois idiomas:
The project supports two languages:

- **Português (PT)**: `/pt/*` - idioma padrão / default language
- **English (EN)**: `/en/*`

### Adicionando Traduções / Adding Translations

1. Edite os arquivos em `src/i18n/` / Edit files in `src/i18n/`
2. Use `useTranslations()` nos componentes / Use `useTranslations()` in components
3. O switch de idioma está sempre visível / Language switcher is always visible

## 📝 Conteúdo MDX / MDX Content

### Serviços / Services

Adicione novos serviços em:
Add new services in:

- `src/content/pt/services/`
- `src/content/en/services/`

### Cases do Portfólio / Portfolio Cases

Adicione novos cases em:
Add new cases in:

- `src/content/pt/cases/`
- `src/content/en/cases/`

### Posts do Blog / Blog Posts

Adicione novos posts em:
Add new posts in:

- `src/content/pt/blog/`
- `src/content/en/blog/`

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
