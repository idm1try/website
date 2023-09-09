const { fontFamily } = require('tailwindcss/defaultTheme')

/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,mdx,mdx}'],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        pacifico: ['var(--font-pacifico)', ...fontFamily.sans],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
}
