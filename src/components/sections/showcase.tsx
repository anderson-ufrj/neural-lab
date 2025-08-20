"use client"

import * as React from "react"
import { useTranslations } from 'next-intl'
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface ShowcaseProps {
  className?: string
}

export function Showcase({ className }: ShowcaseProps) {
  // Mock data para showcase - em produção viria de CMS/API
  const cases = [
    {
      title: "Pipeline de Dados em Tempo Real",
      description: "Arquitetura de streaming de dados para fintech processando 10M+ transações/dia",
      image: "/assets/case-1.jpg",
      category: "Data Engineering",
      metrics: [
        { icon: TrendingUp, value: "99.9%", label: "Uptime" },
        { icon: Zap, value: "< 100ms", label: "Latência" },
        { icon: Users, value: "10M+", label: "Transações/dia" }
      ],
      tech: ["Python", "Apache Kafka", "Kubernetes", "PostgreSQL"]
    },
    {
      title: "Sistema de Recomendação ML",
      description: "Engine de IA para e-commerce aumentando conversão em 35%",
      image: "/assets/case-2.jpg", 
      category: "ML Engineering",
      metrics: [
        { icon: TrendingUp, value: "35%", label: "↑ Conversão" },
        { icon: Users, value: "2M+", label: "Usuários" },
        { icon: Zap, value: "50ms", label: "Resposta" }
      ],
      tech: ["TensorFlow", "MLflow", "Redis", "FastAPI"]
    },
    {
      title: "Modernização Cloud-Native",
      description: "Migração de legacy para microserviços com 80% redução de custos",
      image: "/assets/case-3.jpg",
      category: "Cloud Architecture", 
      metrics: [
        { icon: TrendingUp, value: "80%", label: "↓ Custos" },
        { icon: Zap, value: "5x", label: "Mais Rápido" },
        { icon: Users, value: "0", label: "Downtime" }
      ],
      tech: ["Docker", "Kubernetes", "AWS", "Terraform"]
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className={cn("py-24 bg-background", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-black font-display text-neural mb-6">
              Projetos que Transformam
            </h2>
            <p className="text-xl text-neural-text-secondary/70 max-w-3xl mx-auto font-light">
              Cases reais de engenharia que entregaram resultados mensuráveis em produção
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {cases.map((project, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-neural-muted/10 hover:bg-neural-muted/20 overflow-hidden">
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-neural-accent/20 to-neural/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neural/20" />
                  <div className="absolute top-4 right-4">
                    <ArrowUpRight className="w-5 h-5 text-neural-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-background/90 text-neural-text-secondary">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-neural mb-3 group-hover:text-neural-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-neural-text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Métricas */}
                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-neural/5">
                    {project.metrics.map((metric, metricIndex) => {
                      const Icon = metric.icon
                      return (
                        <div key={metricIndex} className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Icon className="w-4 h-4 text-neural-accent mr-1" />
                            <span className="text-lg font-bold text-neural">
                              {metric.value}
                            </span>
                          </div>
                          <span className="text-xs text-neural-text-secondary/60">
                            {metric.label}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-neural-accent/5 text-neural-text-secondary text-xs rounded-md border border-neural-accent/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}