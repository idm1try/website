/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')

/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,mdx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        mono: ['var(--font-fira-code)', ...fontFamily.mono],
      },
      colors: {
        rosewater: {
          100: '#f5e0dc',
          200: '#dc8a78',
        },
        flamingo: {
          100: '#f2cdcd',
          200: '#dd7878',
        },
        pink: {
          100: '#f5c2e7',
          200: '#ea76cb',
        },
        mauve: {
          100: '#cba6f7',
          200: '#8839ef',
        },
        red: {
          100: '#f38ba8',
          200: '#d20f39',
        },
        maroon: {
          100: '#eba0ac',
          200: '#e64553',
        },
        peach: {
          100: '#fab387',
          200: '#fe640b',
        },
        yellow: {
          100: '#f9e2af',
          200: '#df8e1d',
        },
        green: {
          100: '#a6e3a1',
          200: '#40a02b',
        },
        teal: {
          100: '#94e2d5',
          200: '#179299',
        },
        sky: {
          100: '#89dceb',
          200: '#04a5e5',
        },
        sapphire: {
          100: '#74c7ec',
          200: '#209fb5',
        },
        blue: {
          100: '#89b4fa',
          200: '#1e66f5',
        },
        lavender: {
          100: '#b4befe',
          200: '#7287fd',
        },
        text: {
          100: '#cdd6f4',
          200: '#4c4f69',
        },
        subtext1: {
          100: '#bac2de',
          200: '#5c5f77',
        },
        subtext0: {
          100: '#a6adc8',
          200: '#6c6f85',
        },
        overlay2: {
          100: '#9399b2',
          200: '#7c7f93',
        },
        overlay1: {
          100: '#7f849c',
          200: '#8c8fa1',
        },
        overlay0: {
          100: '#6c7086',
          200: '#9ca0b0',
        },
        surface2: {
          100: '#585b70',
          200: '#acb0be',
        },
        surface1: {
          100: '#45475a',
          200: '#bcc0cc',
        },
        surface0: {
          100: '#313244',
          200: '#ccd0da',
        },
        base: {
          100: '#1e1e2e',
          200: '#eff1f5',
        },
        mantle: {
          100: '#181825',
          200: '#e6e9ef',
        },
        crust: {
          100: '#11111b',
          200: '#dce0e8',
        },
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.text.200'),
              textDecoration: 'none',
              fontWeight: '400',
              overflowWrap: 'anywhere',
            },
            strong: { color: theme('colors.text.200') },
            'ul > li::marker': {
              color: theme('colors.pink.200'),
            },
            'ol > li::before': { color: theme('colors.pink.200') },
            'ol > li::marker': { color: theme('colors.pink.200') },
            hr: { borderColor: theme('colors.surface1.200') },
            blockquote: {
              color: theme('colors.subtext0.200'),
              borderLeftColor: theme('colors.pink.200'),
            },
            h1: { color: theme('colors.text.200') },
            h2: { color: theme('colors.text.200') },
            h3: { color: theme('colors.text.200') },
            h4: { color: theme('colors.text.200') },
            code: { color: theme('colors.pink.200') },
            'a code': { color: theme('colors.pink.200') },
            pre: {
              backgroundColor: theme('colors.mantle.100'),
            },
            'pre code': {
              color: theme('colors.subtext0.100'),
              backgroundColor: theme('colors.mantle.100'),
            },
            thead: { borderBottomColor: theme('colors.surface1.200') },
            th: {
              color: theme('colors.text.200'),
              borderColor: theme('colors.surface1.200'),
            },
            'tbody tr': { borderBottomColor: theme('colors.surface1.200') },
            img: {
              borderRadius: '0.5rem',
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme('colors.text.100'),
              textDecoration: 'none',
              fontWeight: '400',
            },
            strong: { color: theme('colors.text.100') },
            'ul > li::marker': {
              color: theme('colors.pink.100'),
            },
            'ol > li::before': { color: theme('colors.pink.100') },
            'ol > li::marker': { color: theme('colors.pink.100') },
            hr: { borderColor: theme('colors.surface1.100') },
            blockquote: {
              color: theme('colors.subtext0.100'),
              borderLeftColor: theme('colors.pink.100'),
              fontStyle: 'normal',
            },
            h1: { color: theme('colors.text.100') },
            h2: { color: theme('colors.text.100') },
            h3: { color: theme('colors.text.100') },
            h4: { color: theme('colors.text.100') },
            code: { color: theme('colors.pink.100') },
            thead: { borderBottomColor: theme('colors.surface1.100') },
            th: { color: theme('colors.text.100') },
            'tbody tr': { borderBottomColor: theme('colors.surface1.100') },
          },
        },
      }),
      animation: {
        fade_in: 'fade_in 1000ms forwards',
        fade_in_up:
          'fade_in_up 550ms cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards',
        fade_in_up_10:
          'fade_in_up_10 750ms cubic-bezier(0.68, -0.6, 0.32, 2.2) forwards',
        fade_in_up_down:
          'fade_in_up_down 1400ms cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards',
      },
      keyframes: {
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
