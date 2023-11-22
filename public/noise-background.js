/**
 * insert a div in the beginning of the body element
 */

const bodyElement = document.querySelector('body')
const pageHeight = bodyElement ? `${bodyElement.scrollHeight}px` : '100vh'

const outerDiv = document.createElement('div')
outerDiv.setAttribute('class', 'noise-container')
Object.assign(outerDiv.style, { height: pageHeight })

const div = document.createElement('div')
div.setAttribute('class', 'noise')
Object.assign(div.style, { height: pageHeight })

outerDiv.append(div)
bodyElement?.insertBefore(outerDiv, bodyElement.firstChild)
