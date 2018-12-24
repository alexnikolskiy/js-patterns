class Message {
  constructor({
    author,
    time,
    text,
  } = {}) {
    this.author = author;
    this.time = time;
    this.text = text;
  }

  output(implementor) {
    return implementor.output(this);
  }
}

module.exports = Message;
