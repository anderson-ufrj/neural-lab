import { useTranslations } from 'next-intl';
import { Link } from 'next-intl/navigation';
import { Button } from '@/components/ui/button';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="section bg-gradient-to-br from-background to-muted">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {t('title')}
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground font-newsreader italic sm:text-xl lg:text-2xl">
            {t('slogan')}
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
            <Button asChild size="lg">
              <Link href="/servicos">
                {t('cta_services')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">
                {t('cta_portfolio')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}