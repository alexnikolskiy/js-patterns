const Counter = function () {
  let count = 0;

  this.inc = () => {
    count += 1;
    return this;
  };

  this.dec = () => {
    count -= 1;
    return this;
  };

  this.getCount = () => {
    return count;
  };
};

module.exports = Counter;
