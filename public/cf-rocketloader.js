/**
 * When Cloudflare Rocket Loader is enabled,
 * the `DOMContentLoaded` event is not fired and this is the event we use to load the search UI.
 * Astro Search feature requires the `DOMContentLoaded` event to be fired.
 */

let inCloudflare = true
window.addEventListener('DOMContentLoaded', () => {
  inCloudflare = false
})
if (document.readyState === 'loading') {
  window.addEventListener('load', () => {
    if (inCloudflare) window.dispatchEvent(new Event('DOMContentLoaded'))
  })
}
