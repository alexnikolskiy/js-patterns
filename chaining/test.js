const assert = require('assert').strict;
const Counter = require('./index');

const counter = new Counter();

assert.strictEqual(counter.inc().inc().dec().getCount(), 1);
console.info('OK!');
