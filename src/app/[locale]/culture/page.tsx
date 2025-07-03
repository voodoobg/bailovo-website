import { useTranslations } from 'next-intl';
import { Users, Calendar, Music, Book, Theater, Camera } from 'lucide-react';

export default function CulturePage() {
  const t = useTranslations('culture');

  const activities = [
    {
      icon: Music,
      title: 'Фолклорни събори',
      description: 'Редовни фолклорни събори с традиционни песни и танци от региона.',
      schedule: 'Всяка първа събота от месеца'
    },
    {
      icon: Book,
      title: 'Литературни четения',
      description: 'Четения на произведения от Елин Пелин и други български автори.',
      schedule: 'Всеки четвъртък от 18:00ч'
    },
    {
      icon: Theater,
      title: 'Театрални представления',
      description: 'Детски и възрастни театрални постановки със селски тематика.',
      schedule: 'По случай празници'
    },
    {
      icon: Camera,
      title: 'Фотографски изложби',
      description: 'Изложби, показващи красотата и историята на село Байлово.',
      schedule: 'Ежемесечно'
    },
    {
      icon: Users,
      title: 'Общностни срещи',
      description: 'Срещи за обсъждане на важни въпроси за развитието на селото.',
      schedule: 'Всеки вторник от 19:00ч'
    },
    {
      icon: Calendar,
      title: 'Празнични събития',
      description: 'Организиране на традиционни български празници и фестивали.',
      schedule: 'По календар'
    }
  ];

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
            {t('description')}
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-strong p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">За културния център</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Културният център на село Байлово е сърцето на общностния живот в 
                  нашето село. Тук се провеждат разнообразни културни дейности, които 
                  съхраняват и развиват местните традиции.
                </p>
                <p className="mb-4">
                  Центърът разполага с модерна зала за 150 места, библиотека с богата 
                  колекция от български и световна литература, както и изложбени 
                  пространства за местни и гостуващи художници.
                </p>
                <p>
                  Нашата мисия е да запазим културното наследство на Байлово и да 
                  предоставим платформа за творческо изразяване на всички жители.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">500+</h3>
              <p className="text-gray-600">Участници годишно</p>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary-600 text-center mb-12">
            Културни дейности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-soft p-6 hover:shadow-strong transition-shadow duration-300">
                <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mb-4">
                  <activity.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {activity.description}
                </p>
                <div className="bg-secondary-100 rounded-lg p-3">
                  <p className="text-secondary-700 text-sm font-medium">
                    📅 {activity.schedule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Section */}
        <div className="bg-secondary-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-primary-600 text-center mb-8">
            Съоръжения и зали
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <Theater className="w-8 h-8 text-secondary-500 mx-auto mb-3" />
              <h3 className="font-semibold text-primary-600 mb-2">Главна зала</h3>
              <p className="text-gray-600 text-sm">150 места</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <Book className="w-8 h-8 text-secondary-500 mx-auto mb-3" />
              <h3 className="font-semibold text-primary-600 mb-2">Библиотека</h3>
              <p className="text-gray-600 text-sm">5000+ книги</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <Camera className="w-8 h-8 text-secondary-500 mx-auto mb-3" />
              <h3 className="font-semibold text-primary-600 mb-2">Изложбена зала</h3>
              <p className="text-gray-600 text-sm">100 кв.м</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <Music className="w-8 h-8 text-secondary-500 mx-auto mb-3" />
              <h3 className="font-semibold text-primary-600 mb-2">Репетиционна зала</h3>
              <p className="text-gray-600 text-sm">30 места</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-strong p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-primary-600 mb-6">
                Работно време и контакти
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-secondary-500" />
                  <div>
                    <p className="font-medium text-primary-600">Понеделник - Петък</p>
                    <p className="text-gray-600">9:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-secondary-500" />
                  <div>
                    <p className="font-medium text-primary-600">Събота - Неделя</p>
                    <p className="text-gray-600">10:00 - 16:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-secondary-500" />
                  <div>
                    <p className="font-medium text-primary-600">Директор</p>
                    <p className="text-gray-600">Мария Петрова</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-600 mb-4">
                Присъединете се към нас
              </h3>
              <p className="text-gray-600 mb-6">
                Ако искате да участвате в някоя от нашите дейности или имате 
                предложения за нови културни инициативи, ще се радваме да се 
                срещнем с вас.
              </p>
              <button className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                <Users className="w-5 h-5 mr-2" />
                Свържете се с нас
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 