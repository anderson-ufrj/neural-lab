'use client';

import { useRouter, usePathname } from 'next-intl/navigation';
import { useLocale } from 'next-intl';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center border border-border rounded-lg bg-surface">
      <button
        onClick={() => switchLanguage('pt')}
        className={`px-3 py-1.5 text-sm font-medium rounded-l-lg transition-colors ${
          locale === 'pt'
            ? 'bg-primary text-white'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Português"
      >
        PT
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-r-lg transition-colors ${
          locale === 'en'
            ? 'bg-primary text-white'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}