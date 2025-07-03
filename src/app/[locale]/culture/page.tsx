import { useLocale } from 'next-intl';
import { Users, Calendar, Music, Book, Theater, Camera, Globe, Heart, Star, Trophy } from 'lucide-react';

export default function CulturePage() {
  const locale = useLocale();

    const services = locale === 'bg' ? [
    {
      icon: Globe,
      title: 'Информационни услуги',
      description: 'Достъп до информация, електронни услуги, търсене на работа и попълване на документи.'
    },
    {
      icon: Book,
      title: 'Богата библиотека',
      description: 'Над 13 515 тома литература и разнообразен библиотечен фонд.'
    },
    {
      icon: Camera,
      title: 'Изложби и тържества',
      description: 'Организиране на изложби, тържества и мероприятия за всички възрасти.'
    },
    {
      icon: Theater,
      title: 'Театрални постановки',
      description: 'Богата театрална традиция с корени от времето на Елин Пелин.'
    },
    {
      icon: Music,
      title: 'Фолклорни прояви',
      description: 'Съхранение на над 800 байловски песни, обичаи и обреди.'
    },
    {
      icon: Trophy,
      title: 'Регионални празници',
      description: 'Домакин на „Който се смее, дълго живее" и други значими събития.'
    }
  ] : [
    {
      icon: Globe,
      title: 'Information Services',
      description: 'Access to information, electronic services, job searching and document completion.'
    },
    {
      icon: Book,
      title: 'Rich Library',
      description: 'Over 13,515 volumes of literature and diverse library collection.'
    },
    {
      icon: Camera,
      title: 'Exhibitions & Events',
      description: 'Organization of exhibitions, celebrations and events for all ages.'
    },
    {
      icon: Theater,
      title: 'Theater Productions',
      description: 'Rich theatrical tradition with roots from Elin Pelin\'s time.'
    },
    {
      icon: Music,
      title: 'Folk Performances',
      description: 'Preservation of over 800 Bailovo songs, customs and rituals.'
    },
    {
      icon: Trophy,
      title: 'Regional Festivals',
      description: 'Host of "He Who Laughs, Lives Long" and other significant events.'
    }
  ];

    const historyTimeline = locale === 'bg' ? [
    {
      year: '1922',
      title: 'Основаване',
      description: 'На 10 декември родолюбиви и ентусиазирани байловчани, по предложение на Елин Пелин, основават Народно читалище "Елин Пелин - 1922". За първи председател е избран Захари Велков.'
    },
    {
      year: '1922-1928',
      title: 'Първи години в родната къща',
      description: 'През първите 6 години читалището се помещава в родната къща на Елин Пелин. Първите книги са подарени от Министерство на народното просвещение с министър Стоян Омарчевски, който одобрява и устава. Инвентарът за обзавеждането е събран от дарители байловци.'
    },
    {
      year: '1895-1928',
      title: 'Просветителски период',
      description: 'Читалището е първото и единствено духовно средище в Байлово. Провеждат се вечерни четения на разкази на Елин Пелин, Иван Вазов и др. Театралната самодейност води началото си от 1895 г., когато Елин Пелин е учител в селото и изиграва ролята на Левски в "Обесването на Левски".'
    },
    {
      year: '1940-те',
      title: 'Нова енергия под ръководството на Димитър Йончев',
      description: 'Читалищната дейност се поема от Димитър Йончев. Организират се четения, които излизат извън рамките на читалището - чете се и по седенки. Закупува се първият в селото батериен радиоапарат.'
    },
    {
      year: '1944-1950',
      title: 'Период на активна работа',
      description: 'След 1944 г. настъпва период на активна работа. Събират се оцелелите книги, създава се младежки хор, изнасят се много пиеси. Културната дейност процъфтява с нов размах.'
    },
    {
      year: '1950',
      title: 'Институционално партньорство',
      description: 'ББИ "Елин Пелин" с тогавашния директор Т. Боров поемат шефство над читалището. Подарени са много книги. Установяват се връзки с института за чуждестранна литература в Москва.'
    },
    {
      year: '1961',
      title: 'Модернизация на библиотеката',
      description: 'Създава се свободен достъп до книгите в библиотеката. Започва активна работа по документиране на местната история и фолклор.'
    },
    {
      year: '1960-1970',
      title: 'Събиране на културното наследство',
      description: 'Пише се историята на село Байлово. Събрани са и нотирани над 800 байловски песни, записани са обичаи и обреди. Никола Стоев събира и издава чрез БАН архивни материали - "Прототипите на героите на Елин Пелин".'
    },
    {
      year: '1977',
      title: 'Дом-паметник "Елин Пелин"',
      description: 'На 11 ноември се открива построеният в чест на 100-годишнината от рождението на Елин Пелин Дом-паметник "Елин Пелин", както и реставрираната родна къща-музей. От откриването досега са преминали стотици хиляди посетители от цялата страна и чужбина.'
    }
  ] : [
    {
      year: '1922',
      title: 'Foundation',
      description: 'On December 10, patriotic and enthusiastic Bailovo residents, on Elin Pelin\'s proposal, founded the Community Center "Elin Pelin - 1922". Zachary Velkov was elected as the first chairman.'
    },
    {
      year: '1922-1928',
      title: 'Early Years in the Birth Home',
      description: 'During the first 6 years, the center was housed in Elin Pelin\'s birth home. The first books were donated by the Ministry of Public Education with Minister Stoyan Omarchevski, who also approved the charter. Equipment inventory was collected from Bailovo donors.'
    },
    {
      year: '1895-1928',
      title: 'Educational Period',
      description: 'The center was the first and only spiritual center in Bailovo at that time. Evening readings of stories by Elin Pelin, Ivan Vazov and others were held. Theatrical activities began in 1895 when Elin Pelin was a teacher in the village and played the role of Levski in "The Hanging of Levski".'
    },
    {
      year: '1940s',
      title: 'New Energy under Dimitar Yonchev\'s Leadership',
      description: 'Center activities were taken over by Dimitar Yonchev. Readings were organized that went beyond the center\'s framework - reading sessions were held at gatherings. The first battery radio in the village was purchased.'
    },
    {
      year: '1944-1950',
      title: 'Period of Active Work',
      description: 'After 1944, a period of active work began. Surviving books were collected, a youth choir was created, and many plays were performed. Cultural activities flourished with new scope.'
    },
    {
      year: '1950',
      title: 'Institutional Partnership',
      description: 'BBI "Elin Pelin" with then-director T. Borov took patronage over the center. Many books were donated. Connections were established with the Institute for Foreign Literature in Moscow.'
    },
    {
      year: '1961',
      title: 'Library Modernization',
      description: 'Free access to books in the library was established. Active work began on documenting local history and folklore.'
    },
    {
      year: '1960-1970',
      title: 'Cultural Heritage Collection',
      description: 'The history of Bailovo village was written. Over 800 Bailovo songs were collected and notated, customs and rituals were recorded. Nikola Stoev collected and published through BAS archival materials - "The Prototypes of Elin Pelin\'s Heroes".'
    },
    {
      year: '1977',
      title: 'Memorial House "Elin Pelin"',
      description: 'On November 11, the Memorial House "Elin Pelin" was opened, built in honor of the 100th anniversary of Elin Pelin\'s birth, along with the restored birth home-museum. Since opening, hundreds of thousands of visitors from all over the country and abroad have passed through.'
    }
  ];

    const currentActivities = locale === 'bg' ? [
    {
      icon: Users,
      title: 'Общностни събития',
      description: 'Активно участие в живота на селото и културното развитие на общността.'
    },
    {
      icon: Calendar,
      title: 'Традиционни празници',
      description: 'Коледуване, Сурвакари, Лазаруване и други български традиции.'
    },
    {
      icon: Heart,
      title: 'Хуморен фестивал',
      description: 'Ежегоден регионален празник "Който се смее, дълго живее".'
    },
    {
      icon: Star,
      title: 'Самодейност',
      description: 'Школа за любителско народно творчество с богата история.'
    }
  ] : [
    {
      icon: Users,
      title: 'Community Events',
      description: 'Active participation in village life and cultural development of the community.'
    },
    {
      icon: Calendar,
      title: 'Traditional Holidays',
      description: 'Caroling, Survakari, Lazaruvane and other Bulgarian traditions.'
    },
    {
      icon: Heart,
      title: 'Humor Festival',
      description: 'Annual regional celebration "He Who Laughs, Lives Long".'
    },
    {
      icon: Star,
      title: 'Amateur Arts',
      description: 'School for amateur folk art with rich history.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
                      <h1 className="text-4xl md:text-5xl font-black text-primary-600 mb-6">
              {locale === 'bg' ? 'Народно читалище "Елин Пелин-1922"' : 'Community Center "Elin Pelin-1922"'}
            </h1>
            <div className="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {locale === 'bg' 
                ? 'Сърцето на културния живот в село Байлово - място, където традицията среща модерността, а духовното наследство се предава от поколение на поколение'
                : 'The heart of cultural life in Bailovo village - a place where tradition meets modernity, and spiritual heritage is passed from generation to generation'
              }
            </p>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary-600 text-center mb-12">
            {locale === 'bg' ? 'Услуги и възможности' : 'Services and Opportunities'}
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
            {locale === 'bg' ? 'Богата история от повече от век' : 'Rich History of Over a Century'}
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

        {/* Monument Information */}
        <div className="bg-gradient-to-r from-secondary-100 to-secondary-200 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">
                 {locale === 'bg' ? 'Дом-паметник "Елин Пелин"' : 'Memorial House "Elin Pelin"'}
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {locale === 'bg' 
                      ? 'Открит на 11 ноември 1977 г. в чест на 100-годишнината от рождението на Елин Пелин. Домът-паметник е уникален културен комплекс, който съчетава съвременни възможности с историческо наследство.'
                      : 'Opened on November 11, 1977, in honor of the 100th anniversary of Elin Pelin\'s birth. The memorial house is a unique cultural complex that combines modern facilities with historical heritage.'
                    }
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {locale === 'bg'
                      ? 'Музейната експозиция "Живот и творчество на Елин Пелин" е посетена от стотици хиляди посетители от цялата страна и чужбина, превръщайки се в истински културен магнит.'
                      : 'The museum exhibition "Life and Work of Elin Pelin" has been visited by hundreds of thousands of visitors from all over the country and abroad, becoming a true cultural magnet.'
                    }
                  </p>
              </div>
            </div>
                         <div className="bg-white rounded-2xl p-6 shadow-soft">
               <h3 className="text-xl font-semibold text-primary-600 mb-4">
                 {locale === 'bg' ? 'Съоръжения' : 'Facilities'}
               </h3>
               <div className="space-y-3">
                 <div className="flex items-center space-x-3">
                   <Theater className="w-5 h-5 text-secondary-500" />
                   <span className="text-gray-700">
                     {locale === 'bg' ? 'Киносалон със 185 места' : 'Cinema hall with 185 seats'}
                   </span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <Book className="w-5 h-5 text-secondary-500" />
                   <span className="text-gray-700">
                     {locale === 'bg' ? 'Библиотека с 13 515 тома' : 'Library with 13,515 volumes'}
                   </span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <Camera className="w-5 h-5 text-secondary-500" />
                   <span className="text-gray-700">
                     {locale === 'bg' ? 'Музейна експозиция' : 'Museum exhibition'}
                   </span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <Users className="w-5 h-5 text-secondary-500" />
                   <span className="text-gray-700">
                     {locale === 'bg' ? 'Малки зали и гримьорни' : 'Small halls and dressing rooms'}
                   </span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Current Activities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary-600 text-center mb-12">
            {locale === 'bg' ? 'Съвременни дейности' : 'Current Activities'}
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

        {/* Future Vision */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
          <div className="text-center">
                         <h2 className="text-3xl font-bold mb-6">
               {locale === 'bg' ? 'Визия за бъдещето' : 'Vision for the Future'}
             </h2>
             <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
               {locale === 'bg' 
                 ? 'Чрез своята художествено-творческа и културно-просветна дейност, Народно читалище "Елин Пелин-1922" ще продължи да участва в духовното обогатяване на байловчани и културното развитие на село Байлово в партньорство с местните институции и организации.'
                 : 'Through its artistic-creative and cultural-educational activities, Community Center "Elin Pelin-1922" will continue to participate in the spiritual enrichment of Bailovo residents and the cultural development of Bailovo village in partnership with local institutions and organizations.'
               }
             </p>
             <div className="flex flex-wrap justify-center gap-4">
               <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                 <span className="text-sm font-medium">
                   {locale === 'bg' ? 'Общинско ръководство' : 'Municipal leadership'}
                 </span>
               </div>
               <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                 <span className="text-sm font-medium">
                   {locale === 'bg' ? 'Кметство' : 'Mayor\'s office'}
                 </span>
               </div>
               <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                 <span className="text-sm font-medium">
                   {locale === 'bg' ? 'Местни фирми' : 'Local companies'}
                 </span>
               </div>
               <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                 <span className="text-sm font-medium">
                   {locale === 'bg' ? 'Пенсионерска организация' : 'Pensioners\' organization'}
                 </span>
               </div>
               <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                 <span className="text-sm font-medium">
                   {locale === 'bg' ? 'Музейни работници' : 'Museum workers'}
                 </span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
} 