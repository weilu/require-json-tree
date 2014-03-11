require-json-tree
=================

Load a directory containing json files into a hash keyed by filenames

`npm install require-json-tree`

## Usage

    tree
    ├── file1.json
    └── file2.json

```javascript
var requireJsonTree = require('require-json-tree')
var tree = requireJsonTree('./tree')

console.log(tree) 
// { file1: [ 'foo', 'bar' ], file2: { foo: 'bar' } }
```
