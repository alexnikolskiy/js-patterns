class Menu {
  constructor(name) {
    this.name = name;
    this.children = new Set();
  }

  add(menuItem) {
    this.children.add(menuItem);

    return this;
  }

  remove(menuItem) {
    this.children.delete(menuItem);

    return this;
  }

  render(depth = 0) {
    console.log(`${'  '.repeat(depth)} /${this.name}`);

    for (let child of this.children) {
      child.render(depth + 1);
    }
  }
}

module.exports = Menu;
