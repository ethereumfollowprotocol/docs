/**
 * Add target="_blank" to all external links
 */

const externalLinks = document.querySelectorAll('a[href^="http"]')

window.addEventListener('DOMContentLoaded', () => {
  try {
    for (const link of externalLinks) {
      link.setAttribute('target', '_blank')
      link.setAttribute('rel', 'noopener noreferrer')
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error' + JSON.stringify(error, undefined, 2)
    console.error('Error in anchor-targets.js:', errorMessage)
  }
})
