const Basket = (() => {
  const products = [];

  function addProduct(name, qty) {
    products.push(...Array(qty).fill(name));
  }

  function show() {
    console.log(products);
  }

  return {
    addProduct,
    show
  }
})();

Basket.addProduct('bread', 1);
Basket.addProduct('water', 2);
Basket.show(); // [ 'bread', 'water', 'water' ]

