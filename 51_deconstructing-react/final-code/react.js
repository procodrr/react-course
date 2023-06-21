function createElement(type, props, ...children) {
  const reactElement = {
    type,
    props: {
      ...props,
    },
  }

  if (children.length) reactElement.props.children = children

  return reactElement
}

export default {
  createElement,
}
