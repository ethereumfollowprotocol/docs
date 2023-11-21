/**
 * insert a div in the beginning of the body element
 */

const bodyElement = document.querySelector('body')

const outerDiv = document.createElement('div')
const div = document.createElement('div')

outerDiv.classList.add('framer-container')

const pageHeight = bodyElement ? `${bodyElement.scrollHeight}px` : '100vh'

/** @type{Partial<CSSStyleDeclaration>} */
const divStyle = {
  opacity: '0.1',
  minHeight: '100%',
  minWidth: '100%',
  height: pageHeight,
  position: 'absolute',
  pointerEvents: 'none',
  backgroundImage: 'url(/background.png)'
}

Object.assign(div.style, divStyle)

outerDiv.append(div)

bodyElement?.insertBefore(outerDiv, bodyElement.firstChild)
