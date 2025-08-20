import { useLocale } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getServices } from '@/lib/content';

export function ServicesGrid() {
  const locale = useLocale();
  const services = getServices(locale).sort((a, b) => a.order - b.order);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {services.map((service) => (
        <Card key={service.id} className="h-full">
          <CardHeader>
            <CardTitle className="text-xl">{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div 
              className="prose prose-sm max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: service.content }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}