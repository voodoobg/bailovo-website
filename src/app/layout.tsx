import type { Metadata } from "next";
import "./globals.css";
import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Село Байлово - Родина на Елин Пелин",
  description: "Официален сайт на село Байлово, България - родина на големия български писател Елин Пелин",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className={overpass.className}>
      <body className="min-h-screen bg-gradient-to-br from-pastel-blue-light to-white">
        {children}
      </body>
    </html>
  );
}
