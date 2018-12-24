const assert = require('assert').strict;
const {
  Product,
  discount,
  tax,
  shipping,
} = require('./index');

let iphone = new Product('bread', 1000);

iphone = shipping(tax(discount(iphone)));

let cost = 1000 - (1000 * 10) / 100; // - discount
cost += cost * 20 / 100 + 20; // + tax & shipping

assert.strictEqual(iphone.cost(), cost);

console.info('OK!');
