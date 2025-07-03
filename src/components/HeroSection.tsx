'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('homepage.hero');
  const tNav = useTranslations('navigation');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-green-50 to-white overflow-hidden -mt-20">
      {/* Animated Background Scene - Full Width */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        {/* Sky with clouds - Extended coverage */}
        <div className="absolute inset-0 w-full h-full">
          {/* Floating clouds - More coverage */}
          <div className="absolute top-16 left-5 w-40 h-20 bg-white rounded-full opacity-80 animate-float" style={{animationDuration: '20s'}}></div>
          <div className="absolute top-24 right-10 w-32 h-16 bg-white rounded-full opacity-70 animate-float" style={{animationDuration: '25s', animationDelay: '5s'}}></div>
          <div className="absolute top-20 left-1/3 w-28 h-14 bg-white rounded-full opacity-75 animate-float" style={{animationDuration: '30s', animationDelay: '10s'}}></div>
          <div className="absolute top-32 left-2/3 w-24 h-12 bg-white rounded-full opacity-65 animate-float" style={{animationDuration: '35s', animationDelay: '15s'}}></div>
          <div className="absolute top-28 right-1/4 w-36 h-18 bg-white rounded-full opacity-70 animate-float" style={{animationDuration: '28s', animationDelay: '8s'}}></div>
        </div>

        {/* Mountains/Hills in background - Full width */}
        <div className="absolute bottom-0 left-0 w-full h-80">
          <svg viewBox="0 0 1400 350" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,350 L0,180 Q200,120 400,160 Q600,140 800,180 Q1000,120 1200,160 L1400,140 L1400,350 Z" fill="#e5f3e5" opacity="0.6"/>
            <path d="M0,350 L0,220 Q300,180 600,200 Q900,160 1200,190 L1400,180 L1400,350 Z" fill="#d1e7dd" opacity="0.8"/>
            <path d="M0,350 L0,280 Q400,240 800,260 Q1000,240 1400,250 L1400,350 Z" fill="#c8e6c8" opacity="0.9"/>
          </svg>
        </div>

        {/* Village Houses - Multiple diverse houses */}
        
        {/* House 1 - Traditional red roof house (far right) */}
        <div className="absolute bottom-18 right-1/4 transform scale-90 md:scale-110">
          <svg width="140" height="120" viewBox="0 0 140 120" className="drop-shadow-lg">
            <rect x="25" y="60" width="70" height="60" fill="#8B4513" stroke="#654321" strokeWidth="2"/>
            <polygon points="20,60 60,25 100,60" fill="#DC143C" stroke="#B91C3C" strokeWidth="2"/>
            <rect x="42" y="85" width="16" height="35" fill="#4A5568" stroke="#2D3748" strokeWidth="1"/>
            <rect x="65" y="70" width="12" height="12" fill="#87CEEB" stroke="#4682B4" strokeWidth="1"/>
            <rect x="65" y="95" width="12" height="12" fill="#87CEEB" stroke="#4682B4" strokeWidth="1"/>
            <rect x="75" y="30" width="10" height="30" fill="#696969" stroke="#2F4F4F" strokeWidth="1"/>
            <circle cx="80" cy="24" r="2.5" fill="#D3D3D3" opacity="0.7" className="animate-bounce" style={{animationDelay: '0s'}}/>
            <circle cx="82" cy="18" r="2" fill="#D3D3D3" opacity="0.6" className="animate-bounce" style={{animationDelay: '0.5s'}}/>
            <circle cx="78" cy="12" r="1.5" fill="#D3D3D3" opacity="0.5" className="animate-bounce" style={{animationDelay: '1s'}}/>
          </svg>
        </div>

        {/* House 2 - Small cottage (far left) */}
        <div className="absolute bottom-16 left-1/20 transform scale-75 md:scale-90">
          <svg width="100" height="90" viewBox="0 0 100 90" className="drop-shadow-lg">
            <rect x="15" y="45" width="50" height="45" fill="#D2B48C" stroke="#A0522D" strokeWidth="2"/>
            <polygon points="12,45 40,20 68,45" fill="#8B4513" stroke="#654321" strokeWidth="2"/>
            <rect x="28" y="65" width="10" height="25" fill="#4A5568" stroke="#2D3748" strokeWidth="1"/>
            <rect x="45" y="55" width="8" height="8" fill="#87CEEB" stroke="#4682B4" strokeWidth="1"/>
            <rect x="45" y="75" width="8" height="8" fill="#87CEEB" stroke="#4682B4" strokeWidth="1"/>
          </svg>
        </div>

        {/* House 3 - Blue house with flat roof (left-center) */}
        <div className="absolute bottom-16 left-1/4 transform scale-80 md:scale-95">
          <svg width="110" height="100" viewBox="0 0 110 100" className="drop-shadow-lg">
            <rect x="20" y="50" width="60" height="50" fill="#4682B4" stroke="#2F4F4F" strokeWidth="2"/>
            <rect x="15" y="45" width="70" height="8" fill="#2F4F4F" stroke="#1C1C1C" strokeWidth="1"/>
            <rect x="38" y="75" width="14" height="25" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
            <rect x="25" y="60" width="10" height="10" fill="#FFE4B5" stroke="#DEB887" strokeWidth="1"/>
            <rect x="55" y="60" width="10" height="10" fill="#FFE4B5" stroke="#DEB887" strokeWidth="1"/>
            <rect x="40" y="85" width="10" height="15" fill="#FFE4B5" stroke="#DEB887" strokeWidth="1"/>
            {/* Door handle */}
            <circle cx="47" cy="88" r="1" fill="#000000"/>
          </svg>
        </div>

        {/* House 4 - Green house with curved roof (center-left) */}
        <div className="absolute bottom-24 right-0 transform scale-70 md:scale-85">
          <svg width="95" height="85" viewBox="0 0 95 85" className="drop-shadow-lg">
            <rect x="17" y="45" width="55" height="40" fill="#90EE90" stroke="#228B22" strokeWidth="2"/>
            <path d="M12,45 Q47,15 82,45" fill="#654321" stroke="#4A5568" strokeWidth="2"/>
            <rect x="33" y="65" width="12" height="20" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
            <rect x="50" y="55" width="8" height="8" fill="#87CEEB" stroke="#4682B4" strokeWidth="1"/>
            <rect x="22" y="55" width="8" height="8" fill="#87CEEB" stroke="#4682B4" strokeWidth="1"/>
            <rect x="22" y="70" width="8" height="8" fill="#87CEEB" stroke="#4682B4" strokeWidth="1"/>
            <rect x="60" y="25" width="6" height="20" fill="#696969" stroke="#2F4F4F" strokeWidth="1"/>
          </svg>
        </div>

        {/* House 5 - Yellow farmhouse (center) */}
        <div className="absolute bottom-20 left-1/2 transform scale-85 md:scale-100">
          <svg width="120" height="110" viewBox="0 0 120 110" className="drop-shadow-lg">
            <rect x="20" y="55" width="65" height="55" fill="#F0E68C" stroke="#DAA520" strokeWidth="2"/>
            <polygon points="17,55 52,25 87,55" fill="#B22222" stroke="#8B0000" strokeWidth="2"/>
            <rect x="35" y="80" width="15" height="30" fill="#654321" stroke="#4A5568" strokeWidth="1"/>
            <rect x="25" y="65" width="10" height="10" fill="#FFE4E1" stroke="#F0B6AA" strokeWidth="1"/>
            <rect x="60" y="65" width="10" height="10" fill="#FFE4E1" stroke="#F0B6AA" strokeWidth="1"/>
            <rect x="25" y="85" width="10" height="10" fill="#FFE4E1" stroke="#F0B6AA" strokeWidth="1"/>
            <rect x="60" y="85" width="10" height="10" fill="#FFE4E1" stroke="#F0B6AA" strokeWidth="1"/>
            <rect x="70" y="30" width="8" height="25" fill="#696969" stroke="#2F4F4F" strokeWidth="1"/>
            {/* Smoke */}
            <circle cx="74" cy="25" r="2" fill="#D3D3D3" opacity="0.7" className="animate-bounce" style={{animationDelay: '2s'}}/>
            <circle cx="76" cy="20" r="1.5" fill="#D3D3D3" opacity="0.6" className="animate-bounce" style={{animationDelay: '2.5s'}}/>
          </svg>
        </div>

        {/* House 6 - Modern white house (center-right) */}
        <div className="absolute bottom-18 right-1/3 transform scale-75 md:scale-90">
          <svg width="105" height="95" viewBox="0 0 105 95" className="drop-shadow-lg">
            <rect x="15" y="45" width="55" height="50" fill="#FFFFFF" stroke="#C0C0C0" strokeWidth="2"/>
            <rect x="10" y="40" width="65" height="8" fill="#708090" stroke="#2F4F4F" strokeWidth="1"/>
            <rect x="30" y="70" width="14" height="25" fill="#A0522D" stroke="#8B4513" strokeWidth="1"/>
            <rect x="20" y="55" width="12" height="10" fill="#4169E1" stroke="#0000CD" strokeWidth="1"/>
            <rect x="50" y="55" width="12" height="10" fill="#4169E1" stroke="#0000CD" strokeWidth="1"/>
            <rect x="35" y="75" width="8" height="8" fill="#4169E1" stroke="#0000CD" strokeWidth="1"/>
            {/* Modern door handle */}
            <rect x="41" y="78" width="2" height="6" fill="#FFD700"/>
          </svg>
        </div>

        {/* House 7 - Rustic stone house (right-center) */}
        <div className="absolute bottom-16 right-3/4 transform scale-65 md:scale-80">
          <svg width="85" height="75" viewBox="0 0 85 75" className="drop-shadow-lg">
            <rect x="12" y="40" width="50" height="35" fill="#A9A9A9" stroke="#696969" strokeWidth="2"/>
            <polygon points="10,40 37,18 64,40" fill="#2F4F4F" stroke="#191970" strokeWidth="2"/>
            <rect x="26" y="58" width="10" height="17" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
            <rect x="42" y="48" width="7" height="7" fill="#87CEEB" stroke="#4682B4" strokeWidth="1"/>
            <rect x="18" y="48" width="7" height="7" fill="#87CEEB" stroke="#4682B4" strokeWidth="1"/>
            <rect x="50" y="22" width="5" height="18" fill="#696969" stroke="#2F4F4F" strokeWidth="1"/>
            {/* Stone texture lines */}
            <line x1="12" y1="50" x2="62" y2="50" stroke="#808080" strokeWidth="0.5"/>
            <line x1="12" y1="60" x2="62" y2="60" stroke="#808080" strokeWidth="0.5"/>
          </svg>
        </div>

        {/* House 8 - Pink cottage with garden (second from left) */}
        <div className="absolute bottom-16 left-3/4 transform scale-60 md:scale-70">
          <svg width="75" height="70" viewBox="0 0 75 70" className="drop-shadow-lg">
            <rect x="10" y="35" width="45" height="35" fill="#FFB6C1" stroke="#FF69B4" strokeWidth="2"/>
            <polygon points="8,35 32,15 56,35" fill="#9370DB" stroke="#663399" strokeWidth="2"/>
            <rect x="22" y="52" width="8" height="18" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
            <rect x="35" y="42" width="6" height="6" fill="#FFFFE0" stroke="#F0E68C" strokeWidth="1"/>
            <rect x="15" y="42" width="6" height="6" fill="#FFFFE0" stroke="#F0E68C" strokeWidth="1"/>
            {/* Small garden elements */}
            <ellipse cx="5" cy="68" rx="8" ry="3" fill="#32CD32" opacity="0.8"/>
            <ellipse cx="65" cy="65" rx="6" ry="2" fill="#FF69B4" opacity="0.7"/>
          </svg>
        </div>

        {/* House 9 - Small barn (far right) */}
        <div className="absolute bottom-16 right-1/12 transform scale-70 md:scale-85">
          <svg width="90" height="80" viewBox="0 0 90 80" className="drop-shadow-lg">
            <rect x="15" y="40" width="55" height="40" fill="#8B4513" stroke="#654321" strokeWidth="2"/>
            <polygon points="12,40 42,20 72,40" fill="#654321" stroke="#4A5568" strokeWidth="2"/>
            <rect x="30" y="60" width="12" height="20" fill="#2F4F4F" stroke="#1C1C1C" strokeWidth="1"/>
            <rect x="20" y="50" width="8" height="8" fill="#000000" stroke="#333333" strokeWidth="1"/>
            <rect x="55" y="50" width="8" height="8" fill="#000000" stroke="#333333" strokeWidth="1"/>
            <rect x="20" y="65" width="8" height="8" fill="#000000" stroke="#333333" strokeWidth="1"/>
            {/* Barn door handle */}
            <circle cx="35" cy="70" r="1" fill="#FFD700"/>
          </svg>
        </div>

        {/* Trees with swaying animation - Extended across full width */}
        <div className="absolute bottom-20 right-1/2">
          <svg width="100" height="140" viewBox="0 0 100 140" className="transform-gpu animate-sway">
            <rect x="45" y="95" width="12" height="45" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
            <ellipse cx="51" cy="85" rx="30" ry="35" fill="#228B22" opacity="0.9"/>
            <ellipse cx="51" cy="70" rx="25" ry="30" fill="#32CD32" opacity="0.8"/>
            <ellipse cx="51" cy="58" rx="20" ry="25" fill="#90EE90" opacity="0.7"/>
          </svg>
        </div>

        <div className="absolute bottom-16 left-1/4">
          <svg width="80" height="120" viewBox="0 0 80 120" className="transform-gpu animate-sway" style={{animationDelay: '1s', animationDuration: '4s'}}>
            <rect x="35" y="80" width="10" height="40" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
            <ellipse cx="40" cy="70" rx="22" ry="30" fill="#228B22" opacity="0.9"/>
            <ellipse cx="40" cy="58" rx="18" ry="24" fill="#32CD32" opacity="0.8"/>
            <ellipse cx="40" cy="48" rx="15" ry="18" fill="#90EE90" opacity="0.7"/>
          </svg>
        </div>

        <div className="absolute bottom-24 left-1/3">
          <svg width="110" height="150" viewBox="0 0 110 150" className="transform-gpu animate-sway" style={{animationDelay: '2s', animationDuration: '5s'}}>
            <rect x="50" y="105" width="14" height="45" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
            <ellipse cx="57" cy="95" rx="32" ry="40" fill="#228B22" opacity="0.9"/>
            <ellipse cx="57" cy="75" rx="26" ry="32" fill="#32CD32" opacity="0.8"/>
            <ellipse cx="57" cy="58" rx="22" ry="26" fill="#90EE90" opacity="0.7"/>
          </svg>
        </div>

        <div className="absolute bottom-18 right-1/3">
          <svg width="90" height="130" viewBox="0 0 90 130" className="transform-gpu animate-sway" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}>
            <rect x="40" y="90" width="12" height="40" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
            <ellipse cx="46" cy="80" rx="26" ry="32" fill="#228B22" opacity="0.9"/>
            <ellipse cx="46" cy="65" rx="22" ry="26" fill="#32CD32" opacity="0.8"/>
            <ellipse cx="46" cy="52" rx="18" ry="20" fill="#90EE90" opacity="0.7"/>
          </svg>
        </div>

        <div className="absolute bottom-12 right-1/12">
          <svg width="70" height="100" viewBox="0 0 70 100" className="transform-gpu animate-sway" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}>
            <rect x="30" y="70" width="10" height="30" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
            <ellipse cx="35" cy="60" rx="20" ry="25" fill="#228B22" opacity="0.9"/>
            <ellipse cx="35" cy="50" rx="16" ry="20" fill="#32CD32" opacity="0.8"/>
            <ellipse cx="35" cy="42" rx="12" ry="15" fill="#90EE90" opacity="0.7"/>
          </svg>
        </div>

        {/* Additional foreground trees for depth */}
        <div className="absolute bottom-8 left-1/3">
          <svg width="60" height="90" viewBox="0 0 60 90" className="transform-gpu animate-sway" style={{animationDelay: '3s', animationDuration: '6s'}}>
            <rect x="25" y="65" width="8" height="25" fill="#8B4513"/>
            <ellipse cx="29" cy="58" rx="18" ry="22" fill="#228B22" opacity="0.9"/>
            <ellipse cx="29" cy="48" rx="15" ry="18" fill="#32CD32" opacity="0.8"/>
            <ellipse cx="29" cy="40" rx="12" ry="14" fill="#90EE90" opacity="0.7"/>
          </svg>
        </div>

        <div className="absolute bottom-6 right-0">
          <svg width="50" height="80" viewBox="0 0 50 80" className="transform-gpu animate-sway" style={{animationDelay: '2.5s', animationDuration: '5.5s'}}>
            <rect x="20" y="55" width="7" height="25" fill="#8B4513"/>
            <ellipse cx="23.5" cy="48" rx="15" ry="20" fill="#228B22" opacity="0.9"/>
            <ellipse cx="23.5" cy="40" rx="12" ry="16" fill="#32CD32" opacity="0.8"/>
            <ellipse cx="23.5" cy="34" rx="10" ry="12" fill="#90EE90" opacity="0.7"/>
          </svg>
        </div>

        <div className="absolute bottom-10 left-3/4">
          <svg width="55" height="85" viewBox="0 0 55 85" className="transform-gpu animate-sway" style={{animationDelay: '4s', animationDuration: '7s'}}>
            <rect x="22" y="60" width="8" height="25" fill="#8B4513"/>
            <ellipse cx="26" cy="52" rx="16" ry="22" fill="#228B22" opacity="0.9"/>
            <ellipse cx="26" cy="42" rx="13" ry="18" fill="#32CD32" opacity="0.8"/>
            <ellipse cx="26" cy="35" rx="10" ry="14" fill="#90EE90" opacity="0.7"/>
          </svg>
        </div>

        {/* Small bushes and grass elements */}
        <div className="absolute bottom-4 left-1/6">
          <svg width="40" height="30" viewBox="0 0 40 30">
            <ellipse cx="20" cy="25" rx="18" ry="8" fill="#228B22" opacity="0.8"/>
            <ellipse cx="20" cy="20" rx="15" ry="6" fill="#32CD32" opacity="0.9"/>
          </svg>
        </div>

        <div className="absolute bottom-2 right-1/5">
          <svg width="35" height="25" viewBox="0 0 35 25">
            <ellipse cx="17.5" cy="20" rx="15" ry="6" fill="#228B22" opacity="0.8"/>
            <ellipse cx="17.5" cy="16" rx="12" ry="5" fill="#32CD32" opacity="0.9"/>
          </svg>
        </div>

        <div className="absolute bottom-6 left-2/3">
          <svg width="45" height="35" viewBox="0 0 45 35">
            <ellipse cx="22.5" cy="28" rx="20" ry="10" fill="#228B22" opacity="0.8"/>
            <ellipse cx="22.5" cy="22" rx="16" ry="8" fill="#32CD32" opacity="0.9"/>
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-4">
        <div className="fade-in-up">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
            <span>{t('title')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            {t('subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
            <Link 
              href={`/${locale}/history`}
              className="group inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-10 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 shadow-soft hover:shadow-strong transform hover:-translate-y-1 hover:scale-105"
            >
              {tNav('history')}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              href={`/${locale}/museum`}
              className="group inline-flex items-center bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 hover:border-primary-700 px-10 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 shadow-soft hover:shadow-medium transform hover:-translate-y-1"
            >
              {tNav('museum')}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3">
        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Надолу</p>
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 text-secondary-500" />
        </div>
      </div>
    </section>
  );
} 