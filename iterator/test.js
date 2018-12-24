const assert = require('assert').strict;
const List = require('./index');

const list = new List();

list.add(1);
list.add(2);
list.add(3);

assert.deepStrictEqual([...list], [1,2,3]);

console.info('OK!');
