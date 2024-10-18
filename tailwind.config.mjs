/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
        accent: '#e74c3c',
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '::-webkit-scrollbar': {
          width: '12px',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: '#111827', // Un color oscuro que combina con fondos oscuros
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#3498db', // Tu color primary
          backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)', // Gradiente de primary a secondary
          borderRadius: '6px',
          border: '3px solid #111827',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundImage: 'linear-gradient(45deg, #2ecc71, #3498db)', // Gradiente invertido en hover
        },
        'html': {
          scrollBehavior: 'smooth',
        },
        '*': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#3498db #111827',
        }
      })
    }
  ],
}