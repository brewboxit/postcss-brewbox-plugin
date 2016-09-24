var postcss = require('postcss')

var regex = /^brewbox$/

module.exports = postcss.plugin('postcss-brewbox-plugin', function (opts) {
    opts = opts || {}

    function parseBrew(d) {
      var res = 'background: '
      console.log(d.value)

      if (d.value === 'beer') {
        res += '#FDB947'
      } else if (d.value === 'wine') {
        res += '#37052A'
      }

      return res;
    }

    return function (root) {
      root.walkDecls(regex, function(decl) {
        decl.replaceWith(parseBrew(decl))
      })
    }
})
