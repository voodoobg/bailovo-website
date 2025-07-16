'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactPage() {
  const t = useTranslations('contact');
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setStatus({ type: 'loading', message: 'Изпращане на съобщението...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: result.message
        });
        // Reset form on success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Възникна грешка при изпращането на съобщението.'
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Възникна грешка при изпращането на съобщението. Моля проверете интернет връзката си.'
      });
    }
  };

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
                    <p className="text-gray-600">Читалище: <a href="tel:+359876734728">+359 876 734 728</a></p>
                    <p className="text-gray-600">Кметство: <a href="tel:+359882445409">+359 882 445 409</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-600 mb-1">{t('email')}</h3>
                    <p className="text-gray-600">Читалище: <a href="mailto:info@bailovo.bg">info@bailovo.bg</a></p>
                    <p className="text-gray-600">Кметство: <a href="mailto:baylovo@gornamalina.bg">baylovo@gornamalina.bg</a></p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-600 mb-1">{t('open_times')}</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>{t('monday_friday')}: 9:00 - 17:00</p>
                      <p>{t('saturday')}: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-secondary-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-primary-600 mb-6">{t('useful_links')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary-600 mb-2"><a href="https://tourism.gornamalina.bg">Туристически портал община Горна Малина</a></h3>
                  </div>
                  <div>
                   <h3 className="font-semibold text-primary-600 mb-2"><a href="https://www.nlmuseum.bg">Национален литературен музей</a></h3>
                  </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-strong p-8">
            <h2 className="text-2xl font-bold text-primary-600 mb-6">{t('send_message')}</h2>
            
            {/* Status Message */}
            {status.type !== 'idle' && (
              <div className={`p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-50 border border-green-200' 
                  : status.type === 'error'
                  ? 'bg-red-50 border border-red-200'
                  : 'bg-blue-50 border border-blue-200'
              }`}>
                <div className="flex items-center">
                  {status.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600 mr-2" />}
                  {status.type === 'error' && <AlertCircle className="w-5 h-5 text-red-600 mr-2" />}
                  {status.type === 'loading' && (
                    <svg className="animate-spin w-5 h-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  <span className={`${
                    status.type === 'success' 
                      ? 'text-green-800' 
                      : status.type === 'error'
                      ? 'text-red-800'
                      : 'text-blue-800'
                  }`}>
                    {status.message}
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
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
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors text-gray-900"
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
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors text-gray-900"
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
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors text-gray-900"
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
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors text-gray-900"
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
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors resize-vertical text-gray-900"
                  placeholder={t('form_message_description')}
                />
              </div>

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center ${
                  status.type === 'loading' 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-secondary-500 hover:bg-secondary-600'
                } text-white`}
              >
                {status.type === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Изпращане...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t('form_submit')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 