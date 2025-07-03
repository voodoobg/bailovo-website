import { useTranslations } from 'next-intl';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Mock data - will be replaced with WordPress API
const mockNews = [
  {
    id: 1,
    title: 'Нова изложба в музея на Елин Пелин',
    excerpt: 'Новата изложба представя непоказвани досега писма и ръкописи на великия писател. Посетителите ще могат да видят автентични документи и снимки от личния архив на семейството.',
    content: 'Подробно съдържание на новината...',
    date: '2024-01-15',
    author: 'Мария Петрова',
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 2,
    title: 'Реставрация на културния център',
    excerpt: 'Започна мащабна реставрация на сградата на културния център в село Байлово. Проектът ще продължи 6 месеца.',
    content: 'Подробно съдържание на новината...',
    date: '2024-01-10',
    author: 'Иван Георгиев',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 3,
    title: 'Литературен конкурс за деца',
    excerpt: 'Организира се конкурс за детски разкази, посветен на творчеството на Елин Пелин.',
    content: 'Подробно съдържание на новината...',
    date: '2024-01-05',
    author: 'Анна Стоянова',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 4,
    title: 'Нов туристически маршрут',
    excerpt: 'Разработен е нов туристически маршрут, свързващ историческите места в селото.',
    content: 'Подробно съдържание на новината...',
    date: '2024-01-01',
    author: 'Димитър Николов',
    image: '/api/placeholder/600/400',
    featured: false
  }
];

export default function NewsPage() {
  const t = useTranslations('news');

  const featuredNews = mockNews.filter(article => article.featured);
  const regularNews = mockNews.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('bg-BG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
            Последни новини и актуална информация от село Байлово
          </p>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary-600 mb-8">Важни новини</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-strong overflow-hidden hover:shadow-strong transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <div className="w-full h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                      <span className="text-secondary-600 font-medium">Изображение</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(article.date)}
                      <User className="w-4 h-4 ml-4 mr-2" />
                      {article.author}
                    </div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link 
                      href={`/bg/news/${article.id}`}
                      className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-medium transition-colors duration-200"
                    >
                      Прочетете повече
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        <div>
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Всички новини</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-soft overflow-hidden hover:shadow-strong transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="w-full h-32 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                    <span className="text-secondary-600 text-sm">Изображение</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(article.date)}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-600 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/bg/news/${article.id}`}
                    className="inline-flex items-center text-secondary-600 hover:text-secondary-700 text-sm font-medium transition-colors duration-200"
                  >
                    Прочетете повече
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Заредете още новини
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
} 