'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: NavigationItem[];
}

interface NavigationProps {
  enableSnow?: boolean;
}

export default function Navigation({ enableSnow = false }: NavigationProps) {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const logoSrc = enableSnow ? '/logo3-winter.png' : '/logo3.png';

  const navigation: NavigationItem[] = [
    { name: t('home'), href: `/${locale}` },
    { name: t('history'), href: `/${locale}/history` },
    { name: t('culture'), href: `/${locale}/culture` },
    { name: t('museum'), href: `/${locale}/museum` },
    { 
      name: t('attractions'), 
      href: '#', 
      dropdown: [
        { name: t('church'), href: `/${locale}/church` },
        { name: t('chapel'), href: `/${locale}/chapel` },
        { name: t('nature'), href: `/${locale}/nature` },
        { name: t('tourism'), href: `/${locale}/tourism` },
      ]
    },
    { 
      name: t('information'), 
      href: '#', 
      dropdown: [
        { name: t('news'), href: `/${locale}/news` },
        { name: t('events'), href: `/${locale}/events` },
        { name: t('mayoralty'), href: `/${locale}/mayoralty` },
        // { name: t('establishments'), href: `/${locale}/establishments` },
      ]
    },
    { name: t('gallery'), href: `/${locale}/gallery` },
  ];

  const otherLocale = locale === 'bg' ? 'en' : 'bg';
  const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const isDropdownItemActive = (item: NavigationItem) => {
    if (item.dropdown) {
      return item.dropdown.some((subItem: NavigationItem) => pathname === subItem.href);
    }
    return pathname === item.href;
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex mt-3 items-center space-x-3 group">
            <div className="relative w-[250px] h-16 transform group-hover:scale-105 transition-transform duration-200">
              <Image
                src={logoSrc}
                alt="с. Байлово"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => {
              const isActive = isDropdownItemActive(item);
              
              if (item.dropdown) {
                const isDropdownOpen = openDropdown === item.name;
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 relative font-medium text-lg transition-colors duration-200 ${
                        isActive 
                          ? 'text-primary-600' 
                          : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`} />
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600 rounded-full"></span>
                      )}
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 pt-1 w-52 z-50">
                        <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-3 text-base font-medium transition-colors duration-200 ${
                                pathname === subItem.href
                                  ? 'text-primary-600 bg-primary-50'
                                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              
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
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/people/%D0%91%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%BE/100068910189307/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@bailovo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

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
                const isActive = isDropdownItemActive(item);
                
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="space-y-2">
                      <div
                        className={`text-xl font-medium transition-colors duration-200 ${
                          isActive 
                            ? 'text-primary-600' 
                            : 'text-gray-700'
                        }`}
                      >
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block text-lg font-medium transition-colors duration-200 ${
                              pathname === subItem.href
                                ? 'text-primary-600'
                                : 'text-gray-600 hover:text-primary-600'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                
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
                {/* Social Media Icons - Mobile */}
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.facebook.com/people/%D0%91%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%BE/100068910189307/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@bailovo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                    aria-label="YouTube"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>

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