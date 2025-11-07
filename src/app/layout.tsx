import type {Metadata} from 'next';
import './globals.css';
import { Inter, Space_Grotesk, Dancing_Script } from 'next/font/google'
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { FirebaseProvider } from '@/firebase';

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


const title = "DesignFix: CAD Automation & Design Engineering Solutions";
const description = "Expert CAD automation, design engineering, and reverse engineering services. We specialize in SolidWorks, DriveWorks, and custom .NET solutions to accelerate your product development lifecycle.";

export const metadata: Metadata = {
  title: title,
  description: description,
  robots: 'index, follow',
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: 'https://design-fix.vercel.app/', // Replace with your actual domain
    images: [
      {
        url: 'https://design-fix.vercel.app/og-image.png', // Replace with a link to a preview image
        width: 1200,
        height: 630,
        alt: 'DesignFix - CAD Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['https://design-fix.vercel.app/og-image.png'], // Replace with a link to a preview image
  },
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
          <FirebaseProvider>
            {children}
          </FirebaseProvider>
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
