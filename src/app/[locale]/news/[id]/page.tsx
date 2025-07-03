import { notFound } from 'next/navigation';
import { getNewsById } from '@/services/contentService';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface NewsDetailPageProps {
  params: Promise<{ id: string; locale: string }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id, locale } = await params;
  const newsItem = await getNewsById(id);

  if (!newsItem) {
    notFound();
  }

  const title = locale === 'bg' ? newsItem.title : newsItem.titleEn;
  const content = locale === 'bg' ? newsItem.content : newsItem.contentEn;
  const author = locale === 'bg' ? newsItem.author : newsItem.authorEn;
  const category = locale === 'bg' ? newsItem.category : newsItem.categoryEn;

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link 
          href={`/${locale}/news`}
          className="inline-flex items-center text-secondary-500 hover:text-secondary-600 font-medium transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {locale === 'bg' ? 'Назад към новините' : 'Back to News'}
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6 leading-tight">
            {title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-secondary-500" />
              <span>{formatDate(newsItem.date)}</span>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2 text-secondary-500" />
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="w-5 h-5 mr-2 text-secondary-500" />
              <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {newsItem.image && newsItem.image !== '/images/placeholder-news.jpg' && (
          <div className="mb-8">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-strong">
              <img 
                src={newsItem.image} 
                alt={title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-strong p-8 mb-8">
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

        {/* Related Articles */}
        <div className="bg-secondary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {locale === 'bg' ? 'Други' : 'Other'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* This would be populated with related articles */}
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <h3 className="font-semibold text-primary-600 mb-2">
                {locale === 'bg' ? 'Предстоящи събития' : 'Upcoming Events'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'bg' 
                  ? 'Разгледайте предстоящите събития в село Байлово'
                  : 'Check out upcoming events in Bailovo village'
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
                {locale === 'bg' ? 'Музей Елин Пелин' : 'Elin Pelin Museum'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'bg' 
                  ? 'Посетете музея на великия български писател'
                  : 'Visit the museum of the great Bulgarian writer'
                }
              </p>
              <Link 
                href={`/${locale}/museum`}
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