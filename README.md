require-json-tree
=================

Load a directory containing json files into a hash keyed by filenames

`npm install require-json-tree`

## Usage

    index.js
    tree
    ├── file1.json
    └── file2.json

```javascript
// index.js
var path = require('path')
var requireJsonTree = require('require-json-tree')
var tree = requireJsonTree(path.join(__dirname, 'tree')) // absolute path only

console.log(tree)
// { file1: [ 'foo', 'bar' ], file2: { foo: 'bar' } }
```
