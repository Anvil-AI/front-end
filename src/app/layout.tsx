import type { Metadata } from "next";
import { MuseoModerno, Sometype_Mono } from "next/font/google";
import clsx from 'clsx'
import "./globals.css";
import 'rsuite/dist/rsuite-no-reset.min.css';

const museu = MuseoModerno({
  subsets: ['latin'],
  variable: '--font-museo',
  display: 'swap',
})

const sometype = Sometype_Mono({
  subsets: ['latin'],
  variable: '--font-sometype-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Eva AI",
  description: "Next generation flashcards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_br">
      <head>  
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
      </head>
      <body className={clsx(museu.variable, sometype.variable)}>{children}</body>
    </html>
  );
}
