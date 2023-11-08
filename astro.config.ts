import tailwind from '@astrojs/tailwind'
import starlight from '@astrojs/starlight'
import expressiveCode from 'astro-expressive-code'
import { defineConfig, passthroughImageService } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.ethfollow.xyz',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    expressiveCode({
      themes: ['dracula-soft'],
      shiki: true,
      tabWidth: 2,
      textMarkers: true,
      styleOverrides: {
        borderRadius: '0.2rem',
        uiPaddingBlock: '0.1rem',
        codePaddingBlock: '0.5rem',
      },
      minSyntaxHighlightingColorContrast: 0,
      plugins: [],
    }),
    starlight({
      title: 'EFP',
      description: 'Ethereum Follow Protocol',
      tagline: 'Ethereum Follow Protocol',
      favicon: '/favicon.ico',
      editLink: {
        baseUrl: 'https://github.com/ethereumfollowprotocol/docs/tree/main',
      },
      lastUpdated: true,
      defaultLocale: 'en',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },
      logo: {
        src: './src/assets/logo.png',
      },
      social: {
        github: 'https://github.com/ethereumfollowprotocol',
        'x.com': 'https://x.com/ethfollowpr',
      },
      tableOfContents: {
        maxHeadingLevel: 4,
      },
      sidebar: [
        {
          label: 'Design',
          collapsed: true,
          items: [
            {
              label: 'Specefication',
              link: '/design/spec',
            },
          ],
        },
        {
          label: 'Public API',
          link: '/api',
          badge: {
            text: 'v1',
            variant: 'note',
          },
        },
      ],
      customCss: [
        './src/styles/custom.css',
        './src/styles/tailwind.css',
        '@fontsource/inter/300.css',
        '@fontsource/inter/400.css',
        '@fontsource/inter/700.css',
        '@fontsource/inter/900.css',
        '@fontsource/ibm-plex-serif/400.css',
        '@fontsource/ibm-plex-serif/600.css',
        '@fontsource/ibm-plex-mono/400.css',
        '@fontsource/ibm-plex-mono/600.css',
      ],
    }),
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.ts',
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
})
