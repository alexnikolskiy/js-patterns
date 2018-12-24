class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  cost() {
    return this.price;
  }
}

const discount = (product) => {
  const price = product.cost();
  product.cost = () => price - (price * 10) / 100;

  return product;
};

const tax = (product) => {
  const price = product.cost();
  product.cost = () => price + (price * 20) / 100;

  return product;
};

const shipping = (product) => {
  const price = product.cost();
  product.cost = () => price + 20;

  return product
};

module.exports = {
  Product,
  discount,
  tax,
  shipping,
};
