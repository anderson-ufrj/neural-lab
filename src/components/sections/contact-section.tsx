'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FloatingElements } from '@/components/ui/floating-elements';
import { TextReveal } from '@/components/ui/text-reveal';
import { BreathingCard } from '@/components/ui/breathing-card';

export function ContactSection() {
  const t = useTranslations('contact'); const tFooter = useTranslations('footer');
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <FloatingElements count={5} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t('title')}
          </TextReveal>
          <TextReveal className="text-xl text-green-400 font-light" delay={0.3}>
            {t('subtitle')}
          </TextReveal>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <BreathingCard intensity={1.005} duration={7}>
            <div className="bg-gray-800/50 border border-gray-700 p-8" 
                 style={{ borderRadius: '1rem 0.5rem 1rem 0.5rem' }}>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('form.name')}
                  </label>
                  <Input 
                    id="name"
                    type="text"
                    className="bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                    style={{ borderRadius: '0.375rem 0.875rem 0.375rem 0.875rem' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('form.email')}
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    className="bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                    style={{ borderRadius: '0.375rem 0.875rem 0.375rem 0.875rem' }}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.company')}
                </label>
                <Input 
                  id="company"
                  type="text"
                  className="bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                  style={{ borderRadius: '0.375rem 0.875rem 0.375rem 0.875rem' }}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.message')}
                </label>
                <Textarea 
                  id="message"
                  rows={5}
                  className="bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500 resize-none"
                  style={{ borderRadius: '0.375rem 0.875rem 0.375rem 0.875rem' }}
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-white border-0 shadow-lg shadow-green-900/40 font-semibold"
                style={{ borderRadius: '0.5rem 1rem 0.5rem 1rem' }}
              >
                {t('form.submit')}
              </Button>
            </form>
            </div>
          </BreathingCard>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 border border-gray-700 p-6"
                 style={{ borderRadius: '1rem 0.5rem 1rem 0.5rem' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-green-700/25 to-emerald-700/15 border border-green-600/35"
                     style={{ borderRadius: '0.25rem 0.75rem 0.25rem 0.75rem' }}>
                  <Mail className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-400">contato@neural-lab.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 p-6"
                 style={{ borderRadius: '1rem 0.5rem 1rem 0.5rem' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-green-700/25 to-emerald-700/15 border border-green-600/35"
                     style={{ borderRadius: '0.25rem 0.75rem 0.25rem 0.75rem' }}>
                  <Phone className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Telefone</h3>
                  <p className="text-gray-400">+55 (31) 9999-9999</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 p-6"
                 style={{ borderRadius: '1rem 0.5rem 1rem 0.5rem' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-green-700/25 to-emerald-700/15 border border-green-600/35"
                     style={{ borderRadius: '0.25rem 0.75rem 0.25rem 0.75rem' }}>
                  <MapPin className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Localização</h3>
                  <p className="text-gray-400">{tFooter('location')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}