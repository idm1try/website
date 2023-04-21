const { fontFamily } = require('tailwindcss/defaultTheme')

/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,mdx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', ...fontFamily.mono],
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
