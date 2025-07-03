import { useTranslations } from 'next-intl';
import { Calendar, Clock, MapPin, Users, Tag } from 'lucide-react';

// Mock data - will be replaced with WordPress API
const mockEvents = [
  {
    id: 1,
    title: 'Празник на село Байлово',
    description: 'Традиционният годишен празник на селото с фолклорна програма, изложби и кулинарни изкушения.',
    date: '2024-07-15',
    time: '14:00',
    endTime: '22:00',
    location: 'Централен площад',
    category: 'Празници',
    organizer: 'Кметство село Байлово',
    price: 'Безплатно',
    status: 'upcoming',
    featured: true
  },
  {
    id: 2,
    title: 'Литературен четвъртък в музея',
    description: 'Месечна среща за любителите на литературата с четене на творби от Елин Пелин.',
    date: '2024-02-20',
    time: '18:00',
    endTime: '20:00',
    location: 'Музей Елин Пелин',
    category: 'Култура',
    organizer: 'Музей Елин Пелин',
    price: '5 лв.',
    status: 'upcoming',
    featured: false
  },
  {
    id: 3,
    title: 'Детски театър "Пижо и Пендо"',
    description: 'Представление за деца, базирано на прочутата приказка от Елин Пелин.',
    date: '2024-03-10',
    time: '15:00',
    endTime: '16:30',
    location: 'Културен център',
    category: 'Театър',
    organizer: 'Културен център Байлово',
    price: '10 лв.',
    status: 'upcoming',
    featured: false
  },
  {
    id: 4,
    title: 'Изложба "Байлово през вековете"',
    description: 'Фотографска изложба, показваща историческото развитие на селото.',
    date: '2024-01-15',
    time: '10:00',
    endTime: '18:00',
    location: 'Музей Елин Пелин',
    category: 'Изложби',
    organizer: 'Музей Елин Пелин',
    price: 'Безплатно',
    status: 'past',
    featured: false
  }
];

export default function EventsPage() {
  const t = useTranslations('events');

  const upcomingEvents = mockEvents.filter(event => event.status === 'upcoming');
  const pastEvents = mockEvents.filter(event => event.status === 'past');
  const featuredEvents = upcomingEvents.filter(event => event.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('bg-BG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  const formatTime = (timeString: string) => {
    return timeString;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Празници': 'bg-red-100 text-red-800',
      'Култура': 'bg-blue-100 text-blue-800',
      'Театър': 'bg-purple-100 text-purple-800',
      'Изложби': 'bg-green-100 text-green-800',
      'default': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || colors.default;
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
            Открийте културните събития и празници в село Байлово
          </p>
        </div>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary-600 mb-8">Специални събития</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event) => (
                <div key={event.id} className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg shadow-strong overflow-hidden text-white">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-white text-secondary-600`}>
                        {event.category}
                      </span>
                      <span className="text-secondary-100 text-sm">{event.price}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <p className="text-secondary-100 mb-6 leading-relaxed">{event.description}</p>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-3" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-3" />
                        {formatTime(event.time)} - {formatTime(event.endTime)}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-3" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-3" />
                        {event.organizer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary-600 mb-8">{t('upcoming')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.filter(e => !e.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-soft hover:shadow-strong transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                      <Tag className="w-3 h-3 inline mr-1" />
                      {event.category}
                    </span>
                    <span className="text-secondary-600 font-medium text-sm">{event.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary-600 mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-secondary-500" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-secondary-500" />
                      {formatTime(event.time)} - {formatTime(event.endTime)}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-secondary-500" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary-600 mb-8">Минали събития</h2>
          <div className="space-y-4">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)} mr-3`}>
                        {event.category}
                      </span>
                      <span className="text-sm text-gray-500">{formatDate(event.date)}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-primary-600 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {event.organizer}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-4">
                    <span className="text-secondary-600 font-medium">{event.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Categories */}
        <div className="bg-white rounded-lg shadow-strong p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6 text-center">
            Категории събития
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Празници', 'Култура', 'Театър', 'Изложби'].map((category) => (
              <div key={category} className="text-center p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors duration-200">
                <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Tag className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-primary-600">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 