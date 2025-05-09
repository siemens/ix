/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  content: ['./src/**/*.{tsx,html}', './docs/**/*.{md,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
