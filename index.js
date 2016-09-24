var postcss = require('postcss')

var regex = /^brewbox$/

module.exports = postcss.plugin('postcss-brewbox-plugin', function (opts) {
    opts = opts || {}

    function parseBrew(d) {
      var res = "background: "
      console.log(d.value)

      if (d.value === "beer") {
        res += "#e79244"
      } else if (d.value === "wine") {
        res += "red"
      }

      return res;
    }

    return function (root) {
      root.walkDecls(function(decl) {
        if(decl.prop.match(regex)) {
          decl.replaceWith(parseBrew(decl))
        }
      })
    }
})
