var postcss = require('postcss')

var regex = /^brewbox$/

module.exports = postcss.plugin('postcss-brewbox-plugin', function (opts) {
    opts = opts || {}

    function parseBrew(d) {
      var res = 'background-color: '

      if (d.value === 'beer') {
        res += '#FDB947'
      } else if (d.value === 'wine') {
        res += '#37052A'
      } else {
        res += d.value
        console.warn('Warning:', d.value + ' is not valid.')
      }

      return res;
    }

    return function (root) {
      root.walkDecls(regex, function(decl) {
        decl.replaceWith(parseBrew(decl))
      })
    }
})
