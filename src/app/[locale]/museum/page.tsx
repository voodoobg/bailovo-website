import { useTranslations } from 'next-intl';
import { BookOpen, Clock, MapPin, Camera, Users } from 'lucide-react';

export default function MuseumPage() {
  const t = useTranslations('museum');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - About the Museum */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-strong p-8 mb-8">
              <h2 className="text-3xl font-bold text-primary-600 mb-6">За музея</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  Музеят &quot;Елин Пелин&quot; в село Байлово се помещава в родната къща на великия 
                  български писател Димитър Иванов Стоянов, известен под псевдонима Елин Пелин. 
                  Къщата е построена в типичния за региона архитектурен стил от XIX век.
                </p>
                <p className="mb-4">
                  Музеят е открит през 1977 година, по случай 100-годишнината от рождението 
                  на писателя. Експозицията разказва за живота и творчеството на Елин Пелин, 
                  представяйки личните му вещи, ръкописи, снимки и документи.
                </p>
                <p>
                  Посетителите могат да разгледат автентично възстановената атмосфера на 
                  къщата от края на XIX век, както и да се запознаят с творческия път на 
                  един от най-значимите български писатели.
                </p>
              </div>
            </div>

            {/* About Elin Pelin */}
            <div className="bg-secondary-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary-600 mb-6">За Елин Пелин</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  <strong>Димитър Иванов Стоянов</strong> (1877-1949), по-известен под псевдонима 
                  <strong> Елин Пелин</strong>, е един от най-значимите български писатели. 
                  Роден е на 8 юли 1877 г. в село Байлово, Софийска област.
                </p>
                <p className="mb-4">
                  Творчеството му се отличава с реалистично изобразяване на българския селски 
                  живот. Най-известните му произведения включват &quot;Геракини&quot;, &quot;Под игото на 
                  времето&quot;, &quot;Пижо и Пендо&quot; и много други разкази и новели.
                </p>
                <p>
                  Елин Пелин е носител на множество награди и отличия, включително званието 
                  &quot;Народен писател на България&quot;. Неговото творчество продължава да вдъхновява 
                  читатели от всички възрасти.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Practical Information */}
          <div className="space-y-8">
            {/* Visiting Hours */}
            <div className="bg-white rounded-lg shadow-strong p-6">
              <h3 className="text-xl font-semibold text-primary-600 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-secondary-500" />
                Работно време
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Понеделник - Петък:</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Събота - Неделя:</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="text-sm text-red-600 mt-2">
                  * Затворено в официалните празници
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-strong p-6">
              <h3 className="text-xl font-semibold text-primary-600 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-secondary-500" />
                Контакти
              </h3>
              <div className="space-y-3 text-gray-600">
                <div>
                  <strong>Адрес:</strong><br />
                  Село Байлово, Софийска область
                </div>
                <div>
                  <strong>Телефон:</strong><br />
                  +359 XXX XXX XXX
                </div>
                <div>
                  <strong>Email:</strong><br />
                  museum@bailovo.eu
                </div>
              </div>
            </div>

            {/* Admission */}
            <div className="bg-white rounded-lg shadow-strong p-6">
              <h3 className="text-xl font-semibold text-primary-600 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-secondary-500" />
                Входни такси
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Възрастни:</span>
                  <span>5 лв.</span>
                </div>
                <div className="flex justify-between">
                  <span>Студенти/Пенсионери:</span>
                  <span>3 лв.</span>
                </div>
                <div className="flex justify-between">
                  <span>Деца до 12 г.:</span>
                  <span>Безплатно</span>
                </div>
                <div className="flex justify-between">
                  <span>Групи (над 10 човека):</span>
                  <span>4 лв./човек</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg shadow-strong p-6">
              <h3 className="text-xl font-semibold text-primary-600 mb-4 flex items-center">
                <Camera className="w-5 h-5 mr-2 text-secondary-500" />
                Услуги
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Екскурзии с екскурзовод</li>
                <li>• Образователни програми</li>
                <li>• Фотографиране (с разрешение)</li>
                <li>• Сувенирен магазин</li>
                <li>• Паркинг</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Famous Works Section */}
        <div className="bg-white rounded-lg shadow-strong p-8">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">
            Известни произведения на Елин Пелин
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Геракини", year: "1911", description: "Сборник разкази за селския живот" },
              { title: "Пижо и Пендо", year: "1913", description: "Детска приказка за две дечица" },
              { title: "Земя", year: "1922", description: "Роман за българското село" },
              { title: "Под игото на времето", year: "1928", description: "Разкази за социални проблеми" },
              { title: "Ян Бибиян", year: "1933", description: "Популярна детска книга" },
              { title: "Изгубеният клас", year: "1936", description: "Автобиографична повест" }
            ].map((work, index) => (
              <div key={index} className="bg-secondary-100 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <BookOpen className="w-5 h-5 mr-2 text-secondary-600" />
                  <span className="text-sm text-secondary-600 font-medium">{work.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary-600 mb-2">{work.title}</h3>
                <p className="text-gray-600 text-sm">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 