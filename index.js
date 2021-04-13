export function u(type, props, value) {
  var node = {type: String(type)}

  if (
    (value === undefined || value === null) &&
    (typeof props !== 'object' || Array.isArray(props))
  ) {
    value = props
  } else {
    Object.assign(node, props)
  }

  if (Array.isArray(value)) {
    node.children = value
  } else if (value !== undefined && value !== null) {
    node.value = String(value)
  }

  return node
}
