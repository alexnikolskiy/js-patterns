const assert = require('assert').strict;
const {
  COMMAND_ADD,
  COMMAND_SUB,
  COMMAND_MUL,
  COMMAND_DIV,
  Calculator
} = require('./index');

const calculator = new Calculator(5);

calculator.calc(COMMAND_ADD, 2); // 5 + 2 = 7
calculator.calc(COMMAND_SUB, 1); // 7 - 1 = 6
calculator.calc(COMMAND_MUL, 3); // 6 * 3 = 18
calculator.calc(COMMAND_DIV, 2); // 18 / 2 = 9

assert.strictEqual(calculator.getValue(), 9);
console.info('OK!');
