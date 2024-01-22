import process from 'node:process'
import sentry from '@sentry/astro'
import tailwind from '@astrojs/tailwind'
import starlight from '@astrojs/starlight'
import spotlightjs from '@spotlightjs/astro'
import starlightLinksValidator from 'starlight-links-validator'
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
          autogenerate: { directory: 'design' }
        },
        {
          label: 'Public API',
          collapsed: false,
          autogenerate: { directory: 'api' },
          badge: { text: '/api/v1', variant: 'tip' }
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
      ],
      plugins: [
        // https://starlight-links-validator.vercel.app/configuration/#configuration-options
        starlightLinksValidator()
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
