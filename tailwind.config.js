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
      animation: {
        in: 'in .6s both',
      },
      keyframes: {
        in: {
          '0%': { transform: 'translateY(18px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
