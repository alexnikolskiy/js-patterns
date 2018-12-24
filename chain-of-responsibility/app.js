const http = require('http');

class App {
  constructor() {
    this.handlers = [];
    this.handleRequests = this.handleRequests.bind(this);
    this.server = http.createServer(this.handleRequests);
  }

  use(handler) {
    this.handlers.push(handler);
  }

  handleRequests(req, res) {
    let index = 0;

    const next = () => {
      const handler = this.handlers[index++];

      if (handler) {
        handler(req, res, next);
      } else {
        this.defaultHandler(req, res);
      }
    };

    next();
  }

  defaultHandler(req, res) {
    res.write('default');
    res.end();
  }

  listen(port) {
    this.server.listen(port);
  }
}

module.exports = App;
