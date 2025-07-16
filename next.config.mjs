import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    {
      protocol: 'http',
      hostname: 'localhost',
      pathname: '**',
    },
    {
      protocol: 'https',
      hostname: 'bailovo.eu',
      pathname: '**',
    },
    ]
  }
};

export default withNextIntl(nextConfig); 