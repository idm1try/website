import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{ts,tsx,mdx,mdx}'],
  theme: {
    extend: {
      colors: {
        red: '#ff8389',
        pink: '#ff7eb6',
        mauve: '#be95ff',
        peach: '#d44a1c',
        yellow: '#ab8600',
        green: '#08bdba',
        teal: '#33b1ff',
        blue: '#78a9ff',
        text: '#ffffff',
        subtext1: '#f4f4f4',
        subtext0: '#e0e0e0',
        overlay2: '#adadad',
        overlay1: '#949494',
        overlay0: '#7a7a7a',
        surface2: '#4f4f4f',
        surface1: '#383838',
        surface0: '#2e2e2e',
        base: '#161616',
        mantle: '#0d0d0d',
        crust: '#000000',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config
