import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
export const locales = ['pt-BR', 'en-US'] as const;
 
export default getRequestConfig(async ({locale}) => {
  // Fallback to pt-BR if locale is undefined
  const validLocale = locale || 'pt-BR';
  
  return {
    locale: validLocale,
    messages: (await import(`../../messages/${validLocale}.json`)).default
  };
});