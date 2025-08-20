"use client"

import * as React from "react"
import { useTranslations } from 'next-intl'
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Database, 
  Brain, 
  Settings, 
  Zap, 
  Code2, 
  Cloud,
  CheckCircle2
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ServicesProps {
  className?: string
}

export function Services({ className }: ServicesProps) {
  const t = useTranslations('services')

  const services = [
    {
      icon: Database,
      title: t('data_engineering.title'),
      description: t('data_engineering.description'),
      tech: t('data_engineering.tech').split(', '),
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Brain,
      title: t('ml_engineering.title'),
      description: t('ml_engineering.description'),
      tech: t('ml_engineering.tech').split(', '),
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Settings,
      title: t('consulting.title'),
      description: t('consulting.description'),
      tech: t('consulting.tech').split(', '),
      gradient: "from-green-500/10 to-emerald-500/10"
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
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
    <section className={cn("py-24 bg-neural-muted/30", className)}>
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
              {t('title')}
            </h2>
            <p className="text-xl text-neural-text-secondary/70 max-w-3xl mx-auto font-light">
              {t('subtitle')}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-background/60 backdrop-blur-sm hover:bg-background/80">
                  <CardHeader className="pb-4">
                    {/* Icon with gradient background */}
                    <div className={cn(
                      "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
                      service.gradient
                    )}>
                      <Icon className="w-8 h-8 text-neural" />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-neural group-hover:text-neural-accent transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-neural-text-secondary mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    {/* Tech stack */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-neural/80 mb-3">
                        Tecnologias:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-neural-accent/10 text-neural-text-secondary text-xs font-medium rounded-full border border-neural-accent/20"
                          >
                            <CheckCircle2 className="w-3 h-3 text-neural-accent" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}