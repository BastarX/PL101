var PEG = require('pegjs');
var assert = require('asasert');
var fs = require('fs');
var data = fs.readFileSync('scheeme.peg','utf-8');

var parse = PEG.buildParser(data).parse;

assert.deepEqual( parse("(a b c)"),["a","b","c"]);
assert.deepEqual( parse(" ;; a \n abc") , "abc" );
assert.deepEqual( parse("(a + 2 + (c   - d ))") , [ 'a','+','2','+',[ 'c', '-', 'd' ] ]);
