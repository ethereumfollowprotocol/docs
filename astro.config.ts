import tailwind from '@astrojs/tailwind'
import starlight from '@astrojs/starlight'
import { defineConfig, passthroughImageService } from 'astro/config'

const SITE_URL = 'https://docs.ethfollow.xyz'

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  prefetch: true,
  experimental: {
    devOverlay: false
  },
  integrations: [
    starlight({
      title: 'EFP Docs',
      description: 'Technical documentation',
      tagline: 'Ethereum Follow Protocol',
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
            src: 'https://static.cloudflareinsights.com/beacon.min.js',
            'data-cf-beacon': '{"token": "80940575779d42e2bade60c3c4d5c8d1"}',
            defer: true
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
        }
      ],
      favicon: '/favicon.ico',
      editLink: {
        baseUrl: 'https://github.com/ethereumfollowprotocol/docs/tree/main'
      },
      lastUpdated: true,
      defaultLocale: 'en',
      locales: {
        root: { label: 'English', lang: 'en' }
        // ar: { label: 'العربية', dir: 'rtl' },
      },
      logo: {
        src: './src/assets/logo.png'
      },
      social: {
        github: 'https://github.com/ethereumfollowprotocol',
        'x.com': 'https://x.com/ethfollowpr',
        discord: 'https://discord.ethfollow.xyz'
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
          label: 'Design',
          collapsed: false,
          items: [
            {
              label: 'Specification',
              link: '/design/spec'
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
      configFile: './tailwind.config.ts'
    })
  ],
  image: {
    service: passthroughImageService()
  }
})
