import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Overpass } from 'next/font/google';
import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Snow from '@/components/Snow';

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
  const enableSnow = process.env.ENABLE_SNOW === 'true';

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className={`flex flex-col min-h-screen ${overpass.className}`}>
        {enableSnow && <Snow />}
        <Navigation enableSnow={enableSnow} />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer enableSnow={enableSnow} />
      </div>
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return [{ locale: 'bg' }, { locale: 'en' }];
} 