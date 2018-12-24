class Flyweight {
  constructor({ manufacturer, model, } = {}) {
    this.manufacturer = manufacturer;
    this.model = model;
  }
}

const FlyWeightFactory = (() => {
  const flyweights = new Map();

  return {
    get({manufacturer, model}) {
      const key = `${manufacturer}-${model}`;

      if (!flyweights.has(key)) {
        flyweights.set(key, new Flyweight({manufacturer, model}))
      }

      return flyweights.get(key);
    },
    getCount() {
      return flyweights.size;
    }
  }
})();

class Cart {
  constructor() {
    this.products = [];
  }

  add(product) {
    this.products.push(product);
  }

  getCount() {
    return this.products.length;
  }
}

class Notebook {
  constructor({
    manufacturer,
    model,
    processor,
    memory,
    price,
  } = {}) {
    this.flyweight = FlyWeightFactory.get({ manufacturer, model });
    this.processor = processor;
    this.memory = memory;
    this.price = price;
  }
}

const cart = new Cart();

cart.add(new Notebook({
  manufacturer: 'Apple',
  model: 'MackBook',
  processor: 'Intel',
  memory: '8G',
  price: 2000
}));

cart.add(new Notebook({
  manufacturer: 'Apple',
  model: 'MackBook',
  processor: 'Intel',
  memory: '16G',
  price: 2500
}));

cart.add(new Notebook({
  manufacturer: 'Apple',
  model: 'MackBook',
  processor: 'Intel',
  memory: '32G',
  price: 3000
}));

console.log(cart.getCount()); // 3
console.log(FlyWeightFactory.getCount()); // 1
