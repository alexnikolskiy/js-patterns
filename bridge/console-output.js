class ConsoleOutput {
  output(message = {}) {
    const { author, time, text } = message;

    console.log(`[${new Date(time)}] ${author}: ${text}`);
  }
}

module.exports = ConsoleOutput;
