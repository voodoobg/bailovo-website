import { useLocale } from 'next-intl';
import { Store, Coffee, Utensils, ShoppingCart, MapPin, Clock, Phone, Star } from 'lucide-react';

export default function EstablishmentsPage() {
  const locale = useLocale();

  const establishments = [
    {
      category: locale === 'bg' ? 'Ресторанти' : 'Restaurants',
      icon: Utensils,
      color: 'from-orange-500 to-red-500',
      places: [
        {
          name: locale === 'bg' ? 'Механа "Елин Пелин"' : 'Tavern "Elin Pelin"',
          description: locale === 'bg' 
            ? 'Традиционна българска кухня с автентична атмосфера'
            : 'Traditional Bulgarian cuisine with authentic atmosphere',
          address: locale === 'bg' ? 'Център на селото' : 'Village center',
          phone: '0887 XXX XXX',
          hours: locale === 'bg' ? 'Всеки ден 12:00-22:00' : 'Daily 12:00-22:00',
          specialties: locale === 'bg' 
            ? ['Домашни ястия', 'Местни деликатеси', 'Гриловани месца'] 
            : ['Home-cooked meals', 'Local delicacies', 'Grilled meats']
        },
        {
          name: locale === 'bg' ? 'Семейна къща "Байлово"' : 'Family House "Bailovo"',
          description: locale === 'bg' 
            ? 'Уютна семейна къща за хранене с градина'
            : 'Cozy family dining house with garden',
          address: locale === 'bg' ? 'Ул. Главна 15' : '15 Main Street',
          phone: '0888 XXX XXX',
          hours: locale === 'bg' ? 'Пет-Нед 11:00-21:00' : 'Fri-Sun 11:00-21:00',
          specialties: locale === 'bg' 
            ? ['Домашни супи', 'Пресни салати', 'Кафе и сладкиши'] 
            : ['Homemade soups', 'Fresh salads', 'Coffee and desserts']
        }
      ]
    },
    {
      category: locale === 'bg' ? 'Кафенета' : 'Cafes',
      icon: Coffee,
      color: 'from-brown-500 to-amber-600',
      places: [
        {
          name: locale === 'bg' ? 'Кафе "Централ"' : 'Cafe "Central"',
          description: locale === 'bg' 
            ? 'Централно кафене с терасата и приятна атмосфера'
            : 'Central cafe with terrace and pleasant atmosphere',
          address: locale === 'bg' ? 'Центъра на селото' : 'Village center',
          phone: '0889 XXX XXX',
          hours: locale === 'bg' ? 'Всеки ден 7:00-22:00' : 'Daily 7:00-22:00',
          specialties: locale === 'bg' 
            ? ['Кафе', 'Свежи напитки', 'Закуски'] 
            : ['Coffee', 'Fresh beverages', 'Snacks']
        },
        {
          name: locale === 'bg' ? 'Бистро "Под липите"' : 'Bistro "Under the Lindens"',
          description: locale === 'bg' 
            ? 'Тихо място за кафе сред природата'
            : 'Quiet place for coffee surrounded by nature',
          address: locale === 'bg' ? 'Близо до парка' : 'Near the park',
          phone: '0887 XXX XXX',
          hours: locale === 'bg' ? 'Всеки ден 8:00-20:00' : 'Daily 8:00-20:00',
          specialties: locale === 'bg' 
            ? ['Експресо кафе', 'Домашни торти', 'Фреш сокове'] 
            : ['Espresso coffee', 'Homemade cakes', 'Fresh juices']
        }
      ]
    },
    {
      category: locale === 'bg' ? 'Магазини' : 'Shops',
      icon: ShoppingCart,
      color: 'from-green-500 to-blue-500',
      places: [
        {
          name: locale === 'bg' ? 'Хранителен магазин "Байлово"' : 'Grocery Store "Bailovo"',
          description: locale === 'bg' 
            ? 'Основни хранителни стоки и битови потреби'
            : 'Basic groceries and household necessities',
          address: locale === 'bg' ? 'Главна улица' : 'Main Street',
          phone: '0888 XXX XXX',
          hours: locale === 'bg' ? 'Пон-Съб 7:00-19:00' : 'Mon-Sat 7:00-19:00',
          specialties: locale === 'bg' 
            ? ['Хранителни стоки', 'Битова химия', 'Местни продукти'] 
            : ['Groceries', 'Household items', 'Local products']
        },
        {
          name: locale === 'bg' ? 'Сувенири "Елин Пелин"' : 'Souvenirs "Elin Pelin"',
          description: locale === 'bg' 
            ? 'Сувенири и подаръци свързани с Елин Пелин'
            : 'Souvenirs and gifts related to Elin Pelin',
          address: locale === 'bg' ? 'До музея' : 'Near the museum',
          phone: '0887 XXX XXX',
          hours: locale === 'bg' ? 'Всеки ден 9:00-18:00' : 'Daily 9:00-18:00',
          specialties: locale === 'bg' 
            ? ['Книги', 'Сувенири', 'Ръчна изработка'] 
            : ['Books', 'Souvenirs', 'Handmade crafts']
        }
      ]
    },
    {
      category: locale === 'bg' ? 'Услуги' : 'Services',
      icon: Store,
      color: 'from-purple-500 to-pink-500',
      places: [
        {
          name: locale === 'bg' ? 'Пощенски пункт' : 'Post Office',
          description: locale === 'bg' 
            ? 'Пощенски услуги и доставки'
            : 'Postal services and deliveries',
          address: locale === 'bg' ? 'Общинска сграда' : 'Municipal building',
          phone: '0887 XXX XXX',
          hours: locale === 'bg' ? 'Пон-Пет 8:00-16:00' : 'Mon-Fri 8:00-16:00',
          specialties: locale === 'bg' 
            ? ['Пощенски услуги', 'Превод на пари', 'Доставки'] 
            : ['Mail services', 'Money transfers', 'Deliveries']
        },
        {
          name: locale === 'bg' ? 'Аптека "Здраве"' : 'Pharmacy "Health"',
          description: locale === 'bg' 
            ? 'Лекарства и медицински консултации'
            : 'Medicines and medical consultations',
          address: locale === 'bg' ? 'Център на селото' : 'Village center',
          phone: '0888 XXX XXX',
          hours: locale === 'bg' ? 'Пон-Съб 8:00-18:00' : 'Mon-Sat 8:00-18:00',
          specialties: locale === 'bg' 
            ? ['Рецептурни лекарства', 'Хранителни добавки', 'Първа помощ'] 
            : ['Prescription medicines', 'Supplements', 'First aid']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Store className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {locale === 'bg' ? 'Заведения в Байлово' : 'Establishments in Bailovo'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {locale === 'bg' 
                ? 'Откриете местните ресторанти, кафенета, магазини и услуги в село Байлово'
                : 'Discover local restaurants, cafes, shops and services in Bailovo village'}
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {locale === 'bg' ? 'Добре дошли в Байлово' : 'Welcome to Bailovo'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'bg' 
                ? 'Село Байлово предлага разнообразие от заведения и услуги за жителите и гостите си. От традиционни механи до уютни кафенета, от местни магазини до основни услуги - всичко необходимо за комфортен престой.'
                : 'Bailovo village offers a variety of establishments and services for its residents and guests. From traditional taverns to cozy cafes, from local shops to essential services - everything needed for a comfortable stay.'}
            </p>
          </div>
        </div>
      </div>

      {/* Establishments by Category */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {establishments.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${category.color}`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.places.map((place, placeIndex) => (
                    <div key={placeIndex} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900">{place.name}</h4>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{place.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-700">{place.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-700">{place.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-700">{place.hours}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-3">
                          {locale === 'bg' ? 'Специалности:' : 'Specialties:'}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {place.specialties.map((specialty, specialtyIndex) => (
                            <span 
                              key={specialtyIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* General Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'bg' ? 'Работно време' : 'Working Hours'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'bg' 
                  ? 'Повечето заведения работят:'
                  : 'Most establishments are open:'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">
                    {locale === 'bg' ? 'Всеки ден: 8:00-20:00' : 'Daily: 8:00-20:00'}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">
                    {locale === 'bg' ? 'Неделя: 9:00-18:00' : 'Sunday: 9:00-18:00'}
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'bg' ? 'Плащане' : 'Payment'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'bg' 
                  ? 'Приемани форми на плащане:'
                  : 'Accepted payment methods:'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    {locale === 'bg' ? 'В брой' : 'Cash'}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    {locale === 'bg' ? 'Банкова карта' : 'Bank card'}
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'bg' ? 'Контакти' : 'Contact'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'bg' 
                  ? 'За повече информация:'
                  : 'For more information:'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">
                    {locale === 'bg' ? 'Кметство Байлово' : 'Bailovo Mayoralty'}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">
                    {locale === 'bg' ? 'НЧ "Елин Пелин"' : 'Community Center "Elin Pelin"'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 