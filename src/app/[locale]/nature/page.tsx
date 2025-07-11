import { useLocale } from 'next-intl';
import { TreePine, Mountain, Flower, Bird, Camera, MapPin, Clock, Compass } from 'lucide-react';

export default function NaturePage() {
  const locale = useLocale();

  const attractions = [
    {
      icon: Mountain,
      name: locale === 'bg' ? 'Ихтиманска Средна гора' : 'Ihtiman Sredna Gora',
      description: locale === 'bg' 
        ? 'Планински масив с живописни гледки и разнообразна растителност'
        : 'Mountain range with scenic views and diverse vegetation',
      difficulty: locale === 'bg' ? 'Средно' : 'Moderate',
      duration: locale === 'bg' ? '2-4 часа' : '2-4 hours',
      highlights: locale === 'bg' 
        ? ['Панорамни гледки', 'Дива природа', 'Планински въздух'] 
        : ['Panoramic views', 'Wild nature', 'Mountain air']
    },
    {
      icon: TreePine,
      name: locale === 'bg' ? 'Горски пътеки' : 'Forest Trails',
      description: locale === 'bg' 
        ? 'Мрежа от пътеки през гората със стари дървета и чист въздух'
        : 'Network of forest trails with old trees and clean air',
      difficulty: locale === 'bg' ? 'Лесно' : 'Easy',
      duration: locale === 'bg' ? '1-2 часа' : '1-2 hours',
      highlights: locale === 'bg' 
        ? ['Буков гора', 'Дивечовете', 'Птичи песни'] 
        : ['Beech forest', 'Wildlife', 'Bird songs']
    },
    {
      icon: Flower,
      name: locale === 'bg' ? 'Поляни и ливади' : 'Meadows and Clearings',
      description: locale === 'bg' 
        ? 'Красиви поляни с разнообразни цветя и лечебни билки'
        : 'Beautiful meadows with diverse flowers and healing herbs',
      difficulty: locale === 'bg' ? 'Лесно' : 'Easy',
      duration: locale === 'bg' ? '30 мин - 1 час' : '30 min - 1 hour',
      highlights: locale === 'bg' 
        ? ['Пролетни цветя', 'Лечебни билки', 'Пчели и пеперуди'] 
        : ['Spring flowers', 'Healing herbs', 'Bees and butterflies']
    },
    {
      icon: Bird,
      name: locale === 'bg' ? 'Орнитологично наблюдение' : 'Bird Watching',
      description: locale === 'bg' 
        ? 'Идеални места за наблюдение на местните и преливни птици'
        : 'Ideal spots for observing local and migratory birds',
      difficulty: locale === 'bg' ? 'Лесно' : 'Easy',
      duration: locale === 'bg' ? '1-3 часа' : '1-3 hours',
      highlights: locale === 'bg' 
        ? ['Разнообразни видове', 'Раннинни песни', 'Фотография'] 
        : ['Diverse species', 'Dawn songs', 'Photography']
    }
  ];

  const flora = [
    {
      name: locale === 'bg' ? 'Бук' : 'Beech',
      scientific: 'Fagus sylvatica',
      description: locale === 'bg' 
        ? 'Доминиращо дърво в горите около Байлово'
        : 'Dominant tree in forests around Bailovo'
    },
    {
      name: locale === 'bg' ? 'Дъб' : 'Oak',
      scientific: 'Quercus',
      description: locale === 'bg' 
        ? 'Вековни дъбове в по-ниските части'
        : 'Century-old oaks in lower areas'
    },
    {
      name: locale === 'bg' ? 'Липа' : 'Linden',
      scientific: 'Tilia',
      description: locale === 'bg' 
        ? 'Ароматни дървета в центъра на селото'
        : 'Fragrant trees in the village center'
    },
    {
      name: locale === 'bg' ? 'Диви ягоди' : 'Wild Strawberries',
      scientific: 'Fragaria vesca',
      description: locale === 'bg' 
        ? 'Малки сладки плодове в горските поляни'
        : 'Small sweet fruits in forest clearings'
    }
  ];

  const fauna = [
    {
      name: locale === 'bg' ? 'Дива свиня' : 'Wild Boar',
      scientific: 'Sus scrofa',
      description: locale === 'bg' 
        ? 'Често срещан в горските райони'
        : 'Common in forest areas'
    },
    {
      name: locale === 'bg' ? 'Сърна' : 'Roe Deer',
      scientific: 'Capreolus capreolus',
      description: locale === 'bg' 
        ? 'Елегантно животно в горските опушки'
        : 'Elegant animal in forest edges'
    },
    {
      name: locale === 'bg' ? 'Чинка' : 'Goldfinch',
      scientific: 'Carduelis carduelis',
      description: locale === 'bg' 
        ? 'Цветна птичка с мелодичен глас'
        : 'Colorful bird with melodic voice'
    },
    {
      name: locale === 'bg' ? 'Пъстра кукумявка' : 'Tawny Owl',
      scientific: 'Strix aluco',
      description: locale === 'bg' 
        ? 'Нощен хищник в старите гори'
        : 'Nocturnal predator in old forests'
    }
  ];

  const activities = [
    {
      icon: Compass,
      title: locale === 'bg' ? 'Пешеходен туризъм' : 'Hiking',
      description: locale === 'bg' 
        ? 'Размножени маршрути за всички нива на подготовка'
        : 'Various routes for all fitness levels',
      equipment: locale === 'bg' 
        ? ['Удобни обувки', 'Вода', 'Карта'] 
        : ['Comfortable shoes', 'Water', 'Map']
    },
    {
      icon: Camera,
      title: locale === 'bg' ? 'Фотографиране' : 'Photography',
      description: locale === 'bg' 
        ? 'Прекрасни възможности за природна фотография'
        : 'Excellent opportunities for nature photography',
      equipment: locale === 'bg' 
        ? ['Фотоапарат', 'Обектив', 'Статив'] 
        : ['Camera', 'Lens', 'Tripod']
    },
    {
      icon: Bird,
      title: locale === 'bg' ? 'Наблюдение на птици' : 'Bird Watching',
      description: locale === 'bg' 
        ? 'Богата орнитофауна през цялата година'
        : 'Rich bird life throughout the year',
      equipment: locale === 'bg' 
        ? ['Бинокъл', 'Полеви наръчник', 'Тишина'] 
        : ['Binoculars', 'Field guide', 'Silence']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <TreePine className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {locale === 'bg' ? 'Природа в Байлово' : 'Nature in Bailovo'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {locale === 'bg' 
                ? 'Изживейте красотата на природата в Ихтиманска Средна гора'
                : 'Experience the beauty of nature in Ihtiman Sredna Gora'}
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {locale === 'bg' ? 'Природно богатство' : 'Natural Wealth'}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {locale === 'bg' 
                  ? 'Село Байлово е разположено в подножието на Ихтиманска Средна гора, заобиколено от гъсти гори, кристално чисти извори и разнообразна флора и фауна.'
                  : 'Bailovo village is located at the foot of Ihtiman Sredna Gora, surrounded by dense forests, crystal clear springs, and diverse flora and fauna.'}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {locale === 'bg' 
                  ? 'Това е идеалното място за любителите на природата, които търсят тишина, чист въздух и възможности за активен отдих на открито.'
                  : 'This is the ideal place for nature lovers seeking tranquility, clean air, and opportunities for active outdoor recreation.'}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'bg' ? 'Екосистема' : 'Ecosystem'}
              </h3>
              <ul className="space-y-3">
                {[
                  locale === 'bg' ? 'Смесени листопадни гори' : 'Mixed deciduous forests',
                  locale === 'bg' ? 'Планински потоци' : 'Mountain streams',
                  locale === 'bg' ? 'Алпийски поляни' : 'Alpine meadows',
                  locale === 'bg' ? 'Богата биоразнообразие' : 'Rich biodiversity',
                  locale === 'bg' ? 'Чист горски въздух' : 'Pure forest air'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Natural Attractions */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Природни забележителности' : 'Natural Attractions'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Открийте най-красивите места в околностите на Байлово'
                : 'Discover the most beautiful places around Bailovo'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <attraction.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{attraction.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{attraction.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{attraction.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mountain className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{attraction.difficulty}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {locale === 'bg' ? 'Забележителности:' : 'Highlights:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.map((highlight, highlightIndex) => (
                      <span 
                        key={highlightIndex}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
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

      {/* Flora & Fauna */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Флора и фауна' : 'Flora and Fauna'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Разнообразието от растения и животни в региона'
                : 'Diversity of plants and animals in the region'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Flora */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Flower className="w-8 h-8 text-green-600 mr-3" />
                {locale === 'bg' ? 'Растителност' : 'Flora'}
              </h3>
              <div className="space-y-4">
                {flora.map((plant, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{plant.name}</h4>
                      <span className="text-sm text-gray-500 italic">{plant.scientific}</span>
                    </div>
                    <p className="text-gray-600">{plant.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Fauna */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Bird className="w-8 h-8 text-green-600 mr-3" />
                {locale === 'bg' ? 'Животински свят' : 'Fauna'}
              </h3>
              <div className="space-y-4">
                {fauna.map((animal, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{animal.name}</h4>
                      <span className="text-sm text-gray-500 italic">{animal.scientific}</span>
                    </div>
                    <p className="text-gray-600">{animal.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Дейности на открито' : 'Outdoor Activities'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Възможности за активен отдих в природата'
                : 'Opportunities for active recreation in nature'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-green-100 rounded-full">
                    <activity.icon className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{activity.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{activity.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {locale === 'bg' ? 'Необходимо оборудване:' : 'Required equipment:'}
                  </h4>
                  <ul className="space-y-2">
                    {activity.equipment.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conservation */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {locale === 'bg' ? 'Опазване на природата' : 'Nature Conservation'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {locale === 'bg' 
                ? 'Моля, помогнете ни да запазим тази красива природа за бъдещите поколения. Спазвайте правилата за опазване на околната среда.'
                : 'Please help us preserve this beautiful nature for future generations. Follow environmental protection rules.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'bg' ? 'Не оставяйте отпадъци' : 'Leave No Trace'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'bg' 
                    ? 'Носете отпадъците си със себе си'
                    : 'Take your waste with you'}
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'bg' ? 'Не разрушавайте' : 'Do Not Destroy'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'bg' 
                    ? 'Не берете растения и не безпокойте животните'
                    : 'Do not pick plants or disturb animals'}
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'bg' ? 'Внимавайте с огъня' : 'Be Careful with Fire'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'bg' 
                    ? 'Не палете огън в горите'
                    : 'Do not light fires in the forests'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 