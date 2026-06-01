/**
 * Add target="_blank" to all external links
 */

const externalLinks = document.querySelectorAll('a[href^="http"]')

globalThis.addEventListener('DOMContentLoaded', () => {
  try {
    for (const link of externalLinks) {
      link.setAttribute('target', '_blank')
      link.setAttribute('rel', 'noopener noreferrer')
    }
  } catch {
    /* empty */
  }
})
