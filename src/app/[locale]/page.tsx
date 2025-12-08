import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TreePine, BookOpen, Plane } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import NewsEventsWidget from '@/components/NewsEventsWidget';
import DebugPanel from '@/components/DebugPanel';
import VideoPlayer from '@/components/VideoPlayer';

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

      {/* Video Section */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Българското село: Село Байлово' : 'See More About Bailovo'}
            </h2>
          </div>
          <VideoPlayer
            thumbnailSrc="/images/video-thumb.jpg"
            videoId="BPyrWOiwBDE"
            title="Байлово видео"
          />
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

      {/* Chitalishte Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
              {locale === 'bg' ? 'Културен център' : 'Cultural Center'}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              {locale === 'bg' ? 'НЧ "Елин Пелин - 1922"' : 'Community Center "Elin Pelin - 1922"'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'bg' 
                ? 'Сърцето на културния живот в Байлово - място за образование, изкуство и общност'
                : 'The heart of cultural life in Bailovo - a place for education, art, and community'}
            </p>
          </div>

          {/* Bento Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Large featured image */}
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <Image
                src="/images/chitalishte1.jpg"
                alt={locale === 'bg' ? 'Читалище Елин Пелин' : 'Elin Pelin Community Center'}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {locale === 'bg' ? 'Читалището' : 'The Community Center'}
                </h3>
                <p className="text-white/80 text-sm">
                  {locale === 'bg' ? 'Основано 1922 г.' : 'Founded 1922'}
                </p>
              </div>
            </div>

            {/* Top right image */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
              <Image
                src="/images/chitalishte2.jpg"
                alt={locale === 'bg' ? 'Читалище интериор' : 'Community Center interior'}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>

            {/* Second top right image */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
              <Image
                src="/images/chitalishte3.jpg"
                alt={locale === 'bg' ? 'Читалище събития' : 'Community Center events'}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>

            {/* Bottom right wide image */}
            <div className="col-span-2 relative group overflow-hidden rounded-2xl shadow-lg aspect-[2/1]">
              <Image
                src="/images/chitalishte4.jpg"
                alt={locale === 'bg' ? 'Читалище дейности' : 'Community Center activities'}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                <div className="p-6">
                  <p className="text-white font-semibold">
                    {locale === 'bg' ? 'Културни събития' : 'Cultural Events'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent image - full width */}
          <div className="mt-6 relative group overflow-hidden rounded-3xl shadow-xl aspect-[21/9]">
            <Image
              src="/images/chitalishte5.jpg"
              alt={locale === 'bg' ? 'Читалище панорама' : 'Community Center panorama'}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="p-8 md:p-12 max-w-xl">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                  {locale === 'bg' ? 'Място за всички' : 'A Place for Everyone'}
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  {locale === 'bg' 
                    ? 'Библиотека, танцови групи, музикални занимания и много повече'
                    : 'Library, dance groups, music classes, and much more'}
                </p>
                <Link 
                  href={`/${locale}/culture`}
                  className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  {locale === 'bg' ? 'Научете повече' : 'Learn More'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
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