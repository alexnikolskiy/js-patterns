const assert = require('assert').strict;
const logger = require('./index');

const obj = {
  firstName: 'Brendan',
  secondName: 'Eich'
};
const proxy = logger(obj);

proxy.firstName = 'Douglas';
proxy.secondName = 'Crockford';

assert.strictEqual(obj.firstName, proxy.firstName);
assert.strictEqual(obj.secondName, proxy.secondName);

console.info('OK!');

