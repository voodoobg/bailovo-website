'use client';

import { useTranslations } from 'next-intl';
import { 
  Church, 
  MapPin, 
  Clock, 
  Users, 
  Camera,
  Mountain,
  Heart
} from 'lucide-react';

export default function ChapelPage() {
  const t = useTranslations('chapel');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full shadow-xl">
                <Church className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">{t('location_title')}</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('location_description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">{t('history_title')}</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('history_description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Historical Importance */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Mountain className="w-8 h-8 text-amber-600" />
                <h3 className="text-2xl font-bold text-gray-900">{t('historical_importance')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('historical_importance_description')}
              </p>
            </div>

            {/* Architecture */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Church className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">{t('architecture_title')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('architecture_description')}
              </p>
            </div>

            {/* Current State */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">{t('current_state_title')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('current_state_description')}
              </p>
            </div>

            {/* Cultural Significance */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900">{t('cultural_significance_title')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('cultural_significance_description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Information */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('visiting_info_title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('visiting_info_description')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 