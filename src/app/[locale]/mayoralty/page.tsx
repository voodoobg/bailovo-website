import { useLocale } from 'next-intl';
import { Building, Phone, Mail, Clock, MapPin, Users, FileText, Calendar } from 'lucide-react';

export default function MayoraltyPage() {
  const locale = useLocale();

  const services = [
    {
      icon: FileText,
      title: locale === 'bg' ? 'Административни услуги' : 'Administrative Services',
      description: locale === 'bg' 
        ? 'Издаване на справки, удостоверения и документи' 
        : 'Issuing certificates, references and official documents',
      items: [
        locale === 'bg' ? 'Удостоверения за семейно положение' : 'Marriage certificates',
        locale === 'bg' ? 'Справки за недвижими имоти' : 'Real estate references',
        locale === 'bg' ? 'Удостоверения за наследство' : 'Inheritance certificates',
        locale === 'bg' ? 'Служебни справки' : 'Official references'
      ]
    },
    {
      icon: Building,
      title: locale === 'bg' ? 'Строителство и устройство' : 'Construction & Planning',
      description: locale === 'bg' 
        ? 'Разрешителни за строеж и планиране' 
        : 'Building permits and urban planning',
      items: [
        locale === 'bg' ? 'Разрешителни за строеж' : 'Building permits',
        locale === 'bg' ? 'Виза за проектиране' : 'Design permits',
        locale === 'bg' ? 'Разрешения за ползване' : 'Occupancy permits',
        locale === 'bg' ? 'Устройствени планове' : 'Development plans'
      ]
    },
    {
      icon: Users,
      title: locale === 'bg' ? 'Гражданска регистрация' : 'Civil Registration',
      description: locale === 'bg' 
        ? 'Регистрация на гражданско състояние' 
        : 'Registration of civil status',
      items: [
        locale === 'bg' ? 'Регистрация на раждания' : 'Birth registration',
        locale === 'bg' ? 'Регистрация на бракове' : 'Marriage registration',
        locale === 'bg' ? 'Регистрация на смърт' : 'Death registration',
        locale === 'bg' ? 'Промяна на имена' : 'Name changes'
      ]
    },
    {
      icon: Calendar,
      title: locale === 'bg' ? 'Местни данъци и такси' : 'Local Taxes & Fees',
      description: locale === 'bg' 
        ? 'Плащане на общински данъци' 
        : 'Payment of municipal taxes',
      items: [
        locale === 'bg' ? 'Данък върху недвижимите имоти' : 'Property tax',
        locale === 'bg' ? 'Данък върху превозните средства' : 'Vehicle tax',
        locale === 'bg' ? 'Туристическа такса' : 'Tourist tax',
        locale === 'bg' ? 'Общински такси' : 'Municipal fees'
      ]
    }
  ];

  const contacts = [
    {
      icon: MapPin,
      title: locale === 'bg' ? 'Адрес' : 'Address',
      info: locale === 'bg' ? 'Кметство Байлово, с. Байлово' : 'Bailovo Mayoralty, Bailovo village'
    },
    {
      icon: Phone,
      title: locale === 'bg' ? 'Телефон' : 'Phone',
      info: '0887 XXX XXX'
    },
    {
      icon: Mail,
      title: locale === 'bg' ? 'Email' : 'Email',
      info: 'bailovo@gornamalina.bg'
    },
    {
      icon: Clock,
      title: locale === 'bg' ? 'Работно време' : 'Working Hours',
      info: locale === 'bg' 
        ? 'Понеделник - Петък: 8:00 - 17:00' 
        : 'Monday - Friday: 8:00 - 17:00'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Building className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {locale === 'bg' ? 'Кметство Байлово' : 'Bailovo Mayoralty'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {locale === 'bg' 
                ? 'Административни услуги и обслужване на граждани в село Байлово' 
                : 'Administrative services and citizen services in Bailovo village'}
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
                {locale === 'bg' ? 'За кметството' : 'About the Mayoralty'}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {locale === 'bg' 
                  ? 'Кметство Байлово е част от община Горна Малина, Софийска област. Обслужава жителите на село Байлово и предоставя широк спектър от административни услуги.'
                  : 'Bailovo Mayoralty is part of Gorna Malina Municipality, Sofia District. It serves the residents of Bailovo village and provides a wide range of administrative services.'
                }
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {locale === 'bg' 
                  ? 'Нашият екип се стреми да предоставя качествено и навременно обслужване на всички граждани, като улеснява административните процедури и поддържа открит диалог с общността.'
                  : 'Our team strives to provide quality and timely service to all citizens, facilitating administrative procedures and maintaining an open dialogue with the community.'
                }
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'bg' ? 'Основни функции' : 'Main Functions'}
              </h3>
              <ul className="space-y-3">
                {[
                  locale === 'bg' ? 'Административно обслужване' : 'Administrative services',
                  locale === 'bg' ? 'Поддържане на регистри' : 'Registry maintenance',
                  locale === 'bg' ? 'Изпълнение на общински решения' : 'Implementation of municipal decisions',
                  locale === 'bg' ? 'Връзка с общинската администрация' : 'Liaison with municipal administration',
                  locale === 'bg' ? 'Организация на местни събития' : 'Organization of local events'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'bg' ? 'Услуги' : 'Services'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Предлагаме широк спектър от административни услуги за жителите на село Байлово'
                : 'We offer a wide range of administrative services for the residents of Bailovo village'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
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
              {locale === 'bg' ? 'Контакти' : 'Contact Information'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'bg' 
                ? 'Свържете се с нас за всички административни въпроси и услуги'
                : 'Contact us for all administrative questions and services'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-100 rounded-full">
                    <contact.icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 