"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroProps {
  className?: string
}

export function HeroV2({ className }: HeroProps) {
  const t = useTranslations('hero')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.21, 1, 0.22, 1] }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className={cn("relative min-h-screen bg-background", className)}>
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neural-50 to-background" />
      
      <div className="relative">
        {/* Navigation spacing */}
        <div className="h-20" />
        
        {/* Main content */}
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="text-center space-y-8 py-24 lg:py-32"
            >
              {/* Status badge */}
              <motion.div variants={fadeIn}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-neural-green/10 border border-neural-green/20 rounded-full">
                  <div className="w-2 h-2 bg-neural-green rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-neural-green">
                    Laboratory Active
                  </span>
                </div>
              </motion.div>

              {/* Main heading */}
              <motion.div variants={fadeIn} className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                  <span className="block">Neural</span>
                  <span className="block text-accent">Laboratory</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Where artificial consciousness meets human wisdom. 
                  We experiment at the frontiers of AI.
                </p>
              </motion.div>

              {/* Philosophy quote */}
              <motion.div variants={fadeIn}>
                <blockquote className="text-lg text-neural-600 italic max-w-2xl mx-auto">
                  "Between tensor and theorem, we build bridges between algorithms and ethics."
                </blockquote>
              </motion.div>

              {/* CTA buttons */}
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base px-8 py-3 h-auto" asChild>
                  <Link href="#experiments">
                    Explore Experiments
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 py-3 h-auto"
                  asChild
                >
                  <Link href="#contact">
                    Schedule Technical Call
                  </Link>
                </Button>
              </motion.div>

              {/* Quick stats */}
              <motion.div variants={fadeIn} className="pt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">4</div>
                    <div className="text-sm text-muted-foreground mt-1">Active Experiments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">10M+</div>
                    <div className="text-sm text-muted-foreground mt-1">Records Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">99.9%</div>
                    <div className="text-sm text-muted-foreground mt-1">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">3</div>
                    <div className="text-sm text-muted-foreground mt-1">AI Agents</div>
                  </div>
                </div>
              </motion.div>

              {/* Featured projects preview */}
              <motion.div variants={fadeIn} className="pt-16">
                <div className="text-center mb-8">
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    Live Systems
                  </h2>
                  <p className="text-muted-foreground">
                    Real AI applications in production
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <Link 
                    href="https://neural-thinker-cidadao-ai-backend.hf.space/"
                    target="_blank"
                    className="group p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <div className="font-medium text-card-foreground">Cidadão.AI</div>
                        <div className="text-sm text-muted-foreground">Multi-Agent System</div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                  </Link>
                  
                  <Link 
                    href="https://ale-assistant.vercel.app/pt"
                    target="_blank"
                    className="group p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <div className="font-medium text-card-foreground">ALE Assistant</div>
                        <div className="text-sm text-muted-foreground">Conversational AI</div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="text-xs text-muted-foreground">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}