import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated color palette with user's requested colors
        primary: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#25327b', // Primary text color
          700: '#1e293a',
          800: '#1e2139',
          900: '#0f172a',
          950: '#020617',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#3be0a8', // Button/secondary color
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Added pastel colors for backwards compatibility
        pastel: {
          blue: '#e0f2fe',
          'blue-light': '#f0f9ff',
          'blue-dark': '#93c5fd',
          green: '#d1fae5',
          'green-light': '#ecfdf5',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#3be0a8', // Use secondary color for accent
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        'sans': ['Overpass', 'system-ui', 'sans-serif'],
        'heading': ['Overpass', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Increased by 10% from previous values
        'xs': ['0.55rem', { lineHeight: '0.77rem' }],        // was 0.5rem
        'sm': ['0.66rem', { lineHeight: '0.99rem' }],        // was 0.6rem
        'base': ['0.77rem', { lineHeight: '1.21rem' }],      // was 0.7rem
        'lg': ['0.88rem', { lineHeight: '1.43rem' }],        // was 0.8rem
        'xl': ['0.99rem', { lineHeight: '1.43rem' }],        // was 0.9rem
        '2xl': ['1.21rem', { lineHeight: '1.65rem' }],       // was 1.1rem
        '3xl': ['1.54rem', { lineHeight: '1.87rem' }],       // was 1.4rem
        '4xl': ['1.87rem', { lineHeight: '2.09rem' }],       // was 1.7rem
        '5xl': ['2.53rem', { lineHeight: '1' }],             // was 2.3rem
        '6xl': ['3.19rem', { lineHeight: '1' }],             // was 2.9rem
        '7xl': ['3.85rem', { lineHeight: '1' }],             // was 3.5rem
        '8xl': ['5.17rem', { lineHeight: '1' }],             // was 4.7rem
        '9xl': ['6.93rem', { lineHeight: '1' }],             // was 6.3rem
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config; 