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
              {t('content')}
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary-600 mb-8">Исторически моменти</h2>
            
            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <div className="bg-white rounded-lg shadow-soft p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-2">1877 г.</h3>
                    <p className="text-gray-600">
                      На 8 юли 1877 г. в село Байлово се ражда Димитър Иванов Стоянов, 
                      по-късно известен под псевдонима Елин Пелин. Това събитие поставя 
                      селото на литературната карта на България.
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
                    <h3 className="text-xl font-semibold text-primary-600 mb-2">Средновековие</h3>
                    <p className="text-gray-600">
                      През Средновековието селото е било част от важните търговски пътища, 
                      свързващи София с южните части на Българското царство. Археологическите 
                      находки свидетелстват за богата търговска дейност.
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
                    <h3 className="text-xl font-semibold text-primary-600 mb-2">Османски период</h3>
                    <p className="text-gray-600">
                      По време на османското владичество селото запазва своята българска 
                      идентичност. Местното население се занимава предимно със земеделие 
                      и животновъдство.
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
                    <h3 className="text-xl font-semibold text-primary-600 mb-2">XX век</h3>
                    <p className="text-gray-600">
                      След Освобождението селото продължава да се развива като земеделски 
                      център. Строят се нови сгради, развива се образованието и културата. 
                      Родната къща на Елин Пелин се превръща в литературен музей.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Heritage */}
          <div className="bg-white rounded-lg shadow-strong p-8 mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-6">Културно наследство</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Архитектура</h3>
                <p className="text-gray-600">
                  Селото съхранява характерната за региона архитектура от XIX век. 
                  Традиционните къщи с каменни основи и дървени етажи са типични 
                  за Софийското поле.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Традиции</h3>
                <p className="text-gray-600">
                  Байлово е запазило много от старинните български традиции и обичаи. 
                  Празниците се честват по традиционния начин, а фолклорът се предава 
                  от поколение на поколение.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 