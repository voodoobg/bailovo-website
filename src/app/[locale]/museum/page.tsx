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
                  В центъра на селото се намира родната къща-музей на Елин Пелин, в която е
                  пресъздадена обстановката, в която са живеели байловчани през 18-ти и 19-ти век.
                  Къщата е превърната в музей през 1977 г., по повод 100-годишнината от рождението
                  на писателя. Всеки, прекрачил прага й, се докосва до атмосферата, в която е творил
                  писателят.
                </p>
                <p className="mb-4">
                  Къщата музей е привлекателен обект за посетителите от цялата страна.
                  Широкият двор с големия орех, плевнята, навесът, под който е събран селскостопански
                  инвентар, ни връщат към атмосферата, в която е живял и творил Елин Пелин. На
                  горния етаж е възстановена битовата обстановка на байловска къща, където с вкус е
                  подредена покъщнината. Уредена е и стаята на Елин Пелин с негови лични вещи. През
                  къщата досега са минали хиляди посетители, подписали са се в книгата за впечатления
                  много почитатели на голямото му творчество.
                </p>
                <p>
                  Музеят на Елин Пелин е подходящ за еднодневни ученически екскурзии,
                  тържества и раздаване на бележници за края на учебната година.
                </p>
                <p>
                  Жадните да усетят магията на словото на писателя, ще се потопят в естествената
                  атмосфера на неговия свят, ще научат много за неговия живот и творчество.
                </p>
              </div>
            </div>

            {/* About Elin Pelin */}
            <div className="bg-secondary-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary-600 mb-6">Родната къща на Елин Пелин</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Родната къща на Елин Пелин в с. Байлово, община Горна Малина, е
                  архитектурен образец за типична байловска къща от втората половина на XIX.  В брой
                  87 на Държавен вестник от 1979 г. тя е обявена за исторически паметник на културата
                  от национално значение.
                </p>
                <p className="mb-4">
                  Къщата е построена в годините преди Освобождението, а частта, в която днес се
                  помещава музейната експозиция, е пристроена от Христо – брат на Елин Пелин. В
                  приземния етаж бащата на писателя – Йото Варджията, е организирал и поддържал със
                  собствени средства първото училище в селото.
                </p>
                <p>
                  Имотът е дарен от наследниците на Елин Пелин на държавата и къщата е изцяло
                  реставрирана през 1977 г. по повод 100-годишнината от рождението на писателя от
                  строителна бригада от гр. Копривщица. Същата година е изграден и Дом-паметникът в
                  центъра на селото, в който е разположена документалната експозиция, посветена на
                  живота и творческия път на Елин Пелин.
                </p>
                <p>
                  Битовата експозиция с оригинални предмети пресъздава обстановка от края на
                  XIX – началото на XX в. и атмосферата, в която е отраснал и създал първите си
                  произведения Елин Пелин. Уредена е стаята на писателя с негови лични вещи от
                  времето, когато е бил учител в родното си село. Там се намира библиотеката с книги,
                  които бащата и братята са носели вкъщи, леглото на Елин Пелин, работната маса,
                  мастилницата и писалката му, вещи, свързани с ловуването. В тази стая писателят
                  създава първите си известни разкази – „Ветрената мелница“, „Напаст божия“,
                  „Изкушение“, „Гост“, „Пролетна измама“.
                </p>
                <p>
                  В преддверието на къщата са изложени два портрета – на бащата на Елин Пелин
                  и най-сполучливият маслен портрет на писателя, дело на художника Сергей Ивойлов.
                  В помещението, наречено „в кащи“, са подредени предмети от селския бит – водник,
                  нощови, хурка с вретено, буталка за избиване на масло, миндери, огнището и др. Най-
                  важната част от наредбата е иконостасът с икона на св. Мина, който е изработен
                  саморъчно от бащата на писателя.
                </p>
                <p>
                  Освен къщата музей в имота се намират и широк двор с голям орех (връстник на
                  Елин Пелин), плевня, превърната в битова приемна, навес, под който е събран
                  селскостопански инвентар от онова време – кола с катраница, диканя, веялка, дървено
                  рало и др.
                </p>
                <p>
                  От 7 декември 1987 г. музейната сбирка в с. Байлово е обявена за къща
                  музей „Елин Пелин“ – филиал на Националния литературен музей. През годините
                  се утвърждава като един от най-интересните и посещавани литературни обекти в
                  национален мащаб.
                </p>
                <p>
                  Къща музей „Елин Пелин“ е с № 82б в туристическата карта на БТС със 100-те
                  Национални туристически обекта.
                </p>
                <p>
                  Заповядайте на посещение в Дом-паметник „Елин Пелин“ и къща музей „Елин
                  Пелин“ в село Байлово и ще научите интересни факти от живота на класика на
                  българската литература, майстор на късия разказ.
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
                  <span>Вторник - Събота:</span>
                  <span>8:30 - 12:30</span>
                </div>
                <div className="flex justify-between">
                  <span></span>
                  <span>14:00 - 18:00</span>
                </div>
                <div className="text-sm text-red-600 mt-2">
                  * Почивни дни: Неделя и понеделник
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
                  Село Байлово, Софийска област
                </div>
                <div>
                  <strong>Уредник:</strong><br />
                  Евгения Добрева
                </div>
                <div>
                  <strong>Телефон за справки и записвания:</strong><br />
                  <a href="tel:+359879830153">+359 879 830 153</a>
                </div>
                <div>
                  <strong>Email:</strong><br />
                  <a href="mailto:museum@bailovo.eu">museum@bailovo.eu</a>
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
                  <span>Ученици, Студенти и Пенсионери:</span>
                  <span>3 лв.</span>
                </div>
                <div className="flex justify-between">
                  <span>Беседа:</span>
                  <span>10 лв.</span>
                </div>
                <div className="flex justify-between">
                  <span>Хора в неравностойно положение:</span> 
                  <span>Безплатно</span>
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