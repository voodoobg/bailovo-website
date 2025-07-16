import { useTranslations } from 'next-intl';
import { Church, Cross, Heart, Calendar, Star } from 'lucide-react';

export default function ChurchPage() {
  const t = useTranslations('church');

  const services = [
    {
      icon: Cross,
      title: t('services.sunday_liturgy.title'),
      time: t('services.sunday_liturgy.time'),
      description: t('services.sunday_liturgy.description')
    },
    {
      icon: Heart,
      title: t('services.holiday_services.title'),
      time: t('services.holiday_services.time'),
      description: t('services.holiday_services.description')
    },
    {
      icon: Star,
      title: t('services.ceremonial_rites.title'),
      time: t('services.ceremonial_rites.time'),
      description: t('services.ceremonial_rites.description')
    }
  ];

  const holidays = [
    {
      name: t('holidays.christmas.name'),
      date: t('holidays.christmas.date'),
      description: t('holidays.christmas.description')
    },
    {
      name: t('holidays.easter.name'),
      date: t('holidays.easter.date'),
      description: t('holidays.easter.description')
    },
    {
      name: t('holidays.epiphany.name'),
      date: t('holidays.epiphany.date'),
      description: t('holidays.epiphany.description')
    },
    {
      name: t('holidays.dormition.name'),
      date: t('holidays.dormition.date'),
      description: t('holidays.dormition.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full shadow-xl">
                <Church className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.description1')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.description2')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('architecture.title')}
              </h3>
              <ul className="space-y-3">
                {[0, 1, 2, 3, 4].map((index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{t(`architecture.features.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed History Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('about.detailed_history_title')}
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
              {t('about.detailed_history').split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-lg">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Schedule */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center">{service.title}</h3>
                <div className="text-center">
                  {/* <div className="flex items-center justify-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-2xl font-bold text-blue-600">{service.time}</span>
                  </div> */}
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Church Holidays */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('holidays.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('holidays.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {holidays.map((holiday, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl mb-4 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{holiday.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-semibold">{holiday.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{holiday.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Church className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {t('contact.church_name')}
              </h3>
              <p className="text-gray-600">
                {t('contact.location')}
              </p>
              <p className="text-gray-600">
                {t('contact.contact_info')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 