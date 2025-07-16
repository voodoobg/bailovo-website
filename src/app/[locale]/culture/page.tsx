'use client';

import { useTranslations } from 'next-intl';
import { Users, Calendar, Music, Book, Theater, Camera, Globe, Heart, Star, Trophy, Baby, User } from 'lucide-react';

export default function CulturePage() {
  const t = useTranslations('culture');

  const services = [
    {
      icon: Book,
      title: t('services.library.title'),
      description: t('services.library.description')
    },
    {
      icon: Globe,
      title: t('services.information.title'),
      description: t('services.information.description')
    },
    {
      icon: Camera,
      title: t('services.events.title'),
      description: t('services.events.description')
    },
    {
      icon: Theater,
      title: t('services.theater.title'),
      description: t('services.theater.description')
    },
    {
      icon: Music,
      title: t('services.folklore.title'),
      description: t('services.folklore.description')
    },
    {
      icon: Trophy,
      title: t('services.festivals.title'),
      description: t('services.festivals.description')
    }
  ];

  const historyTimeline = [
    {
      year: '1922',
      title: t('timeline.1922.title'),
      description: t('timeline.1922.description')
    },
    {
      year: '1922-1928',
      title: t('timeline.1922-1928.title'),
      description: t('timeline.1922-1928.description')
    },
    {
      year: '1895-1928',
      title: t('timeline.1895-1928.title'),
      description: t('timeline.1895-1928.description')
    },
    {
      year: '1940s',
      title: t('timeline.1940s.title'),
      description: t('timeline.1940s.description')
    },
    {
      year: '1944-1950',
      title: t('timeline.1944-1950.title'),
      description: t('timeline.1944-1950.description')
    },
    {
      year: '1950',
      title: t('timeline.1950.title'),
      description: t('timeline.1950.description')
    },
    {
      year: '1961',
      title: t('timeline.1961.title'),
      description: t('timeline.1961.description')
    },
    {
      year: '1960-1970',
      title: t('timeline.1960-1970.title'),
      description: t('timeline.1960-1970.description')
    },
    {
      year: '1977',
      title: t('timeline.1977.title'),
      description: t('timeline.1977.description')
    }
  ];

  const currentActivities = [
    {
      icon: Users,
      title: t('current_activities.community.title'),
      description: t('current_activities.community.description')
    },
    {
      icon: Calendar,
      title: t('current_activities.holidays.title'),
      description: t('current_activities.holidays.description')
    },
    {
      icon: Heart,
      title: t('current_activities.clubs.title'),
      description: t('current_activities.clubs.description')
    },
    {
      icon: Star,
      title: t('current_activities.amateur_arts.title'),
      description: t('current_activities.amateur_arts.description')
    }
  ];

  const teamStructure = [
    // First row
    {
      type: 'members',
      members: [
        { name: 'Илиана Димитрова Илиева', position: 'Секретар' },
        { name: 'Красимира Христова Николова', position: 'Библиотекар' },
        { name: 'Иванка Спасова Димитрова', position: 'Чистач/хигиенист' }
      ]
    },
    // Second row - section header
    {
      type: 'header',
      title: 'board_title'
    },
    // Third row
    {
      type: 'members',
      members: [
        { name: 'Михайл Дамянов Михайлов', position: 'Председател' }
      ]
    },
    // Fourth row
    {
      type: 'members',
      members: [
        { name: 'Христина Спасова Иванова', position: 'Член' },
        { name: 'Ваньо Петров Харалампиев', position: 'Член' },
        { name: 'Цветанка Петрова Маламова', position: 'Член' },
        { name: 'Цветанка Стоилова Николова', position: 'Член' }
      ]
    },
    // Fifth row - section header
    {
      type: 'header',
      title: 'audit_commission_title'
    },
    // Sixth row
    {
      type: 'members',
      members: [
        { name: 'Милена Петрова Божкова – Вълкова', position: 'Председател' }
      ]
    },
    // Seventh row
    {
      type: 'members',
      members: [
        { name: 'Спас Петров Спасов', position: 'Член' },
        { name: 'Боряна Илиева Петрова', position: 'Член' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-primary-600 mb-6">
            {t('hero_title')}
          </h1>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('hero_description')}
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary-600 text-center mb-12">
            {t('services_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-2xl shadow-strong p-8 mb-16">
          <h2 className="text-3xl font-bold text-primary-600 text-center mb-12">
            {t('history_title')}
          </h2>
          <div className="space-y-8">
            {historyTimeline.map((period, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{period.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">
                    {period.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {period.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Activity Section */}
        <div className="bg-secondary-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-primary-600 mb-6">{t('main_activity_title')}</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              {t('main_activity_content1')}
            </p>
            <p className="mb-4">
              {t('main_activity_content2')}
            </p>
            <p className="mb-4">
              {t('main_activity_content3')}
            </p>
            <p className="mb-4">
              {t('main_activity_content4')}
            </p>
            <p>
              {t('main_activity_content5')}
            </p>
          </div>
        </div>

        {/* Memorial House Information */}
        <div className="bg-gradient-to-r from-secondary-100 to-secondary-200 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">
                {t('memorial_house_title')}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {t('memorial_house_description1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('memorial_house_description2')}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">
                {t('facilities_title')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Theater className="w-5 h-5 text-secondary-500" />
                  <span className="text-gray-700">
                    {t('facilities.cinema')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Book className="w-5 h-5 text-secondary-500" />
                  <span className="text-gray-700">
                    {t('facilities.library')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Camera className="w-5 h-5 text-secondary-500" />
                  <span className="text-gray-700">
                    {t('facilities.museum')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-secondary-500" />
                  <span className="text-gray-700">
                    {t('facilities.halls')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Baby className="w-5 h-5 text-secondary-500" />
                  <span className="text-gray-700">
                    {t('facilities.children')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Activities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary-600 text-center mb-12">
            {t('current_activities_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft p-6 text-center hover:shadow-strong transition-all duration-300">
                <div className="w-12 h-12 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <activity.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-600 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-md leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">{t('team_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('team_description')}
            </p>
          </div>
          
          <div className="space-y-8">
            {teamStructure.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {section.type === 'header' ? (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6">
                      {t(section.title as string)}
                    </h3>
                  </div>
                ) : section.type === 'members' && section.members ? (
                  <div className={`grid gap-6 ${
                    section.members.length === 1 ? 'grid-cols-1 max-w-xs mx-auto' :
                    section.members.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto' :
                    section.members.length === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
                    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {section.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="bg-white rounded-2xl shadow-soft p-6 text-center hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-20 h-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <User className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary-600">
                          {member.name}
                        </h3>
                        {member.position && (
                          <span className="text-gray-600 text-md">
                            {member.position}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information and Working Hours */}
        <div className="bg-gradient-to-r from-secondary-100 to-secondary-200 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-600 mb-6">
              {t('contact_info.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <span className="text-gray-700 text-lg">
                    {t('contact_info.phone')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✉️</span>
                  </div>
                  <span className="text-gray-700 text-lg">
                    {t('contact_info.email')}
                  </span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">
                {t('contact_info.working_hours.title')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📅</span>
                  </div>
                  <span className="text-gray-700 font-medium">
                    {t('contact_info.working_hours.weekdays')}
                  </span>
                </div>
                <div className="ml-13 space-y-2">
                  <div className="text-gray-700 text-lg">
                    {t('contact_info.working_hours.morning')}
                  </div>
                  <div className="text-gray-700 text-lg">
                    {t('contact_info.working_hours.afternoon')}
                  </div>
                </div>
                <div className="flex items-center space-x-3 mt-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🚫</span>
                  </div>
                  <span className="text-gray-700 font-medium">
                    {t('contact_info.working_hours.weekend')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t('vision_title')}
            </h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
              {t('vision_description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm font-medium">
                  {t('partners.municipal')}
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm font-medium">
                  {t('partners.mayor')}
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm font-medium">
                  {t('partners.companies')}
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm font-medium">
                  {t('partners.pensioners')}
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm font-medium">
                  {t('partners.museum')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 