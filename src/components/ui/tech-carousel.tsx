'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface TechCarouselProps {
  title?: string;
  subtitle?: string;
}

interface Technology {
  name: string;
  icon: string;
  description: string;
  color: string;
  category: 'ai' | 'web' | 'cloud' | 'database' | 'devops' | 'mobile';
  level: 'Expert' | 'Advanced' | 'Intermediate';
  image?: string;
  url?: string;
}

// Component for handling tech icon/image with fallback
function TechIcon({ tech }: { tech: Technology }) {
  const [imageError, setImageError] = useState(false);

  if (tech.image && !imageError) {
    return (
      <Image
        src={tech.image}
        alt={tech.name}
        width={64}
        height={64}
        className="object-contain w-full h-full rounded-lg"
        onError={() => setImageError(true)}
      />
    );
  }

  return <span className="text-5xl">{tech.icon}</span>;
}

export function TechCarousel({ title, subtitle }: TechCarouselProps) {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations('techCarousel');

  // Technology items with their information
  const technologies: Technology[] = [
    // AI & Machine Learning
    { name: t('python.name'), icon: "🐍", description: t('python.description'), color: "text-yellow-600", category: 'ai', level: 'Expert', image: "/assets/tech/Python-logo-notext.png", url: "https://python.org" },
    { name: t('tensorflow.name'), icon: "🧠", description: t('tensorflow.description'), color: "text-orange-500", category: 'ai', level: 'Advanced', image: "/assets/tech/tensorflow_logo.png", url: "https://tensorflow.org" },
    { name: t('pytorch.name'), icon: "🔥", description: t('pytorch.description'), color: "text-red-500", category: 'ai', level: 'Advanced', image: "/assets/tech/pytorch-logo.png", url: "https://pytorch.org" },
    { name: t('jupyter.name'), icon: "📓", description: t('jupyter.description'), color: "text-orange-500", category: 'ai', level: 'Expert', image: "/assets/tech/jupyter-logo.svg", url: "https://jupyter.org" },
    { name: t('llms.name'), icon: "🧠", description: t('llms.description'), color: "text-purple-600", category: 'ai', level: 'Expert', image: "/assets/tech/LLMs.jpeg", url: "https://huggingface.co/models" },
    { name: t('huggingface.name'), icon: "🤗", description: t('huggingface.description'), color: "text-yellow-500", category: 'ai', level: 'Advanced', image: "/assets/tech/huggingface.png", url: "https://huggingface.co" },
    { name: t('pandas.name'), icon: "🐼", description: t('pandas.description'), color: "text-blue-600", category: 'ai', level: 'Expert', image: "/assets/tech/pandas.png", url: "https://pandas.pydata.org" },
    { name: t('polars.name'), icon: "⚡", description: t('polars.description'), color: "text-orange-600", category: 'ai', level: 'Advanced', image: "/assets/tech/polars.png", url: "https://pola.rs" },
    { name: t('chromadb.name'), icon: "🎨", description: t('chromadb.description'), color: "text-purple-500", category: 'ai', level: 'Advanced', image: "/assets/tech/chromaDB.png", url: "https://trychroma.com" },
    { name: t('openai.name'), icon: "🤖", description: t('openai.description'), color: "text-emerald-600", category: 'ai', level: 'Expert', image: "/assets/tech/openai-logo.png", url: "https://openai.com" },
    { name: t('langchain.name'), icon: "🔗", description: t('langchain.description'), color: "text-purple-600", category: 'ai', level: 'Expert', image: "/assets/tech/langchain-logo.png", url: "https://langchain.com" },
    { name: t('claude.name'), icon: "🤖", description: t('claude.description'), color: "text-orange-600", category: 'ai', level: 'Expert', image: "/assets/tech/claude.png", url: "https://claude.ai" },
    
    // Web Development
    { name: t('nextjs.name'), icon: "⚛️", description: t('nextjs.description'), color: "text-gray-800", category: 'web', level: 'Expert', image: "/assets/tech/nextjs-icon-dark-background.png", url: "https://nextjs.org" },
    { name: t('react.name'), icon: "⚛️", description: t('react.description'), color: "text-blue-400", category: 'web', level: 'Expert', image: "/assets/tech/react-logo.png", url: "https://react.dev" },
    { name: t('typescript.name'), icon: "📘", description: t('typescript.description'), color: "text-blue-600", category: 'web', level: 'Advanced', image: "/assets/tech/typescript-logo.png", url: "https://typescriptlang.org" },
    { name: t('tailwindcss.name'), icon: "🎨", description: t('tailwindcss.description'), color: "text-cyan-600", category: 'web', level: 'Expert', image: "/assets/tech/tailwind-css.svg", url: "https://tailwindcss.com" },
    { name: t('htmlcss.name'), icon: "🌐", description: t('htmlcss.description'), color: "text-orange-600", category: 'web', level: 'Expert', image: "/assets/tech/html&TailwindCSS.jpg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: t('fastapi.name'), icon: "⚡", description: t('fastapi.description'), color: "text-green-600", category: 'web', level: 'Expert', image: "/assets/tech/fastapi-logo.png", url: "https://fastapi.tiangolo.com" },
    { name: t('nodejs.name'), icon: "💚", description: t('nodejs.description'), color: "text-green-500", category: 'web', level: 'Advanced', image: "/assets/tech/node-js.png", url: "https://nodejs.org" },
    
    // Cloud & DevOps
    { name: t('aws.name'), icon: "☁️", description: t('aws.description'), color: "text-orange-600", category: 'cloud', level: 'Advanced', image: "/assets/tech/amazonwebservices.png", url: "https://aws.amazon.com" },
    { name: t('googlecloud.name'), icon: "🌐", description: t('googlecloud.description'), color: "text-blue-500", category: 'cloud', level: 'Advanced', image: "/assets/tech/googlecloudplatform.png", url: "https://cloud.google.com" },
    { name: t('azure.name'), icon: "🔷", description: t('azure.description'), color: "text-blue-600", category: 'cloud', level: 'Intermediate', image: "/assets/tech/Microsoft_Azure.svg.png", url: "https://azure.microsoft.com" },
    { name: t('vercel.name'), icon: "▲", description: t('vercel.description'), color: "text-gray-900", category: 'cloud', level: 'Expert', image: "/assets/tech/vercel.png", url: "https://vercel.com" },
    { name: t('docker.name'), icon: "🐳", description: t('docker.description'), color: "text-blue-500", category: 'devops', level: 'Expert', image: "/assets/tech/docker.jpg", url: "https://docker.com" },
    { name: t('kubernetes.name'), icon: "⚓", description: t('kubernetes.description'), color: "text-blue-700", category: 'devops', level: 'Advanced', image: "/assets/tech/kubernetes.png", url: "https://kubernetes.io" },
    { name: t('git.name'), icon: "📝", description: t('git.description'), color: "text-orange-600", category: 'devops', level: 'Expert', image: "/assets/tech/git-logo.png", url: "https://git-scm.com" },
    { name: t('github.name'), icon: "🐙", description: t('github.description'), color: "text-gray-900", category: 'devops', level: 'Expert', image: "/assets/tech/GitHub.jpg", url: "https://github.com" },
    { name: t('cicd.name'), icon: "🔄", description: t('cicd.description'), color: "text-green-600", category: 'devops', level: 'Expert', image: "/assets/tech/CI&CD.png", url: "https://github.com/features/actions" },
    { name: t('ubuntu.name'), icon: "🐧", description: t('ubuntu.description'), color: "text-orange-600", category: 'devops', level: 'Expert', image: "/assets/tech/UbuntuCoF.svg.png", url: "https://ubuntu.com" },
    
    // Monitoring & Analytics
    { name: t('prometheus.name'), icon: "📊", description: t('prometheus.description'), color: "text-red-600", category: 'devops', level: 'Advanced', image: "/assets/tech/prometheus.png", url: "https://prometheus.io" },
    { name: t('grafana.name'), icon: "📈", description: t('grafana.description'), color: "text-orange-500", category: 'devops', level: 'Advanced', image: "/assets/tech/Grafana_logo.svg.png", url: "https://grafana.com" },
    
    // Databases
    { name: t('postgresql.name'), icon: "🐘", description: t('postgresql.description'), color: "text-blue-800", category: 'database', level: 'Advanced', image: "/assets/tech/postgresql-logo.png", url: "https://postgresql.org" },
    { name: t('redis.name'), icon: "🔴", description: t('redis.description'), color: "text-red-600", category: 'database', level: 'Advanced', image: "/assets/tech/Redis-Logo.png", url: "https://redis.io" },
    { name: t('mongodb.name'), icon: "🍃", description: t('mongodb.description'), color: "text-green-700", category: 'database', level: 'Advanced', image: "/assets/tech/mongodb-logo.png", url: "https://mongodb.com" },
  ];

  // Create duplicated array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  const getCategoryGradient = (category: Technology['category']) => {
    const gradients = {
      ai: 'from-purple-500 to-pink-500',
      web: 'from-blue-500 to-cyan-500', 
      cloud: 'from-orange-500 to-yellow-500',
      database: 'from-green-500 to-emerald-500',
      devops: 'from-red-500 to-pink-500',
      mobile: 'from-indigo-500 to-purple-500',
    };
    return gradients[category] || 'from-gray-500 to-gray-600';
  };


  return (
    <div className="tech-carousel-wrapper">
      {/* Header */}
      {(title || subtitle) && (
        <div className="carousel-context text-center mb-8">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Carousel Container */}
      <div 
        className="tech-carousel-container relative w-full max-w-full h-44 overflow-hidden mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent dark:from-gray-900 z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent dark:from-gray-900 z-10 pointer-events-none"></div>

        {/* Carousel Track */}
        <div 
          className={`tech-carousel-track flex items-center gap-6 h-full transition-all duration-300 ${
            isHovered ? 'animation-paused' : ''
          }`}
          style={{
            width: `${duplicatedTechs.length * 160}px`,
            animation: 'techScroll 90s linear infinite'
          }}
        >
          {duplicatedTechs.map((tech, index) => {
            const handleClick = () => {
              if (tech.url) {
                window.open(tech.url, '_blank', 'noopener,noreferrer');
              }
            };

            return (
              <div
                key={`${tech.name}-${index}`}
                className={`tech-item flex flex-col items-center justify-center min-w-[140px] h-32 transition-all duration-300 hover:scale-110 hover:z-20 relative group ${
                  tech.url ? 'cursor-pointer hover:shadow-lg' : 'cursor-default'
                }`}
                onClick={handleClick}
                role={tech.url ? "button" : undefined}
                tabIndex={tech.url ? 0 : undefined}
                onKeyDown={tech.url ? (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                  }
                } : undefined}
              >
              {/* Tech Card Background */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${getCategoryGradient(tech.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Tech Icon or Image */}
              <div className="w-16 h-16 mb-2 group-hover:scale-125 transition-transform duration-300 relative z-10 flex items-center justify-center">
                <TechIcon tech={tech} />
              </div>
              
              {/* Tech Name */}
              <div className={`text-sm font-bold ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity relative z-10 text-center`}>
                {tech.name}
              </div>

              {/* Enhanced Tooltip on hover */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs px-4 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-40 shadow-xl border border-gray-200 dark:border-gray-600 min-w-[150px]">
                <div className="font-semibold text-center mb-1">{tech.name}</div>
                <div className="text-gray-600 dark:text-gray-300 text-center mb-1">{tech.description}</div>
                {tech.url && (
                  <div className="text-xs text-blue-600 dark:text-blue-400 text-center font-medium">
                    {t('clickToVisit')}
                  </div>
                )}
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800"></div>
              </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add custom CSS for animation */}
      <style jsx>{`
        @keyframes techScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${technologies.length * 160}px);
          }
        }

        .animation-paused .tech-carousel-track {
          animation-play-state: paused;
        }

        .tech-carousel-container {
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }

        @media (max-width: 768px) {
          .tech-carousel-track {
            animation-duration: 60s;
          }
          
          .tech-item {
            min-width: 110px;
          }

          @keyframes techScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${technologies.length * 120}px);
            }
          }
        }

        @media (max-width: 480px) {
          .tech-carousel-track {
            animation-duration: 45s;
          }
          
          .tech-item {
            min-width: 90px;
          }

          @keyframes techScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${technologies.length * 100}px);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-carousel-track {
            animation: none;
          }
          
          .tech-item {
            opacity: 0.7;
          }
          
          .tech-item:hover {
            opacity: 1;
          }
        }

        /* Performance optimizations */
        .tech-carousel-track {
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          will-change: transform;
        }

        .tech-item {
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
      `}</style>
    </div>
  );
}