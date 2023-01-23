/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist').Literal} Literal
 * @typedef {Record<string, unknown>} Props
 * @typedef {Array<Node> | string} ChildrenOrValue
 */

/**
 * Build a node.
 *
 * @param type
 *   Node type.
 * @param props
 *   Fields assigned to node.
 * @param value
 *   Children of node or value of `node` (cast to string).
 * @returns
 *   Built node.
 */
export const u =
  /**
   * @type {(
   *   (<T extends string>(type: T) => {type: T}) &
   *   (<T extends string, P extends Props>(type: T, props: P) => {type: T} & P) &
   *   (<T extends string>(type: T, value: string) => {type: T, value: string}) &
   *   (<T extends string, P extends Props>(type: T, props: P, value: string) => {type: T, value: string} & P) &
   *   (<T extends string, C extends Array<Node>>(type: T, children: C) => {type: T, children: C}) &
   *   (<T extends string, P extends Props, C extends Array<Node>>(type: T, props: P, children: C) => {type: T, children: C} & P)
   * )}
   */
  (
    /**
     * @param {string} type
     * @param {Props | ChildrenOrValue | null | undefined} [props]
     * @param {ChildrenOrValue | null | undefined} [value]
     * @returns {Node}
     */
    function (type, props, value) {
      /** @type {Node} */
      const node = {type: String(type)}

      if (
        (value === undefined || value === null) &&
        (typeof props === 'string' || Array.isArray(props))
      ) {
        value = props
      } else {
        Object.assign(node, props)
      }

      if (Array.isArray(value)) {
        // @ts-expect-error: create a parent.
        node.children = value
      } else if (value !== undefined && value !== null) {
        // @ts-expect-error: create a literal.
        node.value = String(value)
      }

      return node
    }
  )
