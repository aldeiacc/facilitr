/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        facilitr: {
          blue: '#6EC1E4',
          green: '#91E80C',
          purple: '#BB0EE5',
          accent: '#61CE70',
          text: '#7A7A7A',
          ink: '#1E1E1E',
          soft: '#F7F7F7',
        },
      },
      fontFamily: {
        heading: ['Roboto', 'Arial', 'sans-serif'],
        slab: ['Roboto Slab', 'Georgia', 'serif'],
        body: ['Roboto', 'Arial', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
        '2xl': '1350px',
      },
      maxWidth: {
        content: '1140px',
      },
    },
  },
  plugins: [],
};
