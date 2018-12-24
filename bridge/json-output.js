class JSONOutput {
  output(message = {}) {
    return JSON.stringify(message);
  }
}

module.exports = JSONOutput;
