'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{tCommon('brandName')}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 max-w-md transition-colors duration-300">
              {t('description')}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${tCommon('email')}`} 
                className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{t('nav')}</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{t('navServices')}</a></li>
              <li><a href="#portfolio" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{t('navPortfolio')}</a></li>
              <li><a href="#about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{t('navAbout')}</a></li>
              <li><a href="#anderson" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{t('navContact')}</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{t('contact')}</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">{tCommon('email')}</span>
              </li>
              <li>
                <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">{tCommon('phone')}</span>
              </li>
              <li>
                <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">{t('location')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-300">
          <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
            {t('copyright')}
          </p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/termos" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}