import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import sentry from '@sentry/astro'
import spotlightjs from '@spotlightjs/astro'
import { defineConfig } from 'astro/config'
import process from 'node:process'
import starlightLinksValidator from 'starlight-links-validator'

const SITE_URL = 'https://docs.ethfollow.xyz'

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  prefetch: true,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sentry(),
    spotlightjs(),
    tailwind({ applyBaseStyles: false, configFile: 'tailwind.config.ts' }),
    starlight({
      title: 'EFP Docs',
      tagline: 'Ethereum Follow Protocol',
      description: 'Ethereum Follow Protocol technical documentation',
      favicon: '/favicon.ico',
      lastUpdated: true,
      expressiveCode: {
        frames: {
          showCopyToClipboardButton: true
        },
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
              label: 'List Registry',
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
          collapsed: false,
          autogenerate: {
            directory: 'api'
          },
          badge: {
            text: '/api/v1',
            variant: 'tip'
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
            property: 'twitter:image',
            content: `${SITE_URL}/og.png`
          }
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:card',
            content: 'summary_large_image'
          }
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:description',
            content: 'The social graph for Ethereum.'
          }
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:title',
            content: 'Ethereum Follow Protocol'
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
      ],
      plugins: [
        // https://starlight-links-validator.vercel.app/configuration/#configuration-options
        starlightLinksValidator()
      ]
    })
  ],
  experimental: {
    clientPrerender: true,
    contentCollectionCache: !import.meta.env.DEV
  },
  server: {
    port: Number(process.env.PORT || 4321)
  }
})
