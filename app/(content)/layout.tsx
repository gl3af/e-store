import '@/app/globals.css';

import React from "react";

import type { Metadata } from 'next';

import {Providers} from "@/store/provider";

import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {Toaster} from "@/components/ui/toaster";

import { Montserrat } from 'next/font/google';
import {cn} from "@/lib/utils";
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'eStore',
  description: 'eStore: buy anything you need',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full ${montserrat.className}`}>
        <Toaster />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <div className="grid grid-rows-[auto_1fr_auto] min-h-full">
              <Header />
              {children}
              <Footer />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
