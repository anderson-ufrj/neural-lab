import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neural LAB',
  description: 'Construímos sistemas de IA que se explicam.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}