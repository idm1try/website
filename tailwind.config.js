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
              borderRadius: '0.5rem',
            },
            pre: {
              backgroundColor: theme('colors.neutral.800'),
            },
            'pre code': {
              backgroundColor: theme('colors.neutral.800'),
            },
            blockquote: {
              borderLeft: 'none',
              fontStyle: 'normal',
              fontWeight: '400',
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
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
