/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface EnvironmentVariables {
  NODE_ENV: 'development' | 'production' | 'test'
  PORT: string
}

// Vite & Astro environment variables types
interface ImportMetaEnv extends EnvironmentVariables {}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Node.js environment variables types
declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables {}
}

// Cloudflare Pages/Workers
interface Env extends EnvironmentVariables {}
