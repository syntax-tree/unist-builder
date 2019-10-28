import * as u from 'unist-builder'
import {Text, List, ListItem, HTML} from 'mdast'

u('example') // $ExpectType { type: "example"; }
u('example', {property: true}) // $ExpectType { type: "example"; } & { property: boolean; }
const node1 = u('text', 'text') // $ExpectType { type: "text"; value: string; }
const text: Text = node1

// $ExpectType { type: "list"; children: { type: "listItem"; children: ({ type: "html"; value: string; } & { checked: boolean; })[]; }[]; }
const node2 = u('list', [
  u('listItem', [u('html', {checked: true}, '<strong>text</strong>')])
])

const list: List = node2
const listItem: ListItem = node2.children[0]
const html: HTML = node2.children[0].children[0]
