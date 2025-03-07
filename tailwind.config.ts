import colors from 'tailwindcss/colors'
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import typographyPlugin from '@tailwindcss/typography'
import starlightPlugin from '@astrojs/starlight-tailwind'

const linkHeadingStyles = {
  color: colors.gray[50],
  borderBottomColor: 'transparent',
  '&:hover': {
    color: `${colors.gray[600]}`
  }
}

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      screens: {
        xs: '320px'
      },
      typography: ({
        theme
      }: {
        theme: (path: string) => string | number | Record<string, unknown> | unknown[] | undefined
      }) => ({
        DEFAULT: {
          css: {
            'h2 a': linkHeadingStyles,
            'h3 a': linkHeadingStyles,
            'h4 a': linkHeadingStyles,
            'h5 a': linkHeadingStyles,
            'h6 a': linkHeadingStyles,
            blockquote: {
              fontSize: '90%',
              color: colors.zinc[500],
              borderLeftColor: colors.zinc[700],
              'p::before': { display: 'none' },
              'p::after': { display: 'none' }
            },
            a: {
              textDecoration: 'none',
              borderBottom: `2px solid ${colors.cyan[800]}`,
              color: colors.cyan[400],
              transition: 'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
              '&:hover': {
                color: `${colors.zinc[900]} !important`,
                borderBottomColor: `${colors.cyan[200]} !important`,
                background: colors.cyan[200]
              }
            },
            code: {
              '&::before': { content: `unset !important` },
              '&::after': { content: `unset !important` },
              fontWeight: 'normal'
            },
            '[data-rehype-pretty-code-fragment]:nth-of-type(2) pre': {
              '[data-line]::before': {
                content: 'counter(line)',
                counterIncrement: 'line',
                display: 'inline-block',
                width: '1rem',
                marginRight: '1rem',
                textAlign: 'right',
                color: colors.slate[600]
              },
              '[data-highlighted-line]::before': {
                color: colors.slate[400]
              }
            }
          }
        }
      }),
      colors: {
        accent: {
          '50': '#fdf2f8',
          '100': '#fce7f3',
          '200': '#ffde60',
          '300': '#ffde60',
          '400': '#f472b6',
          '500': '#ec4899',
          '600': '#EFCB3C'
        },
        gray: colors.zinc
      },
      fontFamily: {
        serif: ['Inter', ...defaultTheme.fontFamily.serif],
        sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [starlightPlugin(), typographyPlugin]
} satisfies Config
