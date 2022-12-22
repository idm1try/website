/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')

/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,mdx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
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
        fade_in: 'fade_in 1000ms forwards',
        fade_in_up:
          'fade_in_up 550ms cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards',
        fade_in_up_10:
          'fade_in_up_10 750ms cubic-bezier(0.68, -0.6, 0.32, 2.2) forwards',
        fade_in_up_5:
          'fade_in_up_5 750ms cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards',
        fade_in_up_down:
          'fade_in_up_down 1400ms cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards',
      },
      keyframes: {
        in: {
          '0%': { transform: 'translateY(18px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fade_in: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fade_in_up: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fade_in_up_10: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fade_in_up_5: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50%) translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(50%) translateY(0)',
          },
        },
        fade_in_up_down: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '70%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
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
