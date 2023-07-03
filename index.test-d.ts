import {expectAssignable, expectType} from 'tsd'
import type {HTML, List, ListItem, Text} from 'mdast'
import {u} from './index.js'

expectType<{type: 'example'}>(u('example'))
expectType<{type: 'example'} & {property: true}>(u('example', {property: true}))

const node1 = u('text', 'text')

expectType<{type: 'text'; value: string}>(node1)
expectAssignable<Text>(node1)

const node2 = u('list', [
  u('listItem', [u('html', {checked: true}, '<strong>text</strong>')])
])

expectType<{
  type: 'list'
  children: Array<{
    type: 'listItem'
    children: Array<{type: 'html'; value: string} & {checked: boolean}>
  }>
}>(node2)
expectAssignable<List>(node2)
expectAssignable<ListItem>(node2.children[0])
expectAssignable<HTML>(node2.children[0].children[0])
