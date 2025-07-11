import { useLocale } from 'next-intl';
import { Plane, MapPin, Camera, Calendar, Bed, Car, Train, Bus, Star, Info, Clock, Phone } from 'lucide-react';

export default function TourismPage() {
  const locale = useLocale();

  const attractions = [
    {
      name: locale === 'bg' ? 'Музей "Елин Пелин"' : 'Elin Pelin Museum',
      description: locale === 'bg' 
        ? 'Родната къща на великия български писател'
        : 'The birthplace of the great Bulgarian writer',
      duration: locale === 'bg' ? '1-2 часа' : '1-2 hours',
      price: locale === 'bg' ? '5 лв.' : '5 BGN',
      highlights: locale === 'bg' 
        ? ['Автентична обстановка', 'Личны предмети', 'Ръкописи'] 
        : ['Authentic setting', 'Personal items', 'Manuscripts']
    },
    {
      name: locale === 'bg' ? 'НЧ "Елин Пелин-1922"' : 'Community Center "Elin Pelin-1922"',
      description: locale === 'bg' 
        ? 'Културен център с богата история и традиции'
        : 'Cultural center with rich history and traditions',
      duration: locale === 'bg' ? '1 час' : '1 hour',
      price: locale === 'bg' ? 'Безплатно' : 'Free',
      highlights: locale === 'bg' 
        ? ['Историческа сграда', 'Библиотека', 'Културни събития'] 
        : ['Historic building', 'Library', 'Cultural events']
    },
    {
      name: locale === 'bg' ? 'Църква "Свети Димитър"' : 'Church "St. Dimitar"',
      description: locale === 'bg' 
        ? 'Възрожденска църква от 1836 година'
        : 'Revival church from 1836',
      duration: locale === 'bg' ? '30 минути' : '30 minutes',
      price: locale === 'bg' ? 'Безплатно' : 'Free',
      highlights: locale === 'bg' 
        ? ['Архитектура', 'Стенописи', 'Икони'] 
        : ['Architecture', 'Frescoes', 'Icons']
    },
    {
      name: locale === 'bg' ? 'Природни маршрути' : 'Nature Trails',
      description: locale === 'bg' 
        ? 'Планински маршрути в Ихтиманска Средна гора'
        : 'Mountain trails in Ihtiman Sredna Gora',
      duration: locale === 'bg' ? '2-4 часа' : '2-4 hours',
      price: locale === 'bg' ? 'Безплатно' : 'Free',
      highlights: locale === 'bg' 
        ? ['Панорамни гледки', 'Чист въздух', 'Дива природа'] 
        : ['Panoramic views', 'Fresh air', 'Wild nature']
    }
  ];

  const accommodations = [
    {
      name: locale === 'bg' ? 'Семейни стаи' : 'Family Rooms',
      type: locale === 'bg' ? 'Стаи за гости' : 'Guest rooms',
      description: locale === 'bg' 
        ? 'Уютни стаи в частни домове с домакински грижи'
        : 'Cozy rooms in private homes with home care',
      price: locale === 'bg' ? '30-50 лв./нощ' : '30-50 BGN/night',
      amenities: locale === 'bg' 
        ? ['Закуска', 'Паркинг', 'Градина'] 
        : ['Breakfast', 'Parking', 'Garden']
    },
    {
      name: locale === 'bg' ? 'Къща за гости "Байлово"' : 'Guest House "Bailovo"',
      type: locale === 'bg' ? 'Къща за гости' : 'Guest house',
      description: locale === 'bg' 
        ? 'Напълно обзаведени апартаменти за по-дълъг престой'
        : 'Fully furnished apartments for longer stays',
      price: locale === 'bg' ? '80-120 лв./нощ' : '80-120 BGN/night',
      amenities: locale === 'bg' 
        ? ['Кухня', 'Wi-Fi', 'Барбекю'] 
        : ['Kitchen', 'Wi-Fi', 'Barbecue']
    },
    {
      name: locale === 'bg' ? 'Къмпинг "Под звездите"' : 'Camping "Under the Stars"',
      type: locale === 'bg' ? 'Къмпинг' : 'Camping',
      description: locale === 'bg' 
        ? 'Места за палатки и каравани в природата'
        : 'Tent and caravan sites in nature',
      price: locale === 'bg' ? '15-25 лв./нощ' : '15-25 BGN/night',
      amenities: locale === 'bg' 
        ? ['Санитарен възел', 'Електричество', 'Огнище'] 
        : ['Bathroom', 'Electricity', 'Fire pit']
    }
  ];

  const activities = [
    {
      icon: Camera,
      title: locale === 'bg' ? 'Фотографски тур' : 'Photography Tour',
      description: locale === 'bg' 
        ? 'Организирани турове за заснемане на най-красивите места'
        : 'Organized tours to capture the most beautiful places',
      duration: locale === 'bg' ? '3-4 часа' : '3-4 hours',
      price: locale === 'bg' ? '40 лв.' : '40 BGN'
    },
    {
      icon: Calendar,
      title: locale === 'bg' ? 'Фестивал на Елин Пелин' : 'Elin Pelin Festival',
      description: locale === 'bg' 
        ? 'Годишен литературен фестивал през август'
        : 'Annual literary festival in August',
      duration: locale === 'bg' ? '2 дни' : '2 days',
      price: locale === 'bg' ? 'Безплатно' : 'Free'
    },
    {
      icon: MapPin,
      title: locale === 'bg' ? 'Пешеходни турове' : 'Walking Tours',
      description: locale === 'bg' 
        ? 'Водени разходки из селото с местни гидове'
        : 'Guided walks around the village with local guides',
      duration: locale === 'bg' ? '2 часа' : '2 hours',
      price: locale === 'bg' ? '20 лв.' : '20 BGN'
    }
  ];

  const transportInfo = [
    {
      icon: Car,
      title: locale === 'bg' ? 'Със собствен автомобил' : 'By Car',
      description: locale === 'bg' 
        ? 'От София - 43 км на изток по пътя за Етрополе'
        : 'From Sofia - 43 km east on the road to Etropole',
      duration: locale === 'bg' ? '45 минути' : '45 minutes'
    },
    {
      icon: Bus,
      title: locale === 'bg' ? 'С автобус' : 'By Bus',
      description: locale === 'bg' 
        ? 'Редовни автобуси от София до Горна Малина'
        : 'Regular buses from Sofia to Gorna Malina',
      duration: locale === 'bg' ? '1 час' : '1 hour'
    },
    {
      icon: Train,
      title: locale === 'bg' ? 'С влак' : 'By Train',
      description: locale === 'bg' 
        ? 'До гара Горна Малина, след което автобус'
        : 'To Gorna Malina station, then bus',
      duration: locale === 'bg' ? '1.5 часа' : '1.5 hours'
    }
  ];

  const practicalInfo = [
    {
      icon: Info,
      title: locale === 'bg' ? 'Туристическа информация' : 'Tourist Information',
      items: [
        locale === 'bg' ? 'Кметство Байлово: 0887 XXX XXX' : 'Bailovo Mayoralty: 0887 XXX XXX',
        locale === 'bg' ? 'НЧ "Елин Пелин": 0888 XXX XXX' : 'Community Center "Elin Pelin": 0888 XXX XXX',
        locale === 'bg' ? 'Email: info@bailovo.bg' : 'Email: info@bailovo.bg'
      ]
    },
    {
      icon: Clock,
      title: locale === 'bg' ? 'Работно време' : 'Working Hours',
      items: [
        locale === 'bg' ? 'Музей: Вт-Нед 9:00-17:00' : 'Museum: Tue-Sun 9:00-17:00',
        locale === 'bg' ? 'Читалище: Пон-Пет 14:00-18:00' : 'Community Center: Mon-Fri 14:00-18:00',
        locale === 'bg' ? 'Църква: Отворена през деня' : 'Church: Open during the day'
      ]
    },
    {
      icon: Phone,
      title: locale === 'bg' ? 'Спешни телефони' : 'Emergency Numbers',
      items: [
        locale === 'bg' ? 'Спешен център: 112' : 'Emergency center: 112',
        locale === 'bg' ? 'Полиция: 166' : 'Police: 166',
        locale === 'bg' ? 'Пожарна: 160' : 'Fire department: 160'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Plane className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {locale === 'bg' ? 'Туризъм в Байлово' : 'Tourism in Bailovo'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {locale === 'bg' 
                ? 'Открийте родното място на Елин Пелин и красотата на българската природа'
                : 'Discover the birthplace of Elin Pelin and the beauty of Bulgarian nature'}
            </p>
          </div>
        </div>
      </div>

      {/* Why Visit Bailovo */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Защо да посетите Байлово?' : 'Why Visit Bailovo?'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Байлово предлага уникална комбинация от културно наследство, природна красота и автентично българско гостоприемство.'
                : 'Bailovo offers a unique combination of cultural heritage, natural beauty, and authentic Bulgarian hospitality.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {locale === 'bg' ? 'Литературно наследство' : 'Literary Heritage'}
              </h3>
              <p className="text-gray-600">
                {locale === 'bg' 
                  ? 'Родното място на Елин Пелин с автентичен музей и богата история'
                  : 'Birthplace of Elin Pelin with authentic museum and rich history'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {locale === 'bg' ? 'Природна красота' : 'Natural Beauty'}
              </h3>
              <p className="text-gray-600">
                {locale === 'bg' 
                  ? 'Планински маршрути, чист въздух и живописни гледки'
                  : 'Mountain trails, clean air, and scenic views'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-orange-100 rounded-full">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {locale === 'bg' ? 'Автентичност' : 'Authenticity'}
              </h3>
              <p className="text-gray-600">
                {locale === 'bg' 
                  ? 'Запазени традиции и истински български дух'
                  : 'Preserved traditions and authentic Bulgarian spirit'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Attractions */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Забележителности' : 'Attractions'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Основните места, които заслужават вашето внимание'
                : 'Main places that deserve your attention'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{attraction.name}</h3>
                <p className="text-gray-600 mb-4">{attraction.description}</p>
                
                <div className="flex items-center space-x-6 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{attraction.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-blue-600">{attraction.price}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {locale === 'bg' ? 'Забележителности:' : 'Highlights:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.map((highlight, highlightIndex) => (
                      <span 
                        key={highlightIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accommodations */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Настаняване' : 'Accommodations'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Различни възможности за настаняване според вашите предпочитания'
                : 'Various accommodation options according to your preferences'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Bed className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">{accommodation.name}</h3>
                </div>
                
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {accommodation.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{accommodation.description}</p>
                
                <div className="text-xl font-bold text-blue-600 mb-4">{accommodation.price}</div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {locale === 'bg' ? 'Удобства:' : 'Amenities:'}
                  </h4>
                  <ul className="space-y-1">
                    {accommodation.amenities.map((amenity, amenityIndex) => (
                      <li key={amenityIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Туристически дейности' : 'Tourist Activities'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Организирани дейности и събития за посетителите'
                : 'Organized activities and events for visitors'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-indigo-100 rounded-full">
                    <activity.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{activity.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{activity.description}</p>
                
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{activity.duration}</span>
                  </div>
                  <div className="text-lg font-semibold text-indigo-600">{activity.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Get There */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Как да стигнете?' : 'How to Get There?'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Различни начини за достигане до село Байлово'
                : 'Different ways to reach Bailovo village'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportInfo.map((transport, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-green-100 rounded-full">
                    <transport.icon className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{transport.title}</h3>
                <p className="text-gray-600 mb-4">{transport.description}</p>
                <div className="text-lg font-semibold text-green-600">{transport.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Practical Information */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Практическа информация' : 'Practical Information'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Полезна информация за вашето посещение'
                : 'Useful information for your visit'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practicalInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <info.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {info.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 