const Message = require('./message');
const ConsoleOutput = require('./console-output');
const JSONOutput = require('./json-output');
const HtmlOuput = require('./html-output');

const message = new Message({
  author: 'Alex',
  time: Date.now(),
  text: 'Hello!'
});
const consoleOutput = new ConsoleOutput();
const jsonOutput = new JSONOutput();
const htmlOutput = new HtmlOuput();

message.output(consoleOutput);
console.log(message.output(jsonOutput));
console.log(message.output(htmlOutput));
