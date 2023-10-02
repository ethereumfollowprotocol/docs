import tailwind from '@astrojs/tailwind'
import starlight from '@astrojs/starlight'
import expressiveCode from 'astro-expressive-code'
import { defineConfig, passthroughImageService } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.ethfollow.xyz',
  output: 'static',
  integrations: [
    expressiveCode({
      theme: 'dracula-soft',
    }),
    starlight({
      title: 'EFP',
      description: 'Ethereum Follow Protocol',
      favicon: '/favicon.ico',
      defaultLocale: 'en',
      lastUpdated: true,
      locales: {
        root: {
          label: 'English',
          lang: 'en-US',
        },
      },
      logo: {
        src: './src/assets/logo.png',
      },
      social: {
        github: 'https://github.com/ethereumfollowprotocol',
        twitter: 'https://twitter.com/ethfollowpr',
      },
      sidebar: [
        {
          label: 'Design Specification',
          link: '/spec',
        },
      ],
      customCss: [
        './src/styles/custom.css',
        './src/styles/tailwind.css',
        '@fontsource/inter/400.css',
        '@fontsource/inter/700.css',
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
