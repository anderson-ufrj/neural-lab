'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations('contact.form');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form data:', data);
    setSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Envie uma mensagem</CardTitle>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="text-center py-8">
            <div className="rounded-lg bg-success/10 p-4 text-success">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                {t('name')}
              </label>
              <Input
                {...register('name')}
                placeholder={t('name')}
                className={errors.name ? 'border-error' : ''}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-error" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                {t('email')}
              </label>
              <Input
                {...register('email')}
                type="email"
                placeholder={t('email')}
                className={errors.email ? 'border-error' : ''}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-error" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                {t('message')}
              </label>
              <Textarea
                {...register('message')}
                placeholder={t('message')}
                rows={4}
                className={errors.message ? 'border-error' : ''}
                aria-invalid={errors.message ? 'true' : 'false'}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-error" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : t('submit')}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}