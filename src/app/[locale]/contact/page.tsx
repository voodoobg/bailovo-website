import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* OpenStreetMap Embed */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">{t('location')}</h2>
            <p className="text-lg text-gray-600">{t('location_description')}</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-strong border border-gray-200">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=23.75%2C42.63%2C23.85%2C42.67&layer=mapnik&marker=42.65659%2C23.81982"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта на село Байлово"
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <a
              href="https://www.openstreetmap.org/?mlat=42.650&mlon=23.817#map=14/42.650/23.817"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-secondary-500 hover:text-secondary-600 font-medium transition-colors duration-200"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Отвори в OpenStreetMap
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
            {t('title')}
          </h1>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свържете се с нас за повече информация за село Байлово
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-strong p-8">
              <h2 className="text-2xl font-bold text-primary-600 mb-6">{t('contact_information')}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-600 mb-1">{t('address')}</h3>
                    <p className="text-gray-600">{t('address_description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-600 mb-1">{t('phone')}</h3>
                    <p className="text-gray-600">+359 888 888 888</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-600 mb-1">{t('email')}</h3>
                    <p className="text-gray-600">info@bailovo.eu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-600 mb-1">{t('open_times')}</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>{t('monday_friday')}: 9:00 - 17:00</p>
                      <p>{t('saturday')}: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-secondary-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-primary-600 mb-6">{t('useful_links')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-primary-600 mb-2">{t('museum')}</h3>
                                     <p className="text-gray-600 text-sm">museum@bailovo.eu</p>
                  </div>
                  <div>
                   <h3 className="font-semibold text-primary-600 mb-2">{t('culture')}</h3>
                   <p className="text-gray-600 text-sm">culture@bailovo.eu</p>
                  </div>
                  <div>
                   <h3 className="font-semibold text-primary-600 mb-2">{t('mayor')}</h3>
                   <p className="text-gray-600 text-sm">mayor@bailovo.eu</p>
                  </div>
                  <div>
                   <h3 className="font-semibold text-primary-600 mb-2">{t('tourism')}</h3>
                   <p className="text-gray-600 text-sm">tourism@bailovo.eu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-strong p-8">
            <h2 className="text-2xl font-bold text-primary-600 mb-6">{t('send_message')}</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form_name')} *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors"
                    placeholder={t('form_name_description')}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form_last_name')} *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors"
                    placeholder={t('form_last_name_description')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form_email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form_subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors"
                  placeholder={t('form_subject_description')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form_message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors resize-vertical"
                  placeholder={t('form_message_description')}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('form_submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 