class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotal() {
    return this.products.reduce((acc, item) => acc + item.price, 0);
  }
}

class AdvancedCart {
  constructor() {
    this.products = [];
  }

  add(product) {
    this.products.push(product);
  }

  getClientDiscount() {
    // Check client status and add some discount
    return 10;
  }

  applyCoupon() {
    // apply discount coupon
    return 5;
  }

  calcTotal() {
    let total = this.products.reduce((acc, item) => acc + item.price, 0);

    return total - total * (this.getClientDiscount() + this.applyCoupon()) / 100;
  }
}

class CartAdapter {
  constructor(cart) {
    this.cart = cart;
  }

  addProduct(product) {
    return this.cart.add(product);
  }

  getTotal() {
    return this.cart.calcTotal();
  }
}

// const cart = new Cart();
const cart = new CartAdapter(new AdvancedCart());

cart.addProduct({name: 'Bread', price: 20});
cart.addProduct({name: 'Water', price: 10});

console.log(cart.getTotal());
