# unist-builder

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**unist**][unist] utility to create a new [tree][]s with [hyperscript][]-like
syntax.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[npm][]:

```bash
npm install unist-builder
```

## Use

```js
import {u} from 'unist-builder'

var tree = u('root', [
  u('subtree', {id: 1}),
  u('subtree', {id: 2}, [
    u('node', [u('leaf', 'leaf 1'), u('leaf', 'leaf 2')]),
    u('leaf', {id: 3}, 'leaf 3'),
    u('void', {id: 4})
  ])
])

console.dir(tree, {depth: null})
```

results in the following tree:

```js
{
  type: 'root',
  children: [
    {type: 'subtree', id: 1},
    {
      type: 'subtree',
      id: 2,
      children: [
        {
          type: 'node',
          children: [
            {type: 'leaf', value: 'leaf 1'},
            {type: 'leaf', value: 'leaf 2'}
          ]
        },
        {type: 'leaf', id: 3, value: 'leaf 3'},
        {type: 'void', id: 4}
      ]
    }
  ]
}
```

## API

This package exports the following identifiers: `u`.
There is no default export.

### `u(type[, props][, children|value])`

Creates a node from `props`, `children`, and optionally `value`.

###### Signatures

*   `u(type[, props], children)` — create a [parent][]
*   `u(type[, props], value)` — create a [literal][]
*   `u(type[, props])` — create a void node

###### Parameters

*   `type` (`string`)
    — node [type][]
*   `props` (`Record<string, unknown>`)
    — other values assigned to `node`
*   `children` ([`Array<Node>`][node])
    — children of `node`
*   `value` (`*`)
    — value of `node` (cast to string)

###### Returns

[`Node`][node].

## Related

*   [`unist-builder-blueprint`](https://github.com/syntax-tree/unist-builder-blueprint)
    — Convert unist trees to `unist-builder` notation
*   [`hastscript`](https://github.com/syntax-tree/hastscript)
    — Create [hast][] elements
*   [`xastscript`](https://github.com/syntax-tree/xastscript)
    — Create [xast][] elements

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/unist-builder/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/unist-builder/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-builder.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-builder

[downloads-badge]: https://img.shields.io/npm/dm/unist-builder.svg

[downloads]: https://www.npmjs.com/package/unist-builder

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-builder.svg

[size]: https://bundlephobia.com/result?p=unist-builder

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[unist]: https://github.com/syntax-tree/unist

[hast]: https://github.com/syntax-tree/hast

[xast]: https://github.com/syntax-tree/xast

[hyperscript]: https://github.com/dominictarr/hyperscript

[node]: https://github.com/syntax-tree/unist#node

[tree]: https://github.com/syntax-tree/unist#tree

[parent]: https://github.com/syntax-tree/unist#parent

[literal]: https://github.com/syntax-tree/unist#literal

[type]: https://github.com/syntax-tree/unist#type
