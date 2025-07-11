import { useLocale } from 'next-intl';
import { Church, Cross, Heart, Calendar, Clock, Users, Book, Star } from 'lucide-react';

export default function ChurchPage() {
  const locale = useLocale();

  const services = [
    {
      icon: Cross,
      title: locale === 'bg' ? 'Неделни литургии' : 'Sunday Liturgies',
      time: '09:00',
      description: locale === 'bg' 
        ? 'Всяка неделя в 09:00 часа' 
        : 'Every Sunday at 9:00 AM'
    },
    {
      icon: Heart,
      title: locale === 'bg' ? 'Празнични служби' : 'Holiday Services',
      time: '09:00',
      description: locale === 'bg' 
        ? 'Големи църковни празници' 
        : 'Major church holidays'
    },
    {
      icon: Star,
      title: locale === 'bg' ? 'Светски обреди' : 'Ceremonial Rites',
      time: locale === 'bg' ? 'По уговорка' : 'By appointment',
      description: locale === 'bg' 
        ? 'Кръщения, венчания, помени' 
        : 'Baptisms, weddings, memorial services'
    }
  ];

  const holidays = [
    {
      name: locale === 'bg' ? 'Коледа' : 'Christmas',
      date: locale === 'bg' ? '25 декември' : 'December 25',
      description: locale === 'bg' 
        ? 'Рождество Христово - най-светлият празник' 
        : 'Nativity of Christ - the brightest holiday'
    },
    {
      name: locale === 'bg' ? 'Великден' : 'Easter',
      date: locale === 'bg' ? 'Променлива дата' : 'Variable date',
      description: locale === 'bg' 
        ? 'Възкресение Христово - празник на празниците' 
        : 'Resurrection of Christ - feast of feasts'
    },
    {
      name: locale === 'bg' ? 'Богоявление' : 'Epiphany',
      date: locale === 'bg' ? '6 януари' : 'January 6',
      description: locale === 'bg' 
        ? 'Водосвет и благославяне на водите' 
        : 'Water blessing and sanctification of waters'
    },
    {
      name: locale === 'bg' ? 'Успение Богородично' : 'Dormition of the Mother of God',
      date: locale === 'bg' ? '15 август' : 'August 15',
      description: locale === 'bg' 
        ? 'Голяма Богородица - лятен празник' 
        : 'Great Feast of the Mother of God - summer holiday'
    }
  ];

  const activities = [
    {
      icon: Book,
      title: locale === 'bg' ? 'Неделно училище' : 'Sunday School',
      description: locale === 'bg' 
        ? 'Религиозно образование за деца и младежи' 
        : 'Religious education for children and youth'
    },
    {
      icon: Users,
      title: locale === 'bg' ? 'Църковен хор' : 'Church Choir',
      description: locale === 'bg' 
        ? 'Пеене по време на богослужения' 
        : 'Singing during church services'
    },
    {
      icon: Heart,
      title: locale === 'bg' ? 'Благотворителност' : 'Charity',
      description: locale === 'bg' 
        ? 'Помощ за нуждаещи се семейства' 
        : 'Help for families in need'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Church className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {locale === 'bg' ? 'Църква "Свети Димитър"' : 'Church "St. Dimitar"'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {locale === 'bg' 
                ? 'Православна християнска община в село Байлово' 
                : 'Orthodox Christian community in Bailovo village'}
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {locale === 'bg' ? 'История на църквата' : 'Church History'}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {locale === 'bg' 
                  ? 'Църквата "Свети Димитър" в село Байлово е построена през 1836 година и служи като духовен център на общността. Тя е освена през 1849 година, когато е официално призната като църковен храм.'
                  : 'The church "St. Dimitar" in Bailovo village was built in 1836 and serves as the spiritual center of the community. It was consecrated in 1849 when it was officially recognized as a church temple.'
                }
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {locale === 'bg' 
                  ? 'Църквата е била не само място за богослужение, но и първото училище в селото, където поп Никола е обучавал децата и е извършвал църковни обреди.'
                  : 'The church was not only a place of worship but also the first school in the village, where priest Nikola taught children and performed church ceremonies.'
                }
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'bg' ? 'Архитектура' : 'Architecture'}
              </h3>
              <ul className="space-y-3">
                {[
                  locale === 'bg' ? 'Традиционна българска архитектура' : 'Traditional Bulgarian architecture',
                  locale === 'bg' ? 'Каменна и дървена конструкция' : 'Stone and wooden construction',
                  locale === 'bg' ? 'Възрожденски стил' : 'Revival style',
                  locale === 'bg' ? 'Автентични фрески и икони' : 'Authentic frescoes and icons',
                  locale === 'bg' ? 'Запазена оригинална олтар' : 'Preserved original altar'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Schedule */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Богослужения' : 'Church Services'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Програма на богослуженията в църква "Свети Димитър"'
                : 'Schedule of church services at "St. Dimitar" church'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-2xl font-bold text-blue-600">{service.time}</span>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Church Holidays */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Църковни празници' : 'Church Holidays'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Основните празници, които се отбелязват в нашата църква'
                : 'Main holidays celebrated in our church'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {holidays.map((holiday, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl mb-4">
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

      {/* Community Activities */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Общностни дейности' : 'Community Activities'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Църквата организира различни дейности за общността'
                : 'The church organizes various activities for the community'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-purple-100 rounded-full">
                    <activity.icon className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{activity.title}</h3>
                <p className="text-gray-600 text-center">{activity.description}</p>
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
              {locale === 'bg' ? 'Контакти' : 'Contact'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'За повече информация или за организиране на църковни обреди'
                : 'For more information or to arrange church ceremonies'}
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
                {locale === 'bg' ? 'Църква "Свети Димитър"' : 'Church "St. Dimitar"'}
              </h3>
              <p className="text-gray-600">
                {locale === 'bg' ? 'Село Байлово, Софийска област' : 'Bailovo village, Sofia District'}
              </p>
              <p className="text-gray-600">
                {locale === 'bg' 
                  ? 'За контакт се обърнете към кметството или читалището'
                  : 'For contact, please reach out to the mayoralty or community center'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 