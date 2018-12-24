const assert = require('assert').strict;
const Events = require('./index');
let message;

const sub = Events.subscribe('message', (data) => message = data);
Events.publish('message', 'subscribe');

assert.strictEqual('subscribe', message);

Events.unsubscribe(sub);
Events.publish('message', 'unsubscribe');

assert.notStrictEqual('unsubscribe', message);

console.info('OK!');
