var fs = require("fs")
var path = require('path')

module.exports = function(absoluteDir){
  var tree = {}

  fs.readdirSync(absoluteDir).forEach(function(file) {
    var key = file.replace(/\.json$/, '')
    tree[key] = require(path.join(absoluteDir, file));
  });

  return tree;
}

