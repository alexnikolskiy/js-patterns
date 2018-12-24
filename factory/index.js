const BOOK_PRODUCT_TYPE = 'book';
const CD_PRODUCT_TYPE = 'cd';

class Product {
  constructor({ name, price } = {}) {
    this.name = name;
    this.price = price;
  }
}

class Book extends Product {
  constructor({ name, price, author } = {}) {
    super({ name, price });
    this.author = author;
  }
}

class CD extends Product {
  constructor({ name, price, artist } = {}) {
    super({ name, price });
    this.artist = artist;
  }
}

class ProductFactory {
  static create(options) {
    const { type } = options;
    let productClass;

    switch (type) {
      case BOOK_PRODUCT_TYPE:
        productClass = Book;
        break;
      case CD_PRODUCT_TYPE:
        productClass = CD;
        break;
      default:
        productClass = Product;
    }

    return new productClass(options);
  }
}

module.exports = {
  CD_PRODUCT_TYPE,
  BOOK_PRODUCT_TYPE,
  Product,
  Book,
  CD,
  ProductFactory,
};
