/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // IMPORTANT: Include component packages so Tailwind scans them for classes
    '../../packages/ui-*/src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui-*/dist/**/*.{js,mjs}',
  ],
  plugins: [],
};
