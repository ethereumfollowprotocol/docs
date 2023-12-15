import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import sentry from '@sentry/astro'
import spotlightjs from '@spotlightjs/astro'
import { defineConfig, passthroughImageService } from 'astro/config'

const SITE_URL = 'https://docs.ethfollow.xyz'

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  prefetch: true,
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
        themes: ['starlight-dark', 'starlight-light'],
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
              label: 'List Storage Location',
              link: '/design/list-storage-location'
            },
            {
              label: 'Roles',
              link: '/design/roles'
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
            src: `/anchor-targets.js`
          }
        },
        {
          tag: 'script',
          attrs: {
            type: 'module',
            src: `/noise-background.js`
          }
        },
        {
          tag: 'script',
          attrs: {
            src: import.meta.env.PROD ? 'https://static.cloudflareinsights.com/beacon.min.js' : '',
            'data-cf-beacon': '{"token":"80940575779d42e2bade60c3c4d5c8d1"}',
            defer: true
          }
        }
      ],
      customCss: [
        './src/styles/custom.css',
        './src/styles/tailwind.css',
        '@fontsource/roboto/400.css',
        '@fontsource/roboto/700.css',
        '@fontsource/roboto/900.css',
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
  }
})
