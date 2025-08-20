import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'sm';
}

export function Section({ children, className, size = 'default' }: SectionProps) {
  return (
    <section className={cn(
      size === 'sm' ? 'section-sm' : 'section',
      className
    )}>
      {children}
    </section>
  );
}