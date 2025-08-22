import { ThemeProvider } from '@/contexts/theme-context';

// This root layout applies global providers
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}