"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { ArrowRight, Activity, Database, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  const t = useTranslations('hero')

  const labMetrics = [
    { value: '4', label: t('metrics.experiments'), icon: Activity },
    { value: '10M+', label: t('metrics.data_processed'), icon: Database },
    { value: '99.9%', label: t('metrics.uptime'), icon: Zap },
    { value: '3', label: t('metrics.agents'), icon: Users },
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
    <section className={cn("relative min-h-screen flex items-center bg-neural-primary overflow-hidden", className)}>
      {/* Clean Neural Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-neural-primary" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(204, 225, 223, 0.05) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
        {/* Minimal accent lines */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-neural-accent/10 to-transparent" />
          <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-neural-accent/10 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto text-center lg:text-left"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* Lab Status Indicator */}
          <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-3">
            <div className="w-3 h-3 bg-neural-accent rounded-full animate-pulse" />
            <span className="text-neural-accent font-mono text-sm tracking-wider uppercase">
              {t('lab_status')}
            </span>
          </motion.div>

          {/* Logo/Brand */}
          <motion.div variants={fadeInUp} className="mb-8 inline-block">
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-black font-display tracking-tighter leading-none">
              <span className="text-neural-text-inverse block">NEURAL</span>
              <span className="text-neural-accent block -mt-4 lg:-mt-6">LAB</span>
            </h1>
            
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] mt-4 text-neural-accent/80 uppercase">
              {t('subtitle')}
            </p>
          </motion.div>
          
          {/* Mission Statement */}
          <motion.div variants={fadeInUp} className="mb-8 space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-neural-text-inverse mb-6 leading-relaxed max-w-5xl font-light">
              {t('headline')}
            </h2>
            
            <p className="text-lg md:text-xl text-neural-accent/90 leading-relaxed max-w-4xl">
              {t('description')}
            </p>
            
            <blockquote className="text-base md:text-lg text-neural-text-inverse/80 italic border-l-2 border-neural-accent pl-6 max-w-3xl">
              "{t('manifesto')}"
            </blockquote>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center lg:justify-start"
          >
            <Button 
              size="lg" 
              className="group bg-neural-accent text-neural-primary hover:bg-neural-accent/90 font-semibold"
              asChild
            >
              <Link href="/experiments">
                {t('cta.primary')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-neural-accent text-neural-accent hover:bg-neural-accent/10"
              asChild
            >
              <Link href="/contact">
                {t('cta.secondary')}
              </Link>
            </Button>
          </motion.div>
          
          {/* Lab Metrics */}
          <motion.div 
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-16 border-t border-neural-accent/20"
          >
            {labMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col items-center lg:items-start group bg-neural-light/30 p-4 rounded-lg hover:bg-neural-light/40 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-neural-accent/20 rounded-lg group-hover:bg-neural-accent/30 transition-colors">
                      <Icon className="h-4 w-4 md:h-5 md:w-5 text-neural-accent" />
                    </div>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-neural-text-inverse font-display">
                      {metric.value}
                    </div>
                  </div>
                  <div className="text-xs md:text-sm text-neural-accent/80 font-medium text-center lg:text-left">
                    {metric.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Neural Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-xs text-neural-accent/60 uppercase tracking-wider font-mono">
          Explore
        </div>
        <div className="w-6 h-10 border-2 border-neural-accent/40 rounded-full flex justify-center relative">
          <motion.div 
            className="w-1 h-3 bg-neural-accent rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}