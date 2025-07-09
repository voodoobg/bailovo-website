'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, MapPin, Newspaper, CalendarDays } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getRecentNews, getUpcomingEvents } from '@/services/contentService';
import { NewsItem, EventItem } from '@/data/mockData';

export default function NewsEventsWidget() {
  const locale = useLocale();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations('homepage');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch recent news and upcoming events in parallel
        const [newsData, eventsData] = await Promise.all([
          getRecentNews(3),
          getUpcomingEvents(3)
        ]);
        
        setNews(newsData);
        setEvents(eventsData);
      } catch (err) {
        console.error('Error fetching news and events:', err);
        setError('Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'bg' ? 'bg-BG' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getLocalizedText = (text: string, textEn: string) => {
    return locale === 'bg' ? text : textEn;
  };

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              {t('news_events.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('news_events.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center space-x-4 mb-12">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{t('news_events.news')}</h3>
              </div>
              
              <div className="space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-soft animate-pulse">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-gray-200 rounded-full h-6 w-20"></div>
                      <div className="bg-gray-200 rounded h-4 w-24"></div>
                    </div>
                    <div className="bg-gray-200 rounded h-6 w-3/4 mb-3"></div>
                    <div className="bg-gray-200 rounded h-4 w-full mb-2"></div>
                    <div className="bg-gray-200 rounded h-4 w-2/3"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-4 mb-12">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center">
                  <CalendarDays className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{t('news_events.events')}</h3>
              </div>
              
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-soft animate-pulse">
                    <div className="bg-gray-200 rounded-full h-6 w-20 mb-4"></div>
                    <div className="bg-gray-200 rounded h-6 w-3/4 mb-4"></div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="bg-gray-200 rounded h-5 w-5 mr-3"></div>
                        <div className="bg-gray-200 rounded h-4 w-32"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-gray-200 rounded h-5 w-5 mr-3"></div>
                        <div className="bg-gray-200 rounded h-4 w-20"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-gray-200 rounded h-5 w-5 mr-3"></div>
                        <div className="bg-gray-200 rounded h-4 w-40"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              {t('news_events.title')}
            </h2>
            <p className="text-xl text-red-600 max-w-3xl mx-auto leading-relaxed">
              {locale === 'bg' ? 'Възникна грешка при зареждането на съдържанието' : 'Error loading content'}
            </p>
          </div>
        </div>
      </section>
    );
  }

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
              {news.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {locale === 'bg' ? 'Няма налични новини' : 'No news available'}
                  </p>
                </div>
              ) : (
                news.map((article, index) => (
                  <article key={article.id} className={`group ${index === 0 ? 'border-l-4 border-secondary-500 pl-6' : ''}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {getLocalizedText(article.category, article.categoryEn)}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(article.date)}
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                        {getLocalizedText(article.title, article.titleEn)}
                      </h4>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{
                        __html: getLocalizedText(article.excerpt, article.excerptEn)
                      }}></p>
                      
                      <Link 
                        href={`/${locale}/news/${article.id}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                      >
                        {locale === 'bg' ? 'Прочетете повече' : 'Read more'}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </article>
                ))
              )}
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
              {events.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {locale === 'bg' ? 'Няма предстоящи събития' : 'No upcoming events'}
                  </p>
                </div>
              ) : (
                events.map((event, index) => (
                  <div key={event.id} className={`group ${index === 0 ? 'border-l-4 border-secondary-500 pl-6' : ''}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {getLocalizedText(event.category, event.categoryEn)}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                        {getLocalizedText(event.title, event.titleEn)}
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
                          <span className="font-medium">{getLocalizedText(event.location, event.locationEn)}</span>
                        </div>
                      </div>
                      
                      <Link 
                        href={`/${locale}/events/${event.id}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold mt-4 transition-colors duration-200"
                      >
                        {locale === 'bg' ? 'Виж детайли' : 'View details'}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                ))
              )}
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