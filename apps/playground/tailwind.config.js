/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/apps-components/src/**/*.{js,ts,jsx,tsx}',
    '../../packages/apps-components/dist/**/*.{js,mjs}',
  ],
  plugins: [],
};
