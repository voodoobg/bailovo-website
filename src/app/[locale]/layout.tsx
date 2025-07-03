import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Overpass } from 'next/font/google';
import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const overpass = Overpass({ subsets: ['latin', 'cyrillic'] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className={`flex flex-col min-h-screen ${overpass.className}`}>
        <Navigation />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return [{ locale: 'bg' }, { locale: 'en' }];
} 