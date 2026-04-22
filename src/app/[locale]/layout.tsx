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
  const snowOverride = process.env.ENABLE_SNOW;
  const isWinterSeason = (() => {
    const now = new Date();
    const month = now.getMonth() + 1; // 1-12
    return month === 11 || month === 12 || month === 1;
  })();
  const enableSnow = snowOverride === 'true' || (snowOverride !== 'false' && isWinterSeason);

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