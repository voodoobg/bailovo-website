import { useTranslations } from 'next-intl';
import { Clock, MapPin, User } from 'lucide-react';

export default function HistoryPage() {
  const t = useTranslations('history');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
            {t('title')}
          </h1>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-secondary-100 rounded-lg p-8 mb-12">
            <p className="text-xl leading-relaxed text-gray-700 mb-0">
              {t('content')}<br /><br />
              {t('content2')}<br /><br />
              {t('content3')}
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary-600 mb-8">{t('historical_moments')}</h2>
            
            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <div className="bg-white rounded-lg shadow-soft p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-2">{t('timeline.1877_title')}</h3>
                    <p className="text-gray-600">
                      {t('timeline.1877_content')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <div className="bg-white rounded-lg shadow-soft p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-2">{t('timeline.medieval_title')}</h3>
                    <p className="text-gray-600">
                      {t('timeline.medieval_content')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <div className="bg-white rounded-lg shadow-soft p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-2">{t('timeline.ottoman_title')}</h3>
                    <p className="text-gray-600">
                      {t('timeline.ottoman_content')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <div className="bg-white rounded-lg shadow-soft p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-2">{t('timeline.20th_century_title')}</h3>
                    <p className="text-gray-600">
                      {t('timeline.20th_century_content')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary-100 rounded-lg p-8 mb-12">
            <p className="text-xl leading-relaxed text-gray-700 mb-0">
              {t('content4')}<br /><br />
              {t('content5')}<br /><br />
              {t('content6')}<br /><br />
              {t('content7')}<br /><br />
              {t('content8')}
            </p>
          </div>

          {/* Cultural Heritage */}
          <div className="bg-white rounded-lg shadow-strong p-8 mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-6">{t('cultural_heritage')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">{t('architecture_title')}</h3>
                <p className="text-gray-600">
                  {t('architecture_content')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">{t('traditions_title')}</h3>
                <p className="text-gray-600">
                  {t('traditions_content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 