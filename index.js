/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist').Literal} Literal
 * @typedef {Object.<string, unknown>} Props
 * @typedef {Array.<Node>|string} ChildrenOrValue
 *
 * @callback BuildParentWithProps
 * @param {string} type
 * @param {Props} props
 * @param {Array.<Node>} value
 * @returns {Parent}
 *
 * @callback BuildParentWithoutProps
 * @param {string} type
 * @param {Array.<Node>} value
 * @returns {Parent}
 *
 * @callback BuildLiteralWithProps
 * @param {string} type
 * @param {Props} props
 * @param {string} value
 * @returns {Literal}
 *
 * @callback BuildLiteralWithoutProps
 * @param {string} type
 * @param {string} value
 * @returns {Literal}
 *
 * @callback BuildVoid
 * @param {string} type
 * @param {Props} [props]
 * @returns {Node}
 */

/**
 * @type {BuildParentWithProps & BuildParentWithoutProps & BuildLiteralWithProps & BuildLiteralWithoutProps & BuildVoid}
 */
// prettier-ignore
export var u = (
  /**
   * @param {string} type Type of node
   * @param {Props|ChildrenOrValue} [props] Additional properties for node (or `children` or `value`)
   * @param {ChildrenOrValue} [value] `children` or `value` of node
   * @returns {Node}
   */
  function (type, props, value) {
    /** @type {Node} */
    var node = {type: String(type)}

    if (
      (value === undefined || value === null) &&
      (typeof props === 'string' || Array.isArray(props))
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

)
