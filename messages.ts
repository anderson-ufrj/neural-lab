import { notFound } from 'next/navigation';

export default async function getMessages(locale: string) {
  try {
    return (await import(`./src/i18n/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}