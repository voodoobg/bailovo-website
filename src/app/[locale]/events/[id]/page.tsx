import { notFound } from 'next/navigation';
import { getEventById } from '@/services/contentService';
import { Calendar, Clock, MapPin, ArrowLeft, Users, DollarSign, Tag } from 'lucide-react';
import Link from 'next/link';

interface EventDetailPageProps {
  params: Promise<{ id: string; locale: string }>;
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { id, locale } = await params;
  const eventItem = await getEventById(id);

  if (!eventItem) {
    notFound();
  }

  const title = locale === 'bg' ? eventItem.title : eventItem.titleEn;
  const content = locale === 'bg' ? eventItem.content : eventItem.contentEn;
  const location = locale === 'bg' ? eventItem.location : eventItem.locationEn;
  const category = locale === 'bg' ? eventItem.category : eventItem.categoryEn;

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
            day: 'numeric',
            weekday: 'long'
          })
        : date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
          });
    } catch {
      return locale === 'bg' ? 'Невалидна дата' : 'Invalid Date';
    }
  };

  const isUpcoming = (() => {
    if (!eventItem.date) return false;
    
    // Handle different date formats
    let eventDate: Date;
    const dateString = eventItem.date;
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
  })();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link 
          href={`/${locale}/events`}
          className="inline-flex items-center text-secondary-500 hover:text-secondary-600 font-medium transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {locale === 'bg' ? 'Назад към събитията' : 'Back to Events'}
        </Link>

        {/* Event Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
              <Tag className="w-3 h-3 inline mr-1" />
              {category}
            </span>
            {isUpcoming ? (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {locale === 'bg' ? 'Предстоящо' : 'Upcoming'}
              </span>
            ) : (
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {locale === 'bg' ? 'Приключило' : 'Past Event'}
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6 leading-tight">
            {title}
          </h1>
        </div>

        {/* Featured Image */}
        {eventItem.image && eventItem.image !== '/images/placeholder-event.jpg' && (
          <div className="mb-8">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-strong">
              <img 
                src={eventItem.image} 
                alt={title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        )}

        {/* Event Details */}
        <div className="bg-white rounded-lg shadow-strong p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-primary-600 mb-6">
                {locale === 'bg' ? 'Детайли за събитието' : 'Event Details'}
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-secondary-500" />
                  <div>
                    <span className="font-medium text-primary-600 text-base">{formatDate(eventItem.date)}</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-secondary-500" />
                  <span className="font-medium text-primary-600 text-base">{eventItem.time}</span>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-secondary-500" />
                  <span className="font-medium text-primary-600 text-base">{location}</span>
                </div>
                
                {eventItem.ticketPrice && (
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="font-medium text-primary-600 text-base">{eventItem.ticketPrice}</span>
                  </div>
                )}
                
                {eventItem.maxAttendees && (
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="font-medium text-primary-600 text-base">
                      {locale === 'bg' 
                        ? `До ${eventItem.maxAttendees} участника`
                        : `Up to ${eventItem.maxAttendees} attendees`
                      }
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary-600 mb-6">
                {locale === 'bg' ? 'Местоположение' : 'Location'}
              </h2>
              
              <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-secondary-500 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">{location}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {locale === 'bg' ? 'Карта скоро' : 'Map coming soon'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Event Description */}
          <div>
            <h2 className="text-2xl font-bold text-primary-600 mb-6">
              {locale === 'bg' ? 'Описание' : 'Description'}
            </h2>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
              style={{
                lineHeight: '1.8',
                fontSize: '1.1rem',
                color: '#374151'
              }}
            />
          </div>
        </div>

        {/* Related Events */}
        <div className="bg-secondary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {locale === 'bg' ? 'Други събития' : 'Other Events'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <h3 className="font-semibold text-primary-600 mb-2">
                {locale === 'bg' ? 'Всички събития' : 'All Events'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'bg' 
                  ? 'Разгледайте всички предстоящи събития в село Байлово'
                  : 'Check out all upcoming events in Bailovo village'
                }
              </p>
              <Link 
                href={`/${locale}/events`}
                className="text-secondary-500 hover:text-secondary-600 text-sm font-medium mt-2 inline-block"
              >
                {locale === 'bg' ? 'Виж всички →' : 'View all →'}
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <h3 className="font-semibold text-primary-600 mb-2">
                {locale === 'bg' ? 'НЧ „Елин Пелин – 1922”' : 'Cultural Center'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'bg' 
                  ? 'Научете повече за НЧ „Елин Пелин – 1922” в село Байлово'
                  : 'Learn more about the cultural center in Bailovo village'
                }
              </p>
              <Link 
                href={`/${locale}/culture`}
                className="text-secondary-500 hover:text-secondary-600 text-sm font-medium mt-2 inline-block"
              >
                {locale === 'bg' ? 'Научете повече →' : 'Learn more →'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 