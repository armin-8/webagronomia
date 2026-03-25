/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a8ba',
          400: '#ec7694',
          500: '#df4a70',
          600: '#cb2d5a',
          700: '#a52248',
          800: '#6b1a32',
          900: '#4A1520',
          950: '#2d0a13',
        },
        gold: {
          50: '#fdf9ef',
          100: '#faf0d4',
          200: '#f4dea8',
          300: '#edc872',
          400: '#e5ad45',
          500: '#C5A55A',
          600: '#b8923a',
          700: '#996f30',
          800: '#7d592c',
          900: '#674927',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
