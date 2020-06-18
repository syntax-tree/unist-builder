'use strict'

var test = require('tape')
var u = require('.')

test(function (t) {
  t.deepEqual(
    u('root', [
      u('subtree', {id: 1}),
      u('subtree', {id: 2}, [
        u('node', [u('leaf', 'leaf-1'), u('leaf', 'leaf-2'), u('leaf', '')]),
        u('leaf', {id: 3}, 'leaf-3')
      ])
    ]),
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
                {type: 'leaf', value: 'leaf-1'},
                {type: 'leaf', value: 'leaf-2'},
                {type: 'leaf', value: ''}
              ]
            },
            {type: 'leaf', id: 3, value: 'leaf-3'}
          ]
        }
      ]
    }
  )

  t.end()
})
