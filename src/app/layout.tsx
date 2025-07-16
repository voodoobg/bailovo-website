import type { Metadata } from "next";
import "./globals.css";
import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Село Байлово - Родина на Елин Пелин",
  description: "Официален сайт на село Байлово, България - родина на големия български писател Елин Пелин",
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    shortcut: '/favicon.png',
    apple: [
      {
        url: '/favicon.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className={overpass.className}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-pastel-blue-light to-white">
        {children}
      </body>
    </html>
  );
}
