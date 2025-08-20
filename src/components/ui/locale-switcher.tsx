"use client"

import * as React from "react"
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LocaleSwitcherProps {
  className?: string
}

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  
  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname and add new locale
    const segments = pathname.split('/').filter(Boolean)
    if (segments[0] === 'pt-BR' || segments[0] === 'en-US') {
      segments[0] = newLocale
    } else {
      segments.unshift(newLocale)
    }
    const newPath = '/' + segments.join('/')
    router.push(newPath)
  }
  
  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn("h-9 px-3 text-sm font-medium", className)}
      onClick={() => switchLocale(locale === 'pt-BR' ? 'en-US' : 'pt-BR')}
      aria-label={`Switch to ${locale === 'pt-BR' ? 'English' : 'Português'}`}
    >
      {locale === 'pt-BR' ? 'EN' : 'PT'}
    </Button>
  )
}