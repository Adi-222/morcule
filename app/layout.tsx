import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';
import ContactModal from '@/components/ui/ContactModal';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });

export const metadata: Metadata = {
  title: 'Morcule.',
  description: 'websites for coffee shops, salons, dentists & more. We blend editorial craft with conversion science.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface dark:bg-[#0F0F0F] text-on-surface dark:text-[#EDEDED] font-body selection:bg-primary-fixed selection:text-on-primary-fixed transition-colors duration-300 antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <ContactModal />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
