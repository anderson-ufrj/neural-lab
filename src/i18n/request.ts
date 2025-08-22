import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from './routing';
 
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !routing.locales.includes(locale as Locale)) {
    return {
      locale: routing.defaultLocale,
      messages: (await import(`../messages/${routing.defaultLocale}.json`)).default
    };
  }
  
  return {
    locale: locale as string,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});