/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  endOfLine: 'auto',
  singleQuote: true,
  proseWrap: 'never',
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  singleAttributePerLine: true,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.mdx',
      options: {
        useTabs: false,
        tabWidth: 2,
      },
    },
  ],
}
