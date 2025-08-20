"use client"

import * as React from "react"
import Link from "next/link"
import { ExternalLink, Github, Activity } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  name: string
  description: string
  status: 'live' | 'stable' | 'development'
  category: string
  metrics: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

function ProjectCard({ 
  name, 
  description, 
  status, 
  category,
  metrics,
  technologies,
  demoUrl, 
  githubUrl,
  featured = false 
}: ProjectCardProps) {
  const statusConfig = {
    live: { color: 'bg-neural-green/10 text-neural-green border-neural-green/20', label: 'Live' },
    stable: { color: 'bg-neural-blue/10 text-neural-blue border-neural-blue/20', label: 'Stable' },
    development: { color: 'bg-neural-cyan/10 text-neural-cyan border-neural-cyan/20', label: 'Development' }
  }

  return (
    <Card className={cn(
      "group h-full transition-all duration-200 hover:shadow-lg",
      featured && "ring-1 ring-accent/20"
    )}>
      <CardContent className="p-6 space-y-6 h-full flex flex-col">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
              {name}
            </h3>
            <Badge 
              variant="outline" 
              className={cn("text-xs", statusConfig[status].color)}
            >
              {statusConfig[status].label}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground font-medium">
            {category}
          </p>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed flex-1">
          {description}
        </p>

        {/* Metrics */}
        <div className="p-3 bg-muted/50 rounded-lg">
          <p className="text-sm font-medium text-foreground">
            {metrics}
          </p>
        </div>

        {/* Technologies */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech) => (
              <span 
                key={tech}
                className="text-xs px-2 py-1 bg-neural-100 text-neural-700 rounded border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          {demoUrl && (
            <Button size="sm" className="flex-1" asChild>
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-2" />
                View Live
              </Link>
            </Button>
          )}
          
          {githubUrl && (
            <Button size="sm" variant="outline" asChild>
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

interface ExperimentsV2Props {
  className?: string
}

export function ExperimentsV2({ className }: ExperimentsV2Props) {
  const projects = [
    {
      name: "Cidadão.AI",
      description: "Multi-agent system for government transparency with three specialized AI agents processing public data in real-time.",
      status: "live" as const,
      category: "Multi-Agent System",
      metrics: "10M+ government records processed monthly",
      technologies: ["Python", "FastAPI", "PostgreSQL", "LangChain", "Multi-Agent"],
      demoUrl: "https://neural-thinker-cidadao-ai-backend.hf.space/",
      githubUrl: "https://github.com/anderson-ufrj/cidadao.ai-backend",
      featured: true
    },
    {
      name: "ALE Assistant",
      description: "Conversational AI specialized in software compliance for architecture firms, with focus on LGPD and B2B lead qualification.",
      status: "stable" as const,
      category: "Conversational AI",
      metrics: "87% lead conversion rate",
      technologies: ["Next.js", "Conversational AI", "Authentication", "i18n", "LGPD"],
      demoUrl: "https://ale-assistant.vercel.app/pt",
      featured: false
    },
    {
      name: "UaisInt",
      description: "Open Source Intelligence system with automated analysis of social networks and public sources for investigation purposes.",
      status: "development" as const,
      category: "OSINT Intelligence",
      metrics: "200+ investigation cases supported",
      technologies: ["Python", "OSINT", "Network Analysis", "Web Scraping"],
      featured: false
    },
    {
      name: "Projetor",
      description: "Architectural foundation for modern web applications with focus on performance, security and scalability.",
      status: "stable" as const,
      category: "Web Architecture",
      metrics: "Foundation for subsequent projects",
      technologies: ["Next.js", "TypeScript", "Docker", "Performance"],
      featured: false
    }
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="experiments" className={cn("py-24 bg-neural-50/30", className)}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
              <Activity className="w-3 h-3 text-accent" />
              <span className="text-sm font-medium text-accent">Active Research</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Laboratory Experiments
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real AI systems in production. Each project represents a frontier explored 
              between theory and practical application.
            </p>
          </motion.div>

          {/* Projects grid */}
          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:gap-8"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {projects.map((project) => (
              <motion.div key={project.name} variants={fadeIn}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {/* Summary stats */}
          <motion.div 
            className="mt-16 pt-8 border-t border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground">4</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">2</div>
                <div className="text-sm text-muted-foreground">Live Demos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}