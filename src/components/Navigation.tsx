'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('history'), href: `/${locale}/history` },
    { name: t('culture'), href: `/${locale}/culture` },
    { name: t('museum'), href: `/${locale}/museum` },
    { name: t('news'), href: `/${locale}/news` },
    { name: t('events'), href: `/${locale}/events` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const otherLocale = locale === 'bg' ? 'en' : 'bg';
  const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex mt-3 items-center space-x-3 group">
            <div className="relative w-[250px] h-12 transform group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo3.png"
                alt="с. Байлово"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium text-lg transition-colors duration-200 ${
                    isActive 
                      ? 'text-primary-600' 
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Switcher */}
            <Link
              href={switchLocalePath}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium text-lg transition-colors duration-200"
            >
              <Globe className="w-5 h-5" />
              <span className="uppercase font-semibold">{otherLocale}</span>
            </Link>

            {/* CTA Button */}
            <Link
              href={`/${locale}/contact`}
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('contact')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg">
            <div className="px-6 py-8 space-y-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-xl font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-primary-600' 
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <Link
                  href={switchLocalePath}
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 font-medium text-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Globe className="w-6 h-6" />
                  <span className="uppercase font-semibold">{otherLocale}</span>
                </Link>

                <Link
                  href={`/${locale}/contact`}
                  className="block w-full bg-secondary-500 hover:bg-secondary-600 text-white text-center px-6 py-4 rounded-lg font-semibold text-xl transition-all duration-200 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('contact')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 