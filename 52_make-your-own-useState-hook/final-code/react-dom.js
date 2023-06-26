export function render(reactElement, rootElement) {
  function createDOMElement(reactElement) {
    if (typeof reactElement.type === 'function') {
      return createDOMElement(reactElement.type(reactElement.props))
    }

    if (Array.isArray(reactElement)) {
      return reactElement.map((el) => createDOMElement(el))
    }

    if (typeof reactElement === 'string') {
      return document.createTextNode(reactElement)
    }

    const { type, props } = reactElement
    const DOMElement = document.createElement(type)

    if (props) {
      Object.entries(props).forEach(([key, value]) => {
        if (key === 'style') {
          Object.entries(value).forEach(([style, value]) => {
            DOMElement.style[style] = value
          })
        } else {
          DOMElement[key] = value
        }
      })

      props.children?.forEach((child) => {
        if (Array.isArray(child)) {
          DOMElement.append(...child.map((el) => createDOMElement(el)))
        } else if (typeof child.type === 'string') {
          DOMElement.append(createDOMElement(child))
        } else {
          const textNode = document.createTextNode(child)
          DOMElement.append(textNode)
        }
      })
    }

    return DOMElement
  }

  const DOMElement = createDOMElement(reactElement)
  rootElement.innerHTML = ''
  
  if (Array.isArray(DOMElement)) {
    rootElement.append(...DOMElement)
  } else {
    rootElement.append(DOMElement)
  }
}

export default {
  render,
}
