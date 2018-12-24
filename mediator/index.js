class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(msg) {
    console.log(`${this.name} send message: ${msg}`);
    this.chatroom.send(this, msg);
  }

  recieve(msg) {
    console.log(`${this.name} recieve message: ${msg}`)
  }
}

class Chatroom {
  constructor() {
    this.users = new Set();
  }

  register(user) {
    user.chatroom = this;
    this.users.add(user);
  }

  send(sender, msg) {
    for (let user of this.users) {
      if (user !== sender) {
        user.recieve(msg);
      }
    }
  }
}

const alex = new User('Alex');
const jhon = new User('Jhon');
const mary = new User('Mary');

const chatroom = new Chatroom(); // Mediator
chatroom.register(alex);
chatroom.register(jhon);
chatroom.register(mary);

alex.send('Hi!');
