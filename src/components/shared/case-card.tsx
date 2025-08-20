import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface CaseCardProps {
  title: string;
  description: string;
  link?: string;
  tech?: string[];
  content: string;
}

export function CaseCard({ title, description, link, tech, content }: CaseCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-md bg-neural-green/10 px-2 py-1 text-xs font-medium text-neural-green ring-1 ring-inset ring-neural-green/20"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div 
          className="prose prose-sm max-w-none text-muted-foreground flex-1"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {link && link !== '#' && (
          <div className="mt-4 pt-4">
            <Button asChild variant="outline" className="w-full">
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Ver projeto
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}