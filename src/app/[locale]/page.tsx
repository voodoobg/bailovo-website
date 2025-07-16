import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, TreePine, BookOpen, Plane } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import NewsEventsWidget from '@/components/NewsEventsWidget';
import DebugPanel from '@/components/DebugPanel';

export default function HomePage() {
  const t = useTranslations('homepage');
  const tNav = useTranslations('navigation');
  const locale = useLocale();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              {t('about.title')}
            </h2>
            <span className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              {t('about.description')}
              <br />
              <br />
              <div className="italic bg-secondary-100 rounded-lg p-8">
                {t('about.description2')}
              </div>
              <div className="italic text-right bg-secondary-100 rounded-lg p-8">
                {t('about.description3')}
              </div>
            </span>
          </div>
        </div>
      </section>

      {/* Services/Highlights Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              {t('highlights.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('highlights.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Museum Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('highlights.museum.title')}
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {t('highlights.museum.description')}
              </p>
              <Link 
                href="/bg/museum" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg transition-all duration-200 group-hover:translate-x-2"
              >
                {tNav('museum')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Tourism Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'bg' ? 'Туризъм в Байлово' : 'Tourism in Bailovo'}
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {locale === 'bg' 
                ? 'Открийте родното място на Елин Пелин и красотата на българската природа'
                : 'Discover the birthplace of Elin Pelin and the beauty of Bulgarian nature'}
              </p>
              <Link 
                href={`/${locale}/tourism`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg transition-all duration-200 group-hover:translate-x-2"
              >
                {tNav('tourism')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Nature Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('highlights.nature.title')}
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {t('highlights.nature.description')}
              </p>
              <Link 
                href={`/${locale}/nature`} 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg transition-all duration-200 group-hover:translate-x-2"
              >
                {tNav('nature')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-secondary-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="text-white">
              <div className="text-5xl font-black mb-4">200+ години</div>
              <p className="text-xl text-secondary-100 text-bold font-bold">{t('stats.history')}</p>
            </div>
            <div className="text-white">
              <div className="text-5xl font-black mb-4">410+</div>
              <p className="text-xl text-secondary-100 font-bold">{t('stats.residents')}</p>
            </div>
            <div className="text-white">
              <div className="text-5xl font-black mb-4">24/7</div>
              <p className="text-xl text-secondary-100 font-bold">{t('stats.community')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Widget */}
      <NewsEventsWidget />

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            {t('cta.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/bg/contact" 
              className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-10 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 shadow-soft hover:shadow-strong transform hover:-translate-y-1 hover:scale-105"
            >
              {tNav('contact')}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link 
              href="/bg/history" 
              className="inline-flex items-center border-2 border-secondary-500 text-white hover:bg-secondary-500 hover:text-white px-10 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {t('cta.learn_more')}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Debug Panel - Only visible in development */}
      <DebugPanel />
    </div>
  );
} 