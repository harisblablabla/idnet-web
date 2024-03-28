import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import './globals.css'
import FeedbackScript from '../utils/ScriptFeedback';

declare global {
  interface Window {
    formsapp: any;
  }
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IDEANET',
  description: 'Layanan Internet dan Infrastruktur Digital untuk individu dan perusahaan',
}

export default function RootLayout({
  children, params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
    <html lang={locale}>
      <FeedbackScript />
      <head><link rel="icon" href="/favicon.ico" /></head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
