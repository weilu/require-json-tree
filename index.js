var fs = require("fs")
var path = require('path')

module.exports = function(directory){
  var parentDir = path.dirname(module.parent.filename)
  var dir = path.resolve(parentDir, directory)
  var tree = {}

  fs.readdirSync(dir).forEach(function(file) {
    var key = file.replace(/\.json$/, '')
    tree[key] = require(path.join(dir, file));
  });

  return tree;
}
