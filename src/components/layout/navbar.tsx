"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from 'next-intl'
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LocaleSwitcher } from "@/components/ui/locale-switcher"
import { cn } from "@/lib/utils"

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const t = useTranslations('navigation')
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  const navigation = [
    { name: t('services'), href: '/services' },
    { name: t('cases'), href: '/cases' },
    { name: t('about'), href: '/about' },
    { name: t('blog'), href: '/blog' },
  ]

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/90 backdrop-blur-xl border-b border-neural/10 shadow-xl" 
          : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image 
                src="/assets/logo.png" 
                alt="Neural Lab" 
                width={40} 
                height={40}
                className="w-8 h-8 lg:w-10 lg:h-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="absolute inset-0 bg-neural-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-black font-display bg-gradient-to-r from-neural to-neural-light bg-clip-text text-transparent leading-none">
                NEURAL
              </span>
              <span className="text-xs lg:text-sm font-semibold text-neural-accent leading-none tracking-wider">
                LAB
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-neural-text-secondary hover:text-neural transition-all duration-300 font-medium group px-2 py-1"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-neural-accent to-neural-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            ))}
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Desktop actions */}
            <div className="hidden lg:flex items-center space-x-2">
              <LocaleSwitcher />
              <ThemeToggle />
              <Button 
                variant="primary" 
                size="sm" 
                className="bg-neural hover:bg-neural-light shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300" 
                asChild
              >
                <Link href="/contact">{t('contact')}</Link>
              </Button>
            </div>
            
            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(!isOpen)
              }}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-neural/10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-neural-text-secondary hover:text-neural hover:bg-neural-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile actions */}
              <div className="flex items-center justify-between px-3 py-2 mt-4 pt-4 border-t border-neural/10">
                <div className="flex items-center space-x-2">
                  <LocaleSwitcher />
                  <ThemeToggle />
                </div>
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="bg-neural hover:bg-neural-light shadow-lg" 
                  asChild
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    {t('contact')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}