import colors from 'tailwindcss/colors'
import type { Config } from 'tailwindcss'

const linkHeadingStyles = {
  color: colors.gray[50],
  borderBottomColor: 'transparent',
  '&:hover': {
    color: `${colors.gray[600]}`
  }
}

/** Typography plugin overrides (formerly in the monolithic tailwind.config.ts). */
export default {
  theme: {
    extend: {
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
      })
    }
  }
} satisfies Config
