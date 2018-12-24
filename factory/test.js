const assert = require('assert').strict;
const {
  Product,
  Book,
  CD,
  ProductFactory,
  BOOK_PRODUCT_TYPE,
  CD_PRODUCT_TYPE,
} = require('./index');

const book = ProductFactory.create({
  type: BOOK_PRODUCT_TYPE,
  name: 'The Idiot',
  price: 100,
  author: 'Dostoyevsky',
});
const cd = ProductFactory.create({
  type: CD_PRODUCT_TYPE,
  name: 'The Beatles',
  price: 200,
  artist: 'The Beatles',
});
const bread = ProductFactory.create({
  name: 'bread',
  price: 10
});

assert.ok(book instanceof Book);
assert.ok(cd instanceof CD);
assert.ok(bread instanceof Product);

console.info('OK!');
