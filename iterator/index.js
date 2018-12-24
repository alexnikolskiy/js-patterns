class ListIterator {
  constructor(list) {
    let idx = 0;

    return {
      next() {
        let result = { value: undefined, done: true };

        if (idx < list.size) {
          result.value = list.get(idx);
          result.done = false;
          idx += 1;
        }

        return result;
      }
    };
  }
}

class List {
  constructor() {
    this.items = {};
  }

  get size() {
    return Object.keys(this.items).length;
  }

  get(index) {
    return this.items[index];
  }

  add(item) {
    this.items[this.size] = item;
  }

  [Symbol.iterator]() {
    return new ListIterator(this);
  }
}

module.exports = List;
