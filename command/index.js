const COMMAND_ADD = 'add';
const COMMAND_SUB = 'sub';
const COMMAND_MUL = 'mul';
const COMMAND_DIV = 'div';

class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(value) {
    this.value += value;
  }

  sub(value) {
    this.value -= value;
  }

  mul(value) {
    this.value *= value;
  }

  div(value) {
    this.value /= value;
  }

  calc(type, value) {
    if (this[type]) {
      this[type].call(this, value);
    }
  }

  getValue() {
    return this.value;
  }
}

module.exports = {
  COMMAND_ADD,
  COMMAND_SUB,
  COMMAND_MUL,
  COMMAND_DIV,
  Calculator,
};
