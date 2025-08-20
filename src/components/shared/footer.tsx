import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">Neural LAB</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-left">
            {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}