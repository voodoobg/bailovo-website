// import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { headers as nextHeaders } from 'next/headers';

// Can be imported from a shared config
const locales = ['bg', 'en'];

export default getRequestConfig(async (context) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { locale, requestLocale } = context as any;
  const maybeLocale = typeof requestLocale === 'function' ? requestLocale() : undefined;
  const headerLocale = nextHeaders().get('x-next-intl-locale');
  console.log('headerLocale', headerLocale);
  const finalLocale = headerLocale ?? locale ?? maybeLocale;
  console.log('getRequestConfig finalLocale:', finalLocale);

  const resolvedLocale = (!finalLocale || !locales.includes(finalLocale as string)) ? 'bg' : finalLocale as string;

  console.log('context keys', Object.keys(context));

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default
  };
}); 