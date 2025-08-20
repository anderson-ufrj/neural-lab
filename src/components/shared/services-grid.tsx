import { allServices } from 'contentlayer/generated';
import { useLocale } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ServicesGrid() {
  const locale = useLocale();
  
  const services = allServices
    .filter(service => service.locale === locale)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {services.map((service) => (
        <Card key={service._id} className="h-full">
          <CardHeader>
            <CardTitle className="text-xl">{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div 
              className="prose prose-sm max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: service.body.html }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}