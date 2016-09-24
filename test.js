import postcss from 'postcss'
import test from 'ava'

import plugin from './'

function run(t, input, output, opts = { }) {
  return postcss([plugin(opts)]).process(input)
    .then( result => {
      t.same(result.css, output)
      t.same(result.warnings().length, 0)
  })
}

test('Beer works well', t => {
    return run(t, '.class{ brewbox: beer; }', '.class{ background-color: #FDB947; }');
})

test('Wine works well', t => {
    return run(t, '.class{ brewbox: wine; }', '.class{ background-color: #37052A; }');
})
