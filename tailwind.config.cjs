/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        paper: '#FFFFFF',
        crimson: '#E5342E',
        cobalt: '#2D5BFF',
        muted: 'rgba(255,255,255,0.55)',
        dim: 'rgba(255,255,255,0.75)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Noto Serif SC"', 'Georgia', 'serif'],
        cn: ['"Noto Serif SC"', '"Songti SC"', 'serif'],
        sans: ['Inter', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
