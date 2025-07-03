import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const middleware = createMiddleware({
  locales: ['bg', 'en'],
  defaultLocale: 'bg',
  localePrefix: 'always'
});

export default function (request: NextRequest) {
  console.log('middleware pathname', request.nextUrl.pathname);
  return middleware(request);
};

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)', '/']
}; 