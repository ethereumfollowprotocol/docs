/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface EnvironmentVariables {
  NODE_ENV: 'development' | 'production' | 'test'
}

interface ImportMetaEnv extends EnvironmentVariables {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables {}
}
