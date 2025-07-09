'use client';

import { useTranslations } from 'next-intl';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getNews, getFeaturedNews } from '@/services/contentService';
import { NewsItem } from '@/data/mockData';

export default function NewsPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('news');

  const [featuredNews, setFeaturedNews] = useState<NewsItem[]>([]);
  const [regularNews, setRegularNews] = useState<NewsItem[]>([]);
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
        
        // Fetch featured news and first page of regular news in parallel
        const [featuredData, regularData] = await Promise.all([
          getFeaturedNews(),
          getNews(1, 9) // First page with 9 items
        ]);
        
        setFeaturedNews(featuredData);
        // Filter out featured news from regular news
        const nonFeaturedNews = regularData.filter(article => !article.featured);
        setRegularNews(nonFeaturedNews);
        
        // Check if there are more items to load
        if (regularData.length < 9) {
          setHasMore(false);
        }
        
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load news');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const loadMoreNews = async () => {
    if (loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);
      const nextPage = page + 1;
      const moreNews = await getNews(nextPage, 9);
      
      if (moreNews.length === 0) {
        setHasMore(false);
      } else {
        // Filter out featured news from the additional news
        const nonFeaturedNews = moreNews.filter(article => !article.featured);
        setRegularNews(prev => [...prev, ...nonFeaturedNews]);
        setPage(nextPage);
        
        if (moreNews.length < 9) {
          setHasMore(false);
        }
      }
    } catch (err) {
      console.error('Error loading more news:', err);
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

  const preserveFormattingHtml = (html: string) => {
    // List of allowed HTML tags for formatting
    const allowedTags = [
      'p', 'br', 'strong', 'b', 'em', 'i', 'u', 'span',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li',
      'a', 'blockquote'
    ];
    
    // Store allowed tags temporarily
    const preservedTags: string[] = [];
    
    // Create regex pattern for allowed tags
    const allowedTagsPattern = allowedTags.join('|');
    const allowedTagRegex = new RegExp(`<(/?)\\s*(${allowedTagsPattern})(?:\\s[^>]*)?\\s*/?>`, 'gi');
    
    // Replace allowed tags with placeholders and store them
    let cleanHtml = html.replace(allowedTagRegex, (match) => {
      const index = preservedTags.length;
      preservedTags.push(match);
      return `__PRESERVED_TAG_${index}__`;
    });
    
    // Remove all remaining HTML tags (these are not allowed)
    cleanHtml = cleanHtml.replace(/<[^>]*>/g, '');
    
    // Restore the preserved tags
    preservedTags.forEach((tag, index) => {
      cleanHtml = cleanHtml.replace(`__PRESERVED_TAG_${index}__`, tag);
    });
    
    // Clean up HTML entities
    cleanHtml = cleanHtml
      .replace(/&nbsp;/g, '<br>')  // Convert &nbsp; to line breaks
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&hellip;/g, '...')
      .replace(/&rsquo;/g, "'")
      .replace(/&lsquo;/g, "'")
      .replace(/&rdquo;/g, '"')
      .replace(/&ldquo;/g, '"')
      .replace(/&ndash;/g, '–')
      .replace(/&mdash;/g, '—')
      // Clean up multiple spaces and normalize whitespace
      .replace(/\s+/g, ' ')
      .trim();
      
    return cleanHtml;
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
                ? 'Последни новини и актуална информация от село Байлово'
                : 'Latest news and current information from Bailovo village'
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
                ? 'Възникна грешка при зареждането на новините'
                : 'Error loading news'
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
              ? 'Последни новини и актуална информация от село Байлово'
              : 'Latest news and current information from Bailovo village'
            }
          </p>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary-600 mb-8">
              {locale === 'bg' ? 'Важни новини' : 'Featured News'}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article) => (
                <Link 
                  key={article.id} 
                  href={`/${locale}/news/${article.id}`}
                  className="group"
                >
                  <article className="bg-white rounded-lg shadow-strong overflow-hidden hover:shadow-strong hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      {article.image && article.image !== '/images/placeholder-news.jpg' ? (
                        <img 
                          src={article.image} 
                          alt={getLocalizedText(article.title, article.titleEn)}
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
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(article.date)}
                        <User className="w-4 h-4 ml-4 mr-2" />
                        {getLocalizedText(article.author, article.authorEn)}
                      </div>
                      <h3 className="text-xl font-semibold text-primary-600 mb-3 line-clamp-2 group-hover:text-secondary-600 transition-colors duration-200">
                        {getLocalizedText(article.title, article.titleEn)}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3" dangerouslySetInnerHTML={{
                        __html: preserveFormattingHtml(getLocalizedText(article.excerpt, article.excerptEn))
                      }}></p>
                      <div className="flex items-center text-secondary-600 group-hover:text-secondary-700 font-medium transition-colors duration-200">
                        {locale === 'bg' ? 'Прочетете повече' : 'Read more'}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        <div>
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {locale === 'bg' ? 'Всички новини' : 'All News'}
          </h2>
          
          {regularNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {locale === 'bg' ? 'Няма налични новини' : 'No news available'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularNews.map((article) => (
                <Link 
                  key={article.id} 
                  href={`/${locale}/news/${article.id}`}
                  className="group"
                >
                  <article className="bg-white rounded-lg shadow-soft overflow-hidden hover:shadow-strong hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      {article.image && article.image !== '/images/placeholder-news.jpg' ? (
                        <img 
                          src={article.image} 
                          alt={getLocalizedText(article.title, article.titleEn)}
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
                      <div className="flex items-center text-base text-gray-500 mb-3">
                        <Calendar className="w-5 h-5 mr-2" />
                        {formatDate(article.date)}
                      </div>
                      <h3 className="text-xl font-semibold text-primary-600 mb-4 line-clamp-2 group-hover:text-secondary-600 transition-colors duration-200">
                        {getLocalizedText(article.title, article.titleEn)}
                      </h3>
                                             <p className="text-gray-600 text-base mb-4 line-clamp-3" dangerouslySetInnerHTML={{
                         __html: preserveFormattingHtml(getLocalizedText(article.excerpt, article.excerptEn))
                       }}></p>
                      <div className="flex items-center text-secondary-600 group-hover:text-secondary-700 text-base font-medium transition-colors duration-200">
                        {locale === 'bg' ? 'Прочетете повече' : 'Read more'}
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
              onClick={loadMoreNews}
              disabled={loadingMore}
              className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 disabled:bg-secondary-300 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              {loadingMore 
                ? (locale === 'bg' ? 'Зарежда...' : 'Loading...')
                : (locale === 'bg' ? 'Заредете още новини' : 'Load More News')
              }
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 