import { useLocale } from 'next-intl';
import { Plane, MapPin, Bed, Camera, Calendar, Car, Train, Bus, Star, Info, Clock, Phone, Utensils, ShoppingCart, Store, Activity } from 'lucide-react';

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
      name: locale === 'bg' ? 'Храм "Св. Св. Кирил и Методий"' : 'Church "St. Cyril and Methodius"',
      description: locale === 'bg' 
        ? 'Възрожденска църква от 1884 година'
        : 'Revival church from 1884',
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
    // {
    //   name: locale === 'bg' ? 'Семейни стаи' : 'Family Rooms',
    //   type: locale === 'bg' ? 'Стаи за гости' : 'Guest rooms',
    //   description: locale === 'bg' 
    //     ? 'Уютни стаи в частни домове с домакински грижи'
    //     : 'Cozy rooms in private homes with home care',
    //   price: locale === 'bg' ? '30-50 лв./нощ' : '30-50 BGN/night',
    //   amenities: locale === 'bg' 
    //     ? ['Закуска', 'Паркинг', 'Градина'] 
    //     : ['Breakfast', 'Parking', 'Garden']
    // },
    {
      name: locale === 'bg' ? 'Къща Герак Мито' : 'House Gerak Mito',
      type: locale === 'bg' ? 'Къща за гости' : 'Guest house',
      description: locale === 'bg' 
        ? 'Къща Герак Мито се намира в Герашката махала на селото, на улица Герашка N1, в един от  дворовете на рода Гераците, за който Елин Пелин пише, но ползва само имената от този род, а всъщност пише за живота на семейство от съседно село. На разположение на гостите са безплатни шезлонги и чадъри за лежерни разговори. В двора има възможност за ролеви игри, лятно кино, приготвяне на барбекю, място за хранене.'
        : 'The Gerak Mito house is located in the Gerashka neighborhood of the village, on Gerashka Street N1, in one of the yards of the Gerakite family, for which E. Pelin writes, but uses only the names of this family, actually writing about the life of a family from a neighboring village.',
      price: locale === 'bg' ? '' : '',
      amenities: locale === 'bg' 
        ? ['Кухня', 'Wi-Fi', 'Барбекю', 'Паркинг', 'Градина'] 
        : ['Kitchen', 'Wi-Fi', 'Barbecue', 'Parking', 'Garden']
    },
    // {
    //   name: locale === 'bg' ? 'Къмпинг "Под звездите"' : 'Camping "Under the Stars"',
    //   type: locale === 'bg' ? 'Къмпинг' : 'Camping',
    //   description: locale === 'bg' 
    //     ? 'Места за палатки и каравани в природата'
    //     : 'Tent and caravan sites in nature',
    //   price: locale === 'bg' ? '15-25 лв./нощ' : '15-25 BGN/night',
    //   amenities: locale === 'bg' 
    //     ? ['Санитарен възел', 'Електричество', 'Огнище'] 
    //     : ['Bathroom', 'Electricity', 'Fire pit']
    // }
  ];

  const activities = [
    {
      icon: Camera,
      title: locale === 'bg' ? 'Фотографски тур' : 'Photography Tour',
      description: locale === 'bg' 
        ? 'Заснемане на най-красивите места'
        : 'Photography of the most beautiful places',
      duration: locale === 'bg' ? '3-4 часа' : '3-4 hours',
      price: locale === 'bg' ? '40 лв.' : '40 BGN'
    },
    {
      icon: Calendar,
      title: locale === 'bg' ? 'Фестивал на Хумора и шегата' : 'Humor and Joke Festival',
      description: locale === 'bg' 
        ? 'Годишен хумористичен фестивал през април'
        : 'Annual humor and joke festival in April',
      duration: locale === 'bg' ? '1 ден' : '1 day',
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
        ? 'От София - 43 км на изток по подбалканския път'
        : 'From Sofia - 43 km east on the Balkan road',
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
        locale === 'bg' ? 'Кметство Байлово: +359 882 445 409' : 'Bailovo Mayoralty: +359 876 734 728',
        locale === 'bg' ? 'НЧ "Елин Пелин": +359 876 734 728' : 'Community Center "Elin Pelin": +359 876 734 728',
        locale === 'bg' ? 'Email: info@bailovo.bg' : 'Email: info@bailovo.bg'
      ]
    },
    {
      icon: Clock,
      title: locale === 'bg' ? 'Работно време' : 'Working Hours',
      items: [
        locale === 'bg' ? 'Музей: Вт-Нед 08:30-12:30, 14:00-18:00' : 'Museum: Tue-Sun 08:30-12:30, 14:00-18:00',
        locale === 'bg' ? 'Читалище: Пон-Пет  08:30-12:30, 14:00-18:00' : 'Community Center: Mon-Fri  08:30-12:30, 14:00-18:00',
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full shadow-xl">
                <Plane className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {locale === 'bg' ? 'Туризъм в Байлово' : 'Tourism in Bailovo'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {locale === 'bg' 
                ? 'Открийте родното място на Елин Пелин и красотата на българската природа'
                : 'Discover the birthplace of Elin Pelin and the beauty of Bulgarian nature'}
            </p>
          </div>
        </div>
      </section>

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
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Bed className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{accommodation.name}</h3>
                </div>
                
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {accommodation.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{accommodation.description}</p>
                
                {accommodation.price && (
                  <div className="text-lg font-semibold text-blue-600 mb-4">{accommodation.price}</div>
                )}
                
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
                  {/* <div className="text-lg font-semibold text-indigo-600">{activity.price}</div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local Establishments */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Местни заведения' : 'Local Establishments'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Ресторанти, кафенета, магазини и услуги за туристи'
                : 'Restaurants, cafes, shops and services for tourists'}
            </p>
          </div>
          
          {/* Restaurants */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {locale === 'bg' ? 'Ресторанти' : 'Restaurants'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">
                    {locale === 'bg' ? 'Ресторант "No Names"' : 'Restaurant "No Names"'}
                  </h4>
                  {/* <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div> */}
                </div>
                <p className="text-gray-600 mb-6">
                  {locale === 'bg' 
                    ? 'Вкусна кухня и уютна обстановка'
                    : 'Tasty food and cozy atmosphere'}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">
                      {locale === 'bg' ? 'Център на селото' : 'Village center'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">
                      {locale === 'bg' ? 'Всеки ден 12:00-22:00' : 'Daily 12:00-22:00'}
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    {locale === 'bg' ? 'Специалности:' : 'Specialties:'}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {(locale === 'bg' 
                      ? ['Приема резервации', 'Места отвън', 'Гурме специалитети'] 
                      : ['Accepts reservations', 'Outdoor seating', 'Gourmet specialties']
                    ).map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">
                    {locale === 'bg' ? 'Семейна къща "Байлово"' : 'Family House "Bailovo"'}
                  </h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  {locale === 'bg' 
                    ? 'Уютна семейна къща за хранене с градина'
                    : 'Cozy family dining house with garden'}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">
                      {locale === 'bg' ? 'Ул. Главна 15' : '15 Main Street'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">
                      {locale === 'bg' ? 'Пет-Нед 11:00-21:00' : 'Fri-Sun 11:00-21:00'}
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    {locale === 'bg' ? 'Специалности:' : 'Specialties:'}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {(locale === 'bg' 
                      ? ['Домашни супи', 'Пресни салати', 'Кафе и сладкиши'] 
                      : ['Homemade soups', 'Fresh salads', 'Coffee and desserts']
                    ).map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Cafes */}
          {/* <div className="mb-16">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-brown-500 to-amber-600">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {locale === 'bg' ? 'Кафенета' : 'Cafes'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {locale === 'bg' ? 'Кафе "Централ"' : 'Cafe "Central"'}
                </h4>
                <p className="text-gray-600 mb-6">
                  {locale === 'bg' 
                    ? 'Централно кафене с терасата и приятна атмосфера'
                    : 'Central cafe with terrace and pleasant atmosphere'}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">
                      {locale === 'bg' ? 'Центъра на селото' : 'Village center'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">
                      {locale === 'bg' ? 'Всеки ден 7:00-22:00' : 'Daily 7:00-22:00'}
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    {locale === 'bg' ? 'Специалности:' : 'Specialties:'}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {(locale === 'bg' 
                      ? ['Кафе', 'Свежи напитки', 'Закуски'] 
                      : ['Coffee', 'Fresh beverages', 'Snacks']
                    ).map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {locale === 'bg' ? 'Бистро "Под липите"' : 'Bistro "Under the Lindens"'}
                </h4>
                <p className="text-gray-600 mb-6">
                  {locale === 'bg' 
                    ? 'Тихо място за кафе сред природата'
                    : 'Quiet place for coffee surrounded by nature'}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">
                      {locale === 'bg' ? 'Близо до парка' : 'Near the park'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">
                      {locale === 'bg' ? 'Всеки ден 8:00-20:00' : 'Daily 8:00-20:00'}
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    {locale === 'bg' ? 'Специалности:' : 'Specialties:'}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {(locale === 'bg' 
                      ? ['Експресо кафе', 'Домашни торти', 'Фреш сокове'] 
                      : ['Espresso coffee', 'Homemade cakes', 'Fresh juices']
                    ).map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Shops & Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Shops */}
            <div>
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {locale === 'bg' ? 'Магазини' : 'Shops'}
                </h3>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {locale === 'bg' ? 'Бакалия "Байлово"' : 'Store "Bailovo"'}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {locale === 'bg' 
                      ? 'Основни хранителни стоки и битови потреби'
                      : 'Basic groceries and household necessities'}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">
                        {locale === 'bg' ? 'Център на селото' : 'Village center'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <a href="tel:071504444" className="text-blue-600 hover:text-blue-800 hover:underline">
                        07/1504444
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">
                        {locale === 'bg' ? 'Всеки ден 7:00-20:00' : 'Daily 7:00-20:00'}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">
                      {locale === 'bg' ? 'Продукти:' : 'Products:'}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {(locale === 'bg' 
                        ? ['Хранителни стоки', 'Битова химия', 'Местни продукти'] 
                        : ['Groceries', 'Household items', 'Local products']
                      ).map((item, index) => (
                        <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {locale === 'bg' ? 'Смесен магазин' : 'Mixed store'}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {locale === 'bg' 
                      ? 'Основни хранителни стоки, битови потреби и строителни материали'
                      : 'Basic groceries, household items and construction materials'}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">
                        {locale === 'bg' ? 'Главна улица' : 'Main street'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <a href="tel:+359898361531" className="text-blue-600 hover:text-blue-800 hover:underline">
                        +359 898 361 531
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">
                        {locale === 'bg' ? 'Пон-Сб 8:00-19:00' : 'Mon-Sat 8:00-19:00'}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">
                      {locale === 'bg' ? 'Асортимент:' : 'Assortment:'}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {(locale === 'bg' 
                        ? ['Основни хранителни стоки', 'Битови потреби', 'Строителни материали'] 
                        : ['Basic groceries', 'Household items', 'Construction materials']
                      ).map((item, index) => (
                        <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                    <Store className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {locale === 'bg' ? 'Услуги' : 'Services'}
                </h3>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {locale === 'bg' ? 'Пощенски пункт' : 'Post Office'}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {locale === 'bg' 
                      ? 'Пощенски услуги и доставки'
                      : 'Postal services and deliveries'}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">
                        {locale === 'bg' ? 'Централен площад' : 'Central square'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <a href="tel:071504220" className="text-blue-600 hover:text-blue-800 hover:underline">
                        07150/4220
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">
                        {locale === 'bg' ? 'Пон-Пет 8:00-17:00' : 'Mon-Fri 8:00-17:00'}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">
                      {locale === 'bg' ? 'Услуги:' : 'Services:'}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {(locale === 'bg' 
                        ? ['Пощенски услуги', 'Превод на пари', 'Доставки'] 
                        : ['Mail services', 'Money transfers', 'Deliveries']
                      ).map((item, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {locale === 'bg' ? 'Аптека "Здраве"' : 'Pharmacy "Health"'}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {locale === 'bg' 
                      ? 'Лекарства и медицински консултации'
                      : 'Medicines and medical consultations'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(locale === 'bg' 
                      ? ['Рецептурни лекарства', 'Хранителни добавки', 'Първа помощ'] 
                      : ['Prescription medicines', 'Supplements', 'First aid']
                    ).map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sports Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                <Activity className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Спорт' : 'Sports'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Спортни дейности и йога занимания в село Байлово'
                : 'Sports activities and yoga classes in Bailovo village'}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900">
                  {locale === 'bg' ? 'Анахата Йога Клуб' : 'Anahata Yoga Club'}
                </h4>
                <p className="text-2xl font-bold text-gray-900">
                  {locale === 'bg' ? 'Екатерина Йончева - Инструктор' : 'Ekaterina Yoncheva - Instructor'}
                </p>
              <p className="text-gray-600 mb-6">
                {locale === 'bg' 
                  ? 'Професионални йога занимания в спокойна обстановка, съчетаващи древни техники с модерни подходи за хармония на тялото и духа. Екатерина Йончева е йога инструктор, сертифициран от Национална спортна академия "Васил Левски" и Българската федерация по йога.'
                  : 'Professional yoga classes in a peaceful environment, combining ancient techniques with modern approaches for harmony of body and spirit'}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">
                    {locale === 'bg' ? 'Читалището "Елин Пелин"' : 'Community Center "Elin Pelin"'}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">
                    {locale === 'bg' ? 'Вторник и Неделя 18:30-20:00' : 'Tuesday and Sunday 18:30-20:00'}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">
                    {locale === 'bg' ? 'За информация: ' : 'For information: '}
                    <a href="tel:0888955322" className="text-blue-600 hover:text-blue-800 hover:underline">
                      {locale === 'bg' ? '0888 955 322' : '0888 955 322'}
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'bg' ? 'Видове йога:' : 'Yoga types:'}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {(locale === 'bg' 
                    ? ['Хата йога', 'Виняса йога', 'Медитация', 'Дишащи техники'] 
                    : ['Hatha yoga', 'Vinyasa yoga', 'Meditation', 'Breathing techniques']
                  ).map((specialty, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
                  {info.items.map((item, itemIndex) => {
                    // Check if item contains a phone number
                    const phoneRegex = /(\+359\s?\d{3}\s?\d{3}\s?\d{3}|\d{3})/g;
                    const parts = item.split(phoneRegex);
                    
                    return (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">
                          {parts.map((part, partIndex) => {
                            if (phoneRegex.test(part)) {
                              const telNumber = part.replace(/\s/g, '');
                              return (
                                <a
                                  key={partIndex}
                                  href={`tel:${telNumber}`}
                                  className="text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                  {part}
                                </a>
                              );
                            }
                            return part;
                          })}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 