export interface NewsItem {
  id: string;
  title: string;
  titleEn: string;
  slug: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  date: string;
  author: string;
  authorEn: string;
  category: string;
  categoryEn: string;
  image: string;
  featured: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  titleEn: string;
  slug: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  date: string;
  time: string;
  location: string;
  locationEn: string;
  category: string;
  categoryEn: string;
  image: string;
  featured: boolean;
  ticketPrice?: string;
  maxAttendees?: number;
}

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Нов НЧ „Елин Пелин – 1922” в село Байлово',
    titleEn: 'New Cultural Center in Bailovo Village',
    slug: 'nov-kulturen-centar-v-selo-bailovo',
    excerpt: 'Официално беше открит новият НЧ „Елин Пелин – 1922” в село Байлово, който ще служи като център за културни дейности и общностни събития.',
    excerptEn: 'The new cultural center in Bailovo village was officially opened, which will serve as a center for cultural activities and community events.',
    content: `<p>На 15 март 2024 година официално беше открит новият НЧ „Елин Пелин – 1922” в село Байлово. Церемонията по откриването се проведе в присъствието на местни жители, гости и представители на общинското ръководство.</p>

<p>Читалището разполага с модерна зала за 150 души, която е оборудвана с най-новата аудио и видео техника. Освен основната зала, центърът включва и:</p>

<ul>
<li>Библиотека с богата колекция от книги на български и чуждестранни автори</li>
<li>Изложбена зала за местни художници</li>
<li>Работилници за различни занаяти</li>
<li>Място за отдих и социализация</li>
</ul>

<p>Кметът на селото изрази радостта си от това постижение: "Този център ще бъде сърцето на културния живот в нашето село. Той ще предоставя възможности за обучение, забавление и социално взаимодействие за всички възрасти."</p>

<p>Планират се редовни културни събития, включително:</p>
<ul>
<li>Месечни изложби на местни художници</li>
<li>Литературни вечери посветени на Елин Пелин</li>
<li>Работилници по традиционни занаяти</li>
<li>Концерти и театрални представления</li>
</ul>

<p>Центърът е финансиран с помощта на европейски фондове и дарения от местната общност. Това е важна стъпка в развитието на културния туризъм в региона.</p>`,
    contentEn: `<p>On March 15, 2024, the new cultural center in Bailovo village was officially opened. The opening ceremony was held in the presence of local residents, guests, and representatives of the municipal leadership.</p>

<p>The cultural center features a modern hall for 150 people, equipped with the latest audio and video technology. Besides the main hall, the center includes:</p>

<ul>
<li>A library with a rich collection of books by Bulgarian and foreign authors</li>
<li>An exhibition hall for local artists</li>
<li>Workshops for various crafts</li>
<li>A place for relaxation and socialization</li>
</ul>

<p>The village mayor expressed joy about this achievement: "This center will be the heart of cultural life in our village. It will provide opportunities for learning, entertainment, and social interaction for all ages."</p>

<p>Regular cultural events are planned, including:</p>
<ul>
<li>Monthly exhibitions of local artists</li>
<li>Literary evenings dedicated to Elin Pelin</li>
<li>Traditional crafts workshops</li>
<li>Concerts and theater performances</li>
</ul>

<p>The center is funded through European funds and donations from the local community. This is an important step in the development of cultural tourism in the region.</p>`,
    date: '2024-03-15',
    author: 'Администратор',
    authorEn: 'Administrator',
    category: 'Култура',
    categoryEn: 'Culture',
    image: '/images/cultural-center.jpg',
    featured: true
  },
  {
    id: '2',
    title: 'Реставрация на музея Елин Пелин',
    titleEn: 'Restoration of Elin Pelin Museum',
    slug: 'restavracia-na-muzeja-elin-pelin',
    excerpt: 'Започна мащабна реставрация на музея Елин Пелин в село Байлово, която ще подобри условията за съхранение на експонатите.',
    excerptEn: 'A major restoration of the Elin Pelin Museum in Bailovo village has begun, which will improve conditions for preserving the exhibits.',
    content: `<p>Започна дългоочакваната реставрация на музея Елин Пелин в село Байлово. Проектът, финансиран от Министерството на културата, има за цел да подобри условията за съхранение на ценните експонати и да направи музея по-достъпен за посетители.</p>

<p>Реставрационните работи включват:</p>
<ul>
<li>Обновяване на покрива и фасадата на сградата</li>
<li>Модернизация на системите за климатичен контрол</li>
<li>Инсталиране на нова система за сигурност</li>
<li>Създаване на достъпна среда за хора с увреждания</li>
</ul>

<p>Директорът на музея, д-р Мария Петрова, коментира: "Тази реставрация ще ни позволи да съхраним по-добре наследството на Елин Пелин и да предложим по-богато преживяване на нашите посетители."</p>

<p>По време на реставрацията музеят ще остане отворен за посетители, като експонатите временно са преместени в съседна сграда. Очаква се работите да приключат до края на 2024 година.</p>`,
    contentEn: `<p>The long-awaited restoration of the Elin Pelin Museum in Bailovo village has begun. The project, funded by the Ministry of Culture, aims to improve conditions for preserving valuable exhibits and make the museum more accessible to visitors.</p>

<p>The restoration work includes:</p>
<ul>
<li>Renovation of the building's roof and facade</li>
<li>Modernization of climate control systems</li>
<li>Installation of a new security system</li>
<li>Creating an accessible environment for people with disabilities</li>
</ul>

<p>The museum director, Dr. Maria Petrova, commented: "This restoration will allow us to better preserve Elin Pelin's legacy and offer a richer experience to our visitors."</p>

<p>During the restoration, the museum will remain open to visitors, with exhibits temporarily moved to a neighboring building. The work is expected to be completed by the end of 2024.</p>`,
    date: '2024-02-20',
    author: 'Мария Петрова',
    authorEn: 'Maria Petrova',
    category: 'Музей',
    categoryEn: 'Museum',
    image: '/images/museum-restoration.jpg',
    featured: false
  },
  {
    id: '3',
    title: 'Нови пешеходни маршрути около село Байлово',
    titleEn: 'New Hiking Trails Around Bailovo Village',
    slug: 'novi-peshehodni-marshruti-okolo-selo-bailovo',
    excerpt: 'Бяха открити три нови пешеходни маршрута, които водят до живописни места в околностите на село Байлово.',
    excerptEn: 'Three new hiking trails have been opened, leading to scenic spots around Bailovo village.',
    content: `<p>Местната общност в село Байлово с гордост обявява откриването на три нови пешеходни маршрута, които ще позволят на посетителите да се насладят на красивата природа в региона.</p>

<p>Новите маршрути включват:</p>
<ul>
<li><strong>Маршрут "Елин Пелин"</strong> - 5 км кръгов маршрут, който води до любимите места на писателя</li>
<li><strong>Маршрут "Панорама"</strong> - 3 км маршрут до възвишението с прекрасна гледка към София</li>
<li><strong>Маршрут "Горска приказка"</strong> - 7 км маршрут през гората с места за пикник</li>
</ul>

<p>Всички маршрути са подходящи за хора с различна физическа подготовка и са маркирани с ясни указателни табели. По пътеките са поставени пейки за почивка и информационни табла за местната флора и фауна.</p>

<p>Тези маршрути са част от по-широка инициатива за развитие на екотуризма в региона и се очаква да привлекат повече посетители в село Байлово.</p>`,
    contentEn: `<p>The local community in Bailovo village proudly announces the opening of three new hiking trails that will allow visitors to enjoy the beautiful nature in the region.</p>

<p>The new trails include:</p>
<ul>
<li><strong>"Elin Pelin" Trail</strong> - 5 km circular route leading to the writer's favorite places</li>
<li><strong>"Panorama" Trail</strong> - 3 km trail to the hill with a beautiful view of Sofia</li>
<li><strong>"Forest Tale" Trail</strong> - 7 km trail through the forest with picnic spots</li>
</ul>

<p>All trails are suitable for people with different levels of physical fitness and are marked with clear signboards. Benches for rest and information boards about local flora and fauna have been placed along the paths.</p>

<p>These trails are part of a broader initiative for ecotourism development in the region and are expected to attract more visitors to Bailovo village.</p>`,
    date: '2024-01-10',
    author: 'Георги Николов',
    authorEn: 'Georgi Nikolov',
    category: 'Туризъм',
    categoryEn: 'Tourism',
    image: '/images/hiking-trails.jpg',
    featured: false
  }
];

