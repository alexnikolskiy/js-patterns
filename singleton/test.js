const assert = require('assert');
const Basket = require('./index.js');

const cart = Basket.getInstance();
cart.addProduct('bread', 1);
cart.addProduct('water', 2);

const cart2 = Basket.getInstance();

assert.deepEqual(cart, cart2);

console.info('OK!');
