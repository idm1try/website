const { fontFamily } = require('tailwindcss/defaultTheme')

/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,mdx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        pacifico: ['var(--font-pacifico)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@catppuccin/tailwindcss')({
      defaultFlavour: 'latte',
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
