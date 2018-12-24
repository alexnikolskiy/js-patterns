const Basket = (() => {
  const init = function initializeBasket() {
    return {
      products: [],
      addProduct(name, qty) {
        this.products.push(...Array(qty).fill(name));
      },
      show() {
        console.log(this.products);
      },
    }
  };

  let instance;

  return {
    getInstance() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
})();

module.exports = Basket;
