import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from 'next-intl'
import { Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const t = useTranslations('footer')
  const nav = useTranslations('navigation')

  const links = [
    { name: nav('services'), href: '/services' },
    { name: nav('about'), href: '/about' },
    { name: nav('blog'), href: '/blog' },
    { name: nav('contact'), href: '/contact' },
  ]

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Email', href: 'mailto:contato@neural-lab.com', icon: Mail },
  ]

  return (
    <footer className={cn("bg-neural-muted border-t border-neural/10", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="col-span-1 lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 group mb-4">
                <Image 
                  src="/assets/logo.png" 
                  alt="Neural Lab" 
                  width={40} 
                  height={40}
                  className="w-10 h-10 transition-transform group-hover:scale-105"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-black font-display text-neural leading-none">
                    NEURAL
                  </span>
                  <span className="text-sm font-medium text-neural-accent leading-none">
                    LAB
                  </span>
                </div>
              </Link>
              
              <p className="text-neural-text-secondary max-w-md mb-6 leading-relaxed">
                {t('description')}
              </p>
              
              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="text-neural-text-secondary hover:text-neural-accent transition-colors duration-200 p-2 hover:bg-neural-accent/10 rounded-lg"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  )
                })}
              </div>
            </div>
            
            {/* Links section */}
            <div className="col-span-1">
              <h3 className="font-display font-bold text-neural mb-4">
                Links
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neural-text-secondary hover:text-neural transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact section */}
            <div className="col-span-1">
              <h3 className="font-display font-bold text-neural mb-4">
                Contato
              </h3>
              <div className="space-y-3">
                <div className="text-neural-text-secondary">
                  <p>contato@neural-lab.com</p>
                </div>
                <div className="text-neural-text-secondary">
                  <p>São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="py-6 border-t border-neural/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neural-text-secondary">
              © {new Date().getFullYear()} Neural Lab. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-neural-text-secondary hover:text-neural transition-colors duration-200"
              >
                Privacidade
              </Link>
              <Link 
                href="/terms" 
                className="text-neural-text-secondary hover:text-neural transition-colors duration-200"
              >
                Termos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}