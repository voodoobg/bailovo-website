'use client';

import { useTranslations } from 'next-intl';
import { Calendar, Clock, MapPin, ArrowRight, Users } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getEvents, getFeaturedEvents } from '@/services/contentService';
import { EventItem } from '@/data/mockData';

export default function EventsPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('events');

  const [featuredEvents, setFeaturedEvents] = useState<EventItem[]>([]);
  const [regularEvents, setRegularEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch featured events and first page of regular events in parallel
        const [featuredData, regularData] = await Promise.all([
          getFeaturedEvents(),
          getEvents(1, 9) // First page with 9 items
        ]);
        
        setFeaturedEvents(featuredData);
        // Filter out featured events from regular events
        const nonFeaturedEvents = regularData.filter(event => !event.featured);
        setRegularEvents(nonFeaturedEvents);
        
        // Check if there are more items to load
        if (regularData.length < 9) {
          setHasMore(false);
        }
        
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const loadMoreEvents = async () => {
    if (loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);
      const nextPage = page + 1;
      const moreEvents = await getEvents(nextPage, 9);
      
      if (moreEvents.length === 0) {
        setHasMore(false);
      } else {
        // Filter out featured events from the additional events
        const nonFeaturedEvents = moreEvents.filter(event => !event.featured);
        setRegularEvents(prev => [...prev, ...nonFeaturedEvents]);
        setPage(nextPage);
        
        if (moreEvents.length < 9) {
          setHasMore(false);
        }
      }
    } catch (err) {
      console.error('Error loading more events:', err);
    } finally {
      setLoadingMore(false);
    }
  };

    const formatDate = (dateString: string) => {
    if (!dateString) return locale === 'bg' ? 'Невалидна дата' : 'Invalid Date';
    
    // Handle different date formats
    let date: Date;
    if (dateString.includes('/')) {
      // Handle DD/MM/YYYY format
      const parts = dateString.split('/');
      if (parts.length === 3) {
        // DD/MM/YYYY format: day, month, year
        date = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
      } else {
        date = new Date(dateString);
      }
    } else if (dateString.includes('-')) {
      // Handle YYYY-MM-DD format
      date = new Date(dateString);
    } else if (dateString.length === 8 && /^\d{8}$/.test(dateString)) {
      // Handle YYYYMMDD format (e.g., "20250709")
      const year = parseInt(dateString.substring(0, 4));
      const month = parseInt(dateString.substring(4, 6)) - 1; // Month is 0-indexed
      const day = parseInt(dateString.substring(6, 8));
      date = new Date(year, month, day);
    } else {
      // Fallback to default Date constructor
      date = new Date(dateString);
    }
    
    // Check if date is valid
    if (isNaN(date.getTime())) return locale === 'bg' ? 'Невалидна дата' : 'Invalid Date';
    
    try {
      return locale === 'bg' 
        ? date.toLocaleDateString('bg-BG', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })
        : date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          });
    } catch {
      return locale === 'bg' ? 'Невалидна дата' : 'Invalid Date';
    }
  };

  const getLocalizedText = (text: string, textEn: string) => {
    return locale === 'bg' ? text : textEn;
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
  };

  const isUpcoming = (dateString: string) => {
    if (!dateString) return false;
    
    // Handle different date formats
    let eventDate: Date;
    if (dateString.includes('/')) {
      // Handle DD/MM/YYYY format
      const parts = dateString.split('/');
      if (parts.length === 3) {
        eventDate = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
      } else {
        eventDate = new Date(dateString);
      }
    } else if (dateString.includes('-')) {
      // Handle YYYY-MM-DD format
      eventDate = new Date(dateString);
    } else if (dateString.length === 8 && /^\d{8}$/.test(dateString)) {
      // Handle YYYYMMDD format (e.g., "20250709")
      const year = parseInt(dateString.substring(0, 4));
      const month = parseInt(dateString.substring(4, 6)) - 1; // Month is 0-indexed
      const day = parseInt(dateString.substring(6, 8));
      eventDate = new Date(year, month, day);
    } else {
      eventDate = new Date(dateString);
    }
    
    // Check if date is valid
    if (isNaN(eventDate.getTime())) return false;
    
    const today = new Date();
    
    // Reset time to compare only dates
    today.setHours(0, 0, 0, 0);
    eventDate.setHours(0, 0, 0, 0);
    
    return eventDate >= today;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
              {t('title')}
            </h1>
            <div className="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'bg' 
                ? 'Предстоящи събития и дейности в село Байлово'
                : 'Upcoming events and activities in Bailovo village'
              }
            </p>
          </div>

          {/* Loading Skeletons */}
          <div className="mb-16">
            <div className="h-8 w-48 bg-gray-200 rounded mb-8 animate-pulse"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-strong overflow-hidden">
                  <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-4">
                      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="h-8 w-48 bg-gray-200 rounded mb-8 animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-soft overflow-hidden">
                  <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
              {t('title')}
            </h1>
            <div className="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
            <p className="text-xl text-red-600 max-w-3xl mx-auto">
              {locale === 'bg' 
                ? 'Възникна грешка при зареждането на събитията'
                : 'Error loading events'
              }
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
            {t('title')}
          </h1>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {locale === 'bg' 
              ? 'Предстоящи събития и дейности в село Байлово'
              : 'Upcoming events and activities in Bailovo village'
            }
          </p>
        </div>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary-600 mb-8">
              {locale === 'bg' ? 'Важни събития' : 'Featured Events'}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event) => (
                <Link 
                  key={event.id} 
                  href={`/${locale}/events/${event.id}`}
                  className="group"
                >
                  <article className="bg-white rounded-lg shadow-strong overflow-hidden hover:shadow-strong hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      {event.image && event.image !== '/images/placeholder-event.jpg' ? (
                        <img 
                          src={event.image} 
                          alt={getLocalizedText(event.title, event.titleEn)}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                          <span className="text-secondary-600 font-medium">
                            {locale === 'bg' ? 'Изображение' : 'Image'}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-semibold">
                            {getLocalizedText(event.category, event.categoryEn)}
                          </span>
                          {isUpcoming(event.date) ? (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                              {locale === 'bg' ? 'Предстоящо' : 'Upcoming'}
                            </span>
                          ) : (
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                              {locale === 'bg' ? 'Приключило' : 'Past Event'}
                            </span>
                          )}
                        </div>
                        {event.ticketPrice && (
                          <span className="text-primary-600 font-semibold">
                            {event.ticketPrice}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-primary-600 mb-4 line-clamp-2 group-hover:text-secondary-600 transition-colors duration-200">
                        {getLocalizedText(event.title, event.titleEn)}
                      </h3>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-3 text-secondary-500" />
                          <span className="font-medium">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-3 text-secondary-500" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-3 text-secondary-500" />
                          <span className="font-medium">{getLocalizedText(event.location, event.locationEn)}</span>
                        </div>
                        {event.maxAttendees && (
                          <div className="flex items-center text-gray-600">
                            <Users className="w-4 h-4 mr-3 text-secondary-500" />
                            <span className="font-medium">
                              {locale === 'bg' ? `До ${event.maxAttendees} участника` : `Up to ${event.maxAttendees} attendees`}
                            </span>
                          </div>
                        )}
                      </div>
                      
                                          <p className="text-gray-600 mb-4 line-clamp-3">
                      {stripHtml(getLocalizedText(event.excerpt, event.excerptEn))}
                    </p>
                      
                      <div className="flex items-center text-secondary-600 group-hover:text-secondary-700 font-medium transition-colors duration-200">
                        {locale === 'bg' ? 'Виж детайли' : 'View Details'}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Events */}
        <div>
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {locale === 'bg' ? 'Всички събития' : 'All Events'}
          </h2>
          
          {regularEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {locale === 'bg' ? 'Няма налични събития' : 'No events available'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularEvents.map((event) => (
                <Link 
                  key={event.id} 
                  href={`/${locale}/events/${event.id}`}
                  className="group"
                >
                  <article className="bg-white rounded-lg shadow-soft overflow-hidden hover:shadow-strong hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      {event.image && event.image !== '/images/placeholder-event.jpg' ? (
                        <img 
                          src={event.image} 
                          alt={getLocalizedText(event.title, event.titleEn)}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                          <span className="text-secondary-600 text-base">
                            {locale === 'bg' ? 'Изображение' : 'Image'}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-semibold">
                            {getLocalizedText(event.category, event.categoryEn)}
                          </span>
                          {isUpcoming(event.date) ? (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                              {locale === 'bg' ? 'Предстоящо' : 'Upcoming'}
                            </span>
                          ) : (
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                              {locale === 'bg' ? 'Приключило' : 'Past Event'}
                            </span>
                          )}
                        </div>
                        {event.ticketPrice && (
                          <span className="text-primary-600 text-base font-semibold">
                            {event.ticketPrice}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-primary-600 mb-4 line-clamp-2 group-hover:text-secondary-600 transition-colors duration-200">
                        {getLocalizedText(event.title, event.titleEn)}
                      </h3>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-5 h-5 mr-3 text-secondary-500" />
                          <span className="text-base">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-5 h-5 mr-3 text-secondary-500" />
                          <span className="text-base">{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-5 h-5 mr-3 text-secondary-500" />
                          <span className="text-base">{getLocalizedText(event.location, event.locationEn)}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-base mb-4 line-clamp-3">
                        {stripHtml(getLocalizedText(event.excerpt, event.excerptEn))}
                      </p>
                      
                      <div className="flex items-center text-secondary-600 group-hover:text-secondary-700 text-base font-medium transition-colors duration-200">
                        {locale === 'bg' ? 'Виж детайли' : 'View Details'}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMoreEvents}
              disabled={loadingMore}
              className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 disabled:bg-secondary-300 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              {loadingMore 
                ? (locale === 'bg' ? 'Зарежда...' : 'Loading...')
                : (locale === 'bg' ? 'Заредете още събития' : 'Load More Events')
              }
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 