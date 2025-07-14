'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { Camera, Heart, Users, Calendar } from 'lucide-react';

export default function GalleryPage() {
  const t = useTranslations('gallery');

  useEffect(() => {
    // Initialize Facebook SDK
    if (typeof window !== 'undefined') {
      // Create fb-root div if it doesn't exist
      if (!document.getElementById('fb-root')) {
        const fbRoot = document.createElement('div');
        fbRoot.id = 'fb-root';
        document.body.appendChild(fbRoot);
      }

      // Load Facebook SDK
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/bg_BG/sdk.js#xfbml=1&version=v23.0';
      document.head.appendChild(script);

      // Parse FB elements after script loads
      script.onload = () => {
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <Camera className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('village_moments')}
              </h3>
              <p className="text-gray-600">
                Спомени от различни моменти в село Байлово
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Общностни събития
              </h3>
              <p className="text-gray-600">
                Снимки от празници и gatherings
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Годишни събития
              </h3>
              <p className="text-gray-600">
                Фотографии от годишни празници
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Albums Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('facebook_albums')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Разгледайте нашите Facebook албуми с моменти от живота в село Байлово
            </p>
          </div>

          {/* Facebook Album Embed */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-600 text-white rounded-full p-3 mr-4">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Село Байлово - Моменти
              </h3>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                {/* <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 text-center">
                    {t('loading')}
                  </p>
                </div> */}
                
                {/* Facebook Album Embed */}
                <div className="flex justify-center">
                  <div className="fb-post" 
                       data-href="https://www.facebook.com/media/set/?set=a.398923035748033" 
                       data-width="640"
                       data-show-text="false">
                    <blockquote 
                      cite="https://www.facebook.com/album.php?fbid=398923035748033&id=100068910189307&aid=1073741828" 
                      className="fb-xfbml-parse-ignore">
                      <p>
                        Posted by <a href="https://www.facebook.com/people/%D0%91%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%BE/100068910189307/">
                          Байлово
                        </a> on{' '}
                        <a href="https://www.facebook.com/album.php?fbid=398923035748033&id=100068910189307&aid=1073741828">
                          Monday, September 26, 2022
                        </a>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Споделете вашите снимки
              </h3>
              <p className="text-gray-600 mb-6">
                Имате снимки от село Байлово? Споделете ги с общността!
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.facebook.com/people/%D0%91%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%BE/100068910189307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Посетете нашата Facebook страница
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// TypeScript declarations for Facebook SDK
declare global {
  interface Window {
    FB: {
      XFBML: {
        parse: () => void;
      };
    };
  }
} 