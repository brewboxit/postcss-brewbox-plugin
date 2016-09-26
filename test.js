import test from 'ava'
import postcss from 'postcss'

import plugin from './'

function run(t, input, output, opts = { }) {
  return postcss([plugin(opts)]).process(input)
  .then((result) => {
    t.deepEqual(result.css, output)
    t.deepEqual(result.warnings().length, 0)
  })
}

test('Beer works well', t =>
  run(t, '.class{ brewbox: beer; }', '.class{ background-color: #FDB947; }'))

test('Wine works well', t =>
  run(t, '.class{ brewbox: wine; }', '.class{ background-color: #37052A; }'))
