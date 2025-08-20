'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-gray-900">Neural LAB</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@neural-lab.com" 
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{t('footer.nav')}</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{t('nav.services')}</a></li>
              <li><a href="#portfolio" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{t('nav.portfolio')}</a></li>
              <li><a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{t('nav.about')}</a></li>
              <li><a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-gray-600">contato@neural-lab.com</span>
              </li>
              <li>
                <span className="text-sm text-gray-600">+55 (31) 9999-9999</span>
              </li>
              <li>
                <span className="text-sm text-gray-600">{t('footer.location')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link href="/termos" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}