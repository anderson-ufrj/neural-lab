"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { ExternalLink, GitBranch, Activity, Brain, Search, Code2 } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ExperimentCardProps {
  name: string
  status: string
  type: string
  description: string
  impact: string
  tech: string[]
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
  icon: React.ComponentType<{ className?: string }>
}

function ExperimentCard({ 
  name, 
  status, 
  type, 
  description, 
  impact, 
  tech, 
  demoUrl, 
  githubUrl,
  featured = false,
  icon: Icon 
}: ExperimentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={cn(
        "group h-full border transition-all duration-300 hover:shadow-xl",
        featured 
          ? "border-neural-accent/30 bg-neural-light/20 hover:border-neural-accent/50" 
          : "border-neural-light/20 hover:border-neural-accent/30"
      )}>
        <CardContent className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={cn(
                "p-2 rounded-lg",
                featured ? "bg-neural-accent/20" : "bg-neural-light/30"
              )}>
                <Icon className="h-5 w-5 text-neural-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neural-text-inverse">
                  {name}
                </h3>
                <p className="text-sm text-neural-accent/80">
                  {type}
                </p>
              </div>
            </div>
            
            <Badge 
              variant="outline" 
              className="text-xs border-neural-accent/40 text-neural-accent"
            >
              {status}
            </Badge>
          </div>
          
          {/* Description */}
          <p className="text-neural-text-inverse/80 text-sm leading-relaxed">
            {description}
          </p>
          
          {/* Impact metric */}
          <div className="bg-neural-primary/50 rounded-lg p-3 border border-neural-accent/10">
            <p className="text-neural-accent font-semibold text-sm">
              📊 {impact}
            </p>
          </div>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span 
                key={item}
                className="text-xs px-2 py-1 bg-neural-light/20 rounded-md text-neural-text-inverse/70 border border-neural-light/10"
              >
                {item}
              </span>
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex gap-2 pt-2">
            {demoUrl && (
              <Button 
                size="sm" 
                className="flex-1 bg-neural-accent text-neural-primary hover:bg-neural-accent/90"
                asChild
              >
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Demo
                </Link>
              </Button>
            )}
            
            {githubUrl && (
              <Button 
                size="sm" 
                variant="outline"
                className="border-neural-accent/40 text-neural-accent hover:bg-neural-accent/10"
                asChild
              >
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <GitBranch className="w-3 h-3 mr-1" />
                  Code
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface ExperimentsProps {
  className?: string
}

export function Experiments({ className }: ExperimentsProps) {
  const t = useTranslations('experiments')

  const experiments = [
    {
      name: "Cidadão.AI",
      status: "🟢 LIVE",
      type: "Multi-Agent System",
      description: "Sistema de transparência pública com 3 agentes de IA especializados processando dados governamentais em tempo real.",
      impact: "10M+ registros processados mensalmente",
      tech: ["Python", "FastAPI", "PostgreSQL", "LangChain", "Multi-Agent"],
      demoUrl: "https://neural-thinker-cidadao-ai-backend.hf.space/",
      githubUrl: "https://github.com/anderson-ufrj/cidadao.ai-backend",
      featured: true,
      icon: Brain
    },
    {
      name: "ALE Assistant",
      status: "🟢 STABLE", 
      type: "Conversational AI",
      description: "Assistente de IA especializado em compliance de software para escritórios de arquitetura, com foco em LGPD e qualificação B2B.",
      impact: "87% taxa de conversão em leads",
      tech: ["Next.js", "Conversational AI", "Auth", "i18n", "LGPD"],
      demoUrl: "https://ale-assistant.vercel.app/pt",
      featured: false,
      icon: Activity
    },
    {
      name: "UaisInt",
      status: "🟡 MONITORING",
      type: "OSINT Intelligence", 
      description: "Sistema de inteligência em fontes abertas com análise automatizada de redes sociais e fontes públicas para investigação.",
      impact: "200+ casos de investigação suportados",
      tech: ["Python", "OSINT", "Network Analysis", "Web Scraping"],
      featured: false,
      icon: Search
    },
    {
      name: "Projetor",
      status: "🔵 FOUNDATION",
      type: "Web Architecture",
      description: "Base arquitetural para aplicações web modernas com foco em performance, segurança e escalabilidade.",
      impact: "Fundação para projetos subsequentes",
      tech: ["Next.js", "TypeScript", "Docker", "Performance"],
      featured: false,
      icon: Code2
    }
  ]

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className={cn("py-24 bg-neural-light/5", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-neural-accent rounded-full animate-pulse" />
            <span className="text-neural-accent font-mono text-sm tracking-wider uppercase">
              Laboratório Ativo
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neural-text-inverse mb-6">
            Experimentos em <span className="text-neural-accent">Execução</span>
          </h2>
          
          <p className="text-lg text-neural-text-inverse/70 max-w-3xl mx-auto">
            Sistemas de IA reais em produção. Cada projeto representa uma fronteira 
            explorada entre teoria e aplicação prática.
          </p>
        </motion.div>

        {/* Experiments Grid */}
        <motion.div 
          className="grid gap-6 md:gap-8 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {experiments.map((experiment, index) => (
            <ExperimentCard key={experiment.name} {...experiment} />
          ))}
        </motion.div>

        {/* Lab Summary */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-8 text-sm text-neural-text-inverse/60">
            <span>4 Experimentos Ativos</span>
            <span>•</span>
            <span>15+ Tecnologias</span>
            <span>•</span>
            <span>99.9% Uptime</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}