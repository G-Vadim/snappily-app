/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'coral': '#FF014E',
        'charcoal': '#29262C',
        'linen': '#EDE9E2'
      },
      fontFamily: {
        custom: ['Tomato Grotesk', 'sans-serif'],
      },
    },
    fontSize: {
      xs: ['14px', '20px'],
      sm: ['17px', '21px'],
      base: ['18px', '26px'],
      md: ['24px', '32px'],
      'semi-md': ['32px', '36px'],
      lg: ['40px', '48px'],
      xl: ['56px', '60px'],
      '2xl': ['56px', '64px'],
      '3xl': ['60px', '76px'],
      '4xl': ['64px', '72px'],
      '5xl': ['72px', '76px']
    }
  },
  plugins: [],
};
