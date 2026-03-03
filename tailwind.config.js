/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Or if using src directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for the cyberpunk theme
        cyan: {
          400: '#06b6d4',
          500: '#0891b2',
        },
        indigo: {
          400: '#6366f1',
          500: '#4f46e5',
        },
        purple: {
          400: '#a855f7',
          500: '#8b5cf6',
        },
        pink: {
          400: '#f472b6',
          500: '#ec4899',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}