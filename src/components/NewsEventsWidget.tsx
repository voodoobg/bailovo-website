'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, MapPin, Newspaper, CalendarDays } from 'lucide-react';
import { useState, useEffect } from 'react';

// Mock data - will be replaced with actual WordPress API calls
const mockNews = [
  {
    id: 1,
    title: 'Нова изложба в музея на Елин Пелин',
    excerpt: 'Новата изложба представя непозвани досега писма и ръкописи на великия писател.',
    date: '2024-01-15',
    category: 'Музей',
    image: '/api/placeholder/300/200'
  },
  {
    id: 2,
    title: 'Реставрация на културния център',
    excerpt: 'Започна мащабна реставрация на сградата на културния център в село Байлово.',
    date: '2024-01-10',
    category: 'Култура',
    image: '/api/placeholder/300/200'
  },
  {
    id: 3,
    title: 'Празник на селото 2024',
    excerpt: 'Подготвяме се за традиционния празник на село Байлово с богата програма.',
    date: '2024-01-05',
    category: 'Събития',
    image: '/api/placeholder/300/200'
  }
];

const mockEvents = [
  {
    id: 1,
    title: 'Празник на селото',
    date: '2024-02-15',
    time: '14:00',
    location: 'Културен център',
    category: 'Традиции'
  },
  {
    id: 2,
    title: 'Литературен четвъртък',
    date: '2024-02-20',
    time: '18:00',
    location: 'Музей Елин Пелин',
    category: 'Литература'
  },
  {
    id: 3,
    title: 'Работилница за деца',
    date: '2024-02-25',
    time: '10:00',
    location: 'Културен център',
    category: 'Образование'
  }
];

export default function NewsEventsWidget() {
  const locale = useLocale();
  const [news] = useState(mockNews);
  const [events] = useState(mockEvents);
  const t = useTranslations('homepage');

  // In the future, this will fetch from WordPress REST API
  useEffect(() => {
    // fetchNewsFromWordPress();
    // fetchEventsFromWordPress();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'bg' ? 'bg-BG' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
            {t('news_events.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('news_events.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* News Section */}
          <div>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{t('news_events.news')}</h3>
              </div>
              <Link 
                href={`/${locale}/news`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors duration-200"
              >
                {t('news_events.view_all')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="space-y-8">
              {news.map((article, index) => (
                <article key={article.id} className={`group ${index === 0 ? 'border-l-4 border-secondary-500 pl-6' : ''}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(article.date)}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {article.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <Link 
                      href={`/${locale}/news/${article.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                    >
                      {locale === 'bg' ? 'Прочетете повече' : 'Read more'}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center">
                  <CalendarDays className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{t('news_events.events')}</h3>
              </div>
              <Link 
                href={`/${locale}/events`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors duration-200"
              >
                {t('news_events.view_all')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={event.id} className={`group ${index === 0 ? 'border-l-4 border-secondary-500 pl-6' : ''}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {event.category}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                      {event.title}
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-3 text-secondary-500" />
                        <span className="font-medium">{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 mr-3 text-secondary-500" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-3 text-secondary-500" />
                        <span className="font-medium">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link 
                href={`/${locale}/events`}
                className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-soft hover:shadow-strong transform hover:-translate-y-1"
              >
                {locale === 'bg' ? 'Виж всички събития' : 'View all events'}
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 