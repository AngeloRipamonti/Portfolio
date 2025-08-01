/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#4A90E2',
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
        secondary: {
          light: '#9CA3AF',
          DEFAULT: '#6B7280',
          dark: '#4B5563',
        },
        dark: {
          light: '#374151',
          DEFAULT: '#1F2937',
          dark: '#111827',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}