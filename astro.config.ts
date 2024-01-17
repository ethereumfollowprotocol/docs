import 'dotenv/config'
Object.assign(process.env, { ASTRO_TELEMETRY_DISABLED: 1 })

import process from 'node:process'
import sentry from '@sentry/astro'
import tailwind from '@astrojs/tailwind'
import starlight from '@astrojs/starlight'
import spotlightjs from '@spotlightjs/astro'
import moonlightTheme from './public/theme/moonlight-ii.json'
import { defineConfig, passthroughImageService } from 'astro/config'

const SITE_URL = 'https://docs.ethfollow.xyz'

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  prefetch: true,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    starlight({
      title: 'EFP Docs',
      tagline: 'Ethereum Follow Protocol',
      description: 'Technical documentation',
      favicon: '/favicon.ico',
      lastUpdated: true,
      expressiveCode: {
        frames: {
          showCopyToClipboardButton: true
        },
        themes: [moonlightTheme, 'github-light'],
        useStarlightDarkModeSwitch: true,
        useStarlightUiThemeColors: true
      },
      social: {
        github: 'https://github.com/ethereumfollowprotocol',
        discord: 'https://discord.ethfollow.xyz',
        'x.com': 'https://x.com/ethfollowpr'
      },
      locales: {
        root: {
          label: 'English',
          lang: 'en'
        }
      },
      defaultLocale: 'en',
      logo: {
        src: './src/assets/logo.png',
        alt: 'Ethereum Follow Protocol Logo'
      },
      editLink: {
        baseUrl: 'https://github.com/ethereumfollowprotocol/docs/tree/main'
      },
      tableOfContents: {
        maxHeadingLevel: 4
      },
      sidebar: [
        {
          label: 'Introduction',
          link: '/intro'
        },
        {
          label: 'Specification',
          collapsed: false,
          items: [
            {
              label: 'Registry',
              link: '/design/list-registry'
            },
            {
              label: 'Roles',
              link: '/design/roles'
            },
            {
              label: 'Account Metadata',
              link: '/design/account-metadata'
            },
            {
              label: 'List Metadata',
              link: '/design/list-metadata'
            },
            {
              label: 'List Storage Location',
              link: '/design/list-storage-location'
            },
            {
              label: 'List Records',
              link: '/design/list-records'
            },
            {
              label: 'Tags',
              link: '/design/tags'
            },
            {
              label: 'List Ops',
              link: '/design/list-ops'
            }
          ]
        },
        {
          label: 'Public API',
          link: '/api',
          badge: {
            text: 'v1',
            variant: 'note'
          }
        }
      ],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/favicon.ico'
          }
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: `${SITE_URL}/og.png`
          }
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: `${SITE_URL}/og.png`
          }
        },
        {
          tag: 'script',
          attrs: {
            type: 'module',
            src: '/anchor-targets.js'
          }
        },
        {
          tag: 'script',
          attrs: {
            src: import.meta.env.PROD ? 'https://static.cloudflareinsights.com/beacon.min.js' : '',
            'data-cf-beacon': '{"token": "bb866b6c87ba4c5ca9eb7fd636a5e2cf"}',
            defer: true
          }
        }
      ],
      customCss: [
        './src/styles/custom.css',
        './src/styles/tailwind.css',
        '@fontsource/inter/400.css',
        '@fontsource/inter/500.css',
        '@fontsource/inter/700.css',
        '@fontsource/inter/900.css',
        '@fontsource/ibm-plex-mono/400.css',
        '@fontsource/ibm-plex-mono/600.css'
      ]
    }),
    tailwind({
      applyBaseStyles: false,
      configFile: 'tailwind.config.ts'
    }),
    sentry(),
    spotlightjs()
  ],
  image: {
    service: passthroughImageService()
  },
  experimental: {
    contentCollectionCache: !import.meta.env.DEV
  },
  server: {
    port: Number(process.env.PORT || 4321)
  }
})