export const mockEvents: EventItem[] = [
  {
    id: '1',
    title: 'Фестивал на народните занаяти',
    titleEn: 'Folk Crafts Festival',
    slug: 'festival-na-narodnite-zanayati',
    excerpt: 'Традиционен фестивал, посветен на народните занаяти и традиции на село Байлово.',
    excerptEn: 'Traditional festival dedicated to folk crafts and traditions of Bailovo village.',
    content: `<p>Поканваме всички жители и гости на село Байлово да се включат в традиционния Фестивал на народните занаяти, който ще се проведе на 15 май 2024 година в центъра на селото.</p>

<p>Програмата на фестивала включва:</p>
<ul>
<li>Демонстрации на традиционни занаяти като тъкачество, грънчарство и дърводелство</li>
<li>Работилници, където посетителите могат да се опитат в различни занаяти</li>
<li>Изложба на ръчно изработени предмети от местни майстори</li>
<li>Фолклорна програма с песни и танци</li>
<li>Традиционна българска кухня</li>
</ul>

<p>Специални гости на фестивала ще бъдат майстори от цялата страна, които ще споделят своите умения и опит. Ще има възможност за закупуване на автентични ръчно изработени предмети.</p>

<p>Входът е свободен за всички посетители. Фестивалът започва в 10:00 часа и продължава до 18:00 часа.</p>

<p>За повече информация: 0888 123 456</p>`,
    contentEn: `<p>We invite all residents and guests of Bailovo village to join the traditional Folk Crafts Festival, which will be held on May 15, 2024 in the village center.</p>

<p>The festival program includes:</p>
<ul>
<li>Demonstrations of traditional crafts such as weaving, pottery, and woodworking</li>
<li>Workshops where visitors can try different crafts</li>
<li>Exhibition of handmade items by local masters</li>
<li>Folklore program with songs and dances</li>
<li>Traditional Bulgarian cuisine</li>
</ul>

<p>Special guests at the festival will be masters from across the country who will share their skills and experience. There will be opportunities to purchase authentic handmade items.</p>

<p>Entry is free for all visitors. The festival starts at 10:00 AM and continues until 6:00 PM.</p>

<p>For more information: 0888 123 456</p>`,
    date: '2024-05-15',
    time: '10:00',
    location: 'Центъра на селото',
    locationEn: 'Village Center',
    category: 'Култура',
    categoryEn: 'Culture',
    image: '/images/folk-festival.jpg',
    featured: true,
    ticketPrice: 'Безплатен',
    maxAttendees: 500
  },
  {
    id: '2',
    title: 'Литературен вечер "Елин Пелин"',
    titleEn: 'Literary Evening "Elin Pelin"',
    slug: 'literaturen-vecher-elin-pelin',
    excerpt: 'Литературен вечер, посветен на живота и творчеството на великия български писател Елин Пелин.',
    excerptEn: 'Literary evening dedicated to the life and work of the great Bulgarian writer Elin Pelin.',
    content: `<p>Читалището в село Байлово организира специален литературен вечер, посветен на живота и творчеството на Елин Пелин. Събитието ще се проведе на 8 юли 2024 година - в деня на рождението на писателя.</p>

<p>Програмата включва:</p>
<ul>
<li>Биографична презентация за живота на Елин Пелин</li>
<li>Четене на откъси от известните му произведения</li>
<li>Изложба на рядки снимки и документи</li>
<li>Дискусия за влиянието на писателя върху българската литература</li>
<li>Специална изложба от музея Елин Пелин</li>
</ul>

<p>Специални гости ще бъдат литературни изследователи от Българската академия на науките и актьори от Народния театър, които ще прочетат откъси от творбите на писателя.</p>

<p>Вечерта ще завърши с посещение на музея Елин Пелин и възможност за разговор с експерти.</p>

<p>Входът е свободен, но местата са ограничени. Препоръчва се предварителна регистрация.</p>`,
    contentEn: `<p>The cultural center in Bailovo village is organizing a special literary evening dedicated to the life and work of Elin Pelin. The event will be held on July 8, 2024 - on the writer's birthday.</p>

<p>The program includes:</p>
<ul>
<li>Biographical presentation about Elin Pelin's life</li>
<li>Reading excerpts from his famous works</li>
<li>Exhibition of rare photos and documents</li>
<li>Discussion about the writer's influence on Bulgarian literature</li>
<li>Special exhibition from the Elin Pelin Museum</li>
</ul>

<p>Special guests will be literary researchers from the Bulgarian Academy of Sciences and actors from the National Theatre, who will read excerpts from the writer's works.</p>

<p>The evening will end with a visit to the Elin Pelin Museum and an opportunity to speak with experts.</p>

<p>Entry is free, but seats are limited. Advance registration is recommended.</p>`,
    date: '2024-07-08',
    time: '19:00',
    location: 'НЧ „Елин Пелин – 1922”',
    locationEn: 'Cultural Center',
    category: 'Литература',
    categoryEn: 'Literature',
    image: '/images/literary-evening.jpg',
    featured: true,
    ticketPrice: 'Безплатен',
    maxAttendees: 80
  },
  {
    id: '3',
    title: 'Есенен фестивал на реколтата',
    titleEn: 'Autumn Harvest Festival',
    slug: 'esen-festival-na-rekoltata',
    excerpt: 'Празник на реколтата с дегустация на местни продукти и традиционна музика.',
    excerptEn: 'Harvest celebration with tasting of local products and traditional music.',
    content: `<p>След успешната реколта това лято, село Байлово се подготвя за традиционния си Есенен фестивал на реколтата. Събитието ще се проведе на 22 септември 2024 година и ще празнува богатата реколта и традициите на селото.</p>

<p>Фестивалът предлага:</p>
<ul>
<li>Дегустация на пресни местни продукти - домати, краставици, зеле</li>
<li>Традиционни български ястия, приготвени от местни домакини</li>
<li>Конкурс за най-голяма тиква и най-вкусен домат</li>
<li>Демонстрация на традиционни методи за консервиране</li>
<li>Фолклорна програма с местни изпълнители</li>
<li>Базар с местни продукти</li>
</ul>

<p>Детската програма включва игри, лицеописване и работилница за създаване на есенни венци.</p>

<p>Фестивалът започва в 14:00 часа и продължава до късно вечерта. Входът е свободен за всички възрасти.</p>

<p>Очакваме всички жители и гости да се включат в този радостен празник на общността!</p>`,
    contentEn: `<p>After this summer's successful harvest, Bailovo village is preparing for its traditional Autumn Harvest Festival. The event will be held on September 22, 2024 and will celebrate the rich harvest and village traditions.</p>

<p>The festival offers:</p>
<ul>
<li>Tasting of fresh local produce - tomatoes, cucumbers, cabbage</li>
<li>Traditional Bulgarian dishes prepared by local housewives</li>
<li>Competition for the biggest pumpkin and tastiest tomato</li>
<li>Demonstration of traditional preservation methods</li>
<li>Folklore program with local performers</li>
<li>Market with local products</li>
</ul>

<p>The children's program includes games, face painting, and a workshop for creating autumn wreaths.</p>

<p>The festival starts at 2:00 PM and continues until late evening. Entry is free for all ages.</p>

<p>We expect all residents and guests to join this joyful community celebration!</p>`,
    date: '2024-09-22',
    time: '14:00',
    location: 'Центъра на селото',
    locationEn: 'Village Center',
    category: 'Традиции',
    categoryEn: 'Traditions',
    image: '/images/harvest-festival.jpg',
    featured: false,
    ticketPrice: 'Безплатен',
    maxAttendees: 300
  }
];

export function getNewsById(id: string): NewsItem | undefined {
  return mockNews.find(item => item.id === id);
}

export function getEventById(id: string): EventItem | undefined {
  return mockEvents.find(item => item.id === id);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return mockNews.find(item => item.slug === slug);
}

export function getEventBySlug(slug: string): EventItem | undefined {
  return mockEvents.find(item => item.slug === slug);
}

export function getFeaturedNews(): NewsItem[] {
  return mockNews.filter(item => item.featured);
}

export function getFeaturedEvents(): EventItem[] {
  return mockEvents.filter(item => item.featured);
}

export function getRecentNews(limit: number = 3): NewsItem[] {
  return mockNews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getUpcomingEvents(limit: number = 3): EventItem[] {
  const today = new Date();
  return mockEvents
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit);
} 