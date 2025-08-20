'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-green-700 to-emerald-700 flex items-center justify-center" style={{ borderRadius: '0.25rem 0.75rem 0.25rem 0.75rem' }}>
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Neural LAB</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-300 hover:text-green-200 transition-colors"
            style={{ borderRadius: '0.375rem 0.875rem 0.375rem 0.875rem' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle main menu"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-green-200 transition-colors tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button 
            asChild 
            className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-white border-0 shadow-lg shadow-green-900/40 font-semibold"
            style={{ borderRadius: '0.375rem 1rem 0.375rem 1rem' }}
          >
            <Link href="/contato">Fale Conosco</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="space-y-1 px-4 pb-3 pt-2 border-t border-gray-700 bg-gray-900/95 backdrop-blur-md">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-green-200 transition-colors"
                style={{ borderRadius: '0.25rem 0.75rem 0.25rem 0.75rem' }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-3">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-white border-0 shadow-lg shadow-green-900/40 font-semibold"
                style={{ borderRadius: '0.375rem 1rem 0.375rem 1rem' }}
              >
                <Link href="/contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}