/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,mdx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            img: {
              borderRadius: theme('borderRadius.lg'),
            },
            pre: {
              backgroundColor: theme('colors.neutral.800'),
            },
            'pre code': {
              backgroundColor: theme('colors.neutral.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
