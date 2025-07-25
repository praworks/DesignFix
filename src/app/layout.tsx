import type {Metadata} from 'next';
import './globals.css';
import { Inter, Space_Grotesk, Dancing_Script } from 'next/font/google'
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';

const fontBody = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
})

const fontHeadline = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '700'],
})

const fontCursive = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-cursive',
  weight: ['400', '700'],
})


export const metadata: Metadata = {
  title: 'DesignFlow AI - Automating Design. Accelerating Innovation.',
  description: 'Custom CAD Automation and Design Solutions for Next-Gen Product Development',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;700&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", fontBody.variable, fontHeadline.variable, fontCursive.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
