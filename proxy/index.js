const logger = (obj) => (
  new Proxy(obj, {
    get(target, key) {
      console.log(`Reading prop [${key}]`);

      return Reflect.get(target, key);
    },
    set(target, key, value) {
      console.log(`Writing value '${value}' to prop [${key}]`);

      return Reflect.set(target, key, value);
    }
  })
);

module.exports = logger;
