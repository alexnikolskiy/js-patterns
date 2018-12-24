const superPowerMixin = {
  fly() {
    console.log('I can fly!');
  }
};

const addPassportMixin = {
  passport: '0001 123456'
};

function mixin(...mixins) {
  const base = function () {};
  base.prototype = mixins.reduce((acc, item) => ({...acc, ...item}), base.prototype);

  return base;
}

class Person extends mixin(superPowerMixin, addPassportMixin) {
  constructor(name) {
    super();
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const alex = new Person('Alex');
alex.fly();
console.log(alex.passport);
