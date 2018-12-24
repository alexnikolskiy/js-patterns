const Events = (() => {
  const topics = {};
  let id = 0;
  
  function publish(topic, ...args) {
    if (!topics[topic]) {
      return;
    }

    topics[topic].forEach(func => func.apply(this, args));
  }

  function subscribe(topic, cb) {
    if (!topics[topic]) {
      topics[topic] = new Map();
    }

    topics[topic].set(++id, cb);

    return id;
  }

  function unsubscribe(id) {
    for (let topic in topics) {
      if (topics[topic].has(id)) {
        topics[topic].delete(id);
        break;
      }
    }
  }

  return {
    publish,
    subscribe,
    unsubscribe
  }
})();

module.exports = Events;
