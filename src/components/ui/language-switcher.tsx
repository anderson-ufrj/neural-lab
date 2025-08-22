'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        <Link
          href="/"
          locale="pt"
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            locale === 'pt'
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          PT
        </Link>
        <Link
          href="/"
          locale="en"
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            locale === 'en'
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          EN
        </Link>
      </div>
    </div>
  );
}