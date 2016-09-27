const postcss = require('postcss')

const regex = /^brewbox$/

module.exports = postcss.plugin('postcss-brewbox-plugin', () => {
  function parseBrew(d) {
    let res = 'background-color: '

    if (d.value === 'beer') {
      res += '#FDB947'
    } else if (d.value === 'wine') {
      res += '#37052A'
    } else {
      res += d.value
      console.warn('Warning:', d.value + ' is not valid.') //eslint-disable-line
    }

    return res
  }

  return (root) => {
    root.walkDecls(regex, (decl) => {
      decl.replaceWith(parseBrew(decl))
    })
  }
})
