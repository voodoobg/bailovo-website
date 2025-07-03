'use client';

import { useState } from 'react';
import { Bug, ChevronDown, ChevronUp } from 'lucide-react';

export default function DebugPanel() {
  const [isOpen, setIsOpen] = useState(false);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const config = {
    'WordPress Enabled': process.env.NEXT_PUBLIC_USE_WORDPRESS || 'false',
    'WordPress URL': process.env.NEXT_PUBLIC_WP_API_URL || 'not set',
    'Fallback to Mock': process.env.NEXT_PUBLIC_FALLBACK_TO_MOCK || 'true',
    'Node Environment': process.env.NODE_ENV || 'not set',
    'Current URL': typeof window !== 'undefined' ? window.location.href : 'server-side',
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`bg-black text-white rounded-lg shadow-lg transition-all duration-300 ${isOpen ? 'w-96' : 'w-auto'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 p-3 w-full text-left hover:bg-gray-800 rounded-lg"
        >
          <Bug className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium">Debug Panel</span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 ml-auto" />
          ) : (
            <ChevronDown className="w-4 h-4 ml-auto" />
          )}
        </button>
        
        {isOpen && (
          <div className="p-4 pt-0 space-y-3">
            <div className="border-t border-gray-700 pt-3">
              <h3 className="text-sm font-semibold text-yellow-400 mb-2">Configuration</h3>
              <div className="space-y-2">
                {Object.entries(config).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-xs">
                    <span className="text-gray-300">{key}:</span>
                    <span className={`font-mono ${value === 'true' ? 'text-green-400' : value === 'false' ? 'text-red-400' : 'text-white'}`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-3">
              <h3 className="text-sm font-semibold text-yellow-400 mb-2">WordPress API Test</h3>
              <button
                onClick={async () => {
                  console.log('🧪 Testing WordPress API connection...');
                  try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/posts?per_page=1`);
                    console.log('📊 API Test Response:', {
                      status: response.status,
                      ok: response.ok,
                      headers: Object.fromEntries(response.headers.entries())
                    });
                    if (response.ok) {
                      const data = await response.json();
                      console.log('✅ API Test Data:', data);
                    } else {
                      const errorText = await response.text();
                      console.log('❌ API Test Error:', errorText);
                    }
                  } catch (error) {
                    console.log('💥 API Test Failed:', error);
                  }
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded transition-colors"
              >
                Test API Connection
              </button>
            </div>
            
            <div className="border-t border-gray-700 pt-3">
              <h3 className="text-sm font-semibold text-yellow-400 mb-2">Debug Actions</h3>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    console.clear();
                    console.log('🧹 Console cleared for fresh debugging');
                  }}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white text-xs py-2 px-3 rounded transition-colors"
                >
                  Clear Console
                </button>
                <button
                  onClick={() => {
                    console.log('🔍 Current environment variables:', {
                      NODE_ENV: process.env.NODE_ENV,
                      NEXT_PUBLIC_USE_WORDPRESS: process.env.NEXT_PUBLIC_USE_WORDPRESS,
                      NEXT_PUBLIC_WP_API_URL: process.env.NEXT_PUBLIC_WP_API_URL,
                      NEXT_PUBLIC_FALLBACK_TO_MOCK: process.env.NEXT_PUBLIC_FALLBACK_TO_MOCK,
                    });
                  }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs py-2 px-3 rounded transition-colors"
                >
                  Log Environment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 