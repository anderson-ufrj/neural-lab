"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { ArrowRight, Code, Database, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  const t = useTranslations('hero')

  const metrics = [
    { value: '50+', label: t('metrics.projects'), icon: Code },
    { value: '99.9%', label: t('metrics.uptime'), icon: Zap },
    { value: '10ms', label: t('metrics.latency'), icon: Database },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className={cn("relative min-h-screen flex items-center bg-background", className)}>
      {/* Background clean */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-neural-muted/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-5xl mx-auto text-center lg:text-left"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* Logo/Brand */}
          <motion.div variants={fadeInUp} className="mb-8 inline-block">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tighter leading-none">
              <span className="text-neural block">NEURAL</span>
              <span className="text-neural-accent block -mt-2">LAB</span>
            </h1>
            
            <p className="text-sm md:text-base font-medium tracking-[0.3em] mt-4 text-neural-text-secondary uppercase">
              {t('subtitle')}
            </p>
          </motion.div>
          
          {/* Main headline */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-neural-text-secondary mb-6 leading-relaxed max-w-4xl">
              {t('headline')}
            </h2>
            <p className="text-base md:text-lg text-neural-text-secondary/80 leading-relaxed max-w-3xl">
              {t('description')}
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center lg:justify-start"
          >
            <Button variant="primary" size="lg" className="group" asChild>
              <Link href="/contact">
                {t('cta.primary')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/cases">
                {t('cta.secondary')}
              </Link>
            </Button>
          </motion.div>
          
          {/* Metrics */}
          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-neural/10"
          >
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col items-center lg:items-start group"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-neural-accent/10 rounded-lg group-hover:bg-neural-accent/20 transition-colors">
                      <Icon className="h-5 w-5 text-neural-accent" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-neural font-display">
                      {metric.value}
                    </div>
                  </div>
                  <div className="text-sm text-neural-text-secondary font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-neural-accent/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neural-accent/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}