'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const locale = useLocale();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
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
            </div>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-md">
              {locale === 'bg' 
                ? 'Родното място на великия български писател Елин Пелин. Открийте историята и красотата на нашето село.'
                : 'Birthplace of the great Bulgarian writer Elin Pelin. Discover the history and beauty of our village.'
              }
            </p>
          </div>

          {/* Links & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Navigation Links */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white">
                {locale === 'bg' ? 'Навигация' : 'Navigation'}
              </h3>
              <div className="space-y-4">
                <Link 
                  href={`/${locale}/history`} 
                  className="block text-gray-300 hover:text-white text-lg transition-colors duration-200"
                >
                  {locale === 'bg' ? 'История' : 'History'}
                </Link>
                <Link 
                  href={`/${locale}/museum`} 
                  className="block text-gray-300 hover:text-white text-lg transition-colors duration-200"
                >
                  {locale === 'bg' ? 'Музей Елин Пелин' : 'Elin Pelin Museum'}
                </Link>
                <Link 
                  href={`/${locale}/culture`} 
                  className="block text-gray-300 hover:text-white text-lg transition-colors duration-200"
                >
                  {locale === 'bg' ? 'НЧ „Елин Пелин – 1922”' : 'Cultural Center'}
                </Link>
                <Link 
                  href={`/${locale}/events`} 
                  className="block text-gray-300 hover:text-white text-lg transition-colors duration-200"
                >
                  {locale === 'bg' ? 'Събития' : 'Events'}
                </Link>
                <Link 
                  href={`/${locale}/news`} 
                  className="block text-gray-300 hover:text-white text-lg transition-colors duration-200"
                >
                  {locale === 'bg' ? 'Новини' : 'News'}
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white">
                {locale === 'bg' ? 'Контакти' : 'Contact'}
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {locale === 'bg' ? 'Село Байлово, Софийска област, България' : 'Bailovo Village, Sofia Region, Bulgaria'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                  <span className="text-gray-300 text-lg"><a href="tel:+359876734728">+359 876 734 728</a></span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                  <span className="text-gray-300 text-lg"><a href="mailto:info@bailovo.eu">info@bailovo.eu</a></span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                  <span className="text-gray-300 text-lg"><a href="https://www.bailovo.eu">www.bailovo.eu</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p className="text-gray-400 text-lg">
            © 2025 Село Байлово. All rights reserved | <a href="https://www.svet.dev" className="text-gray-400 hover:text-white transition-colors duration-200">Svet.dev</a>
          </p>
          <div className="flex items-center space-x-6">
            <Link 
              href={`/${locale === 'bg' ? 'en' : 'bg'}`}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-semibold">{locale === 'bg' ? 'EN' : 'BG'}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 