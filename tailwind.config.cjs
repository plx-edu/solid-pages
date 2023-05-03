/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '[3/2]': '150%',
        '[1]': '100%',
        '[2/3]': '66.667%',
        '[1/2]': '50%',
        '[2/5]': '40%',
        '[1/3]': '33.339%',
        '[1/4]': '25%',
        '[1/5]': '20%',
      }
    }
  },
  plugins: [],
  safelist: [
    'before:pt-[1]',
    'before:pt-[1/2]',
    'before:pt-[1/3]',
    'before:pt-[1/5]',
    'before:pt-[1/4]',
    'before:pt-[2/3]',
    'before:pt-[2/5]',
    'before:pt-[3/2]',
  ]
};