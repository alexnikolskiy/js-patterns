function extend(target, source) {
  for (let key in source) {
    target[key] = source[key];
  }
}

class TextField {
  constructor(options) {
    this.elem = document.createElement('input');
    extend(this.elem, options);
    this.elem.type = 'text';
  }
}

class EmailField {
  constructor(options) {
    this.elem = document.createElement('input');
    extend(this.elem, options);
    this.elem.type = 'email';
  }
}

class PasswordField {
  constructor(options) {
    this.elem = document.createElement('input');
    extend(this.elem, options);
    this.elem.type = 'password';
  }
}

class Form {
  constructor(options = {}) {
    this.elem = document.createElement('form');
    extend(this.elem, options);
    this.fields = [];
  }

  addField({ type, ...options } = {}) {
    let field;

    switch(type) {
      case 'text':
        field = new TextField(options);
        break;
      case 'email':
        field = new EmailField(options);
        break;
      case 'password':
        field = new PasswordField(options);
        break;
      default:
        throw new Error(`Unknown type ${type}`);
    }

    this.fields.push(field);

    return this;
  }

  build() {
    this.fields.forEach(field => (
      this.elem.appendChild(field.elem)
    ));

    return this.elem;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = new Form({
    id: 'form',
    action: '/',
    method: 'GET'
  });

  const formElem = form
    .addField({ type: 'text', name: 'login' })
    .addField({ type: 'email', name: 'email' })
    .addField({ type: 'password', name: 'password' })
    .build();

  document.body.appendChild(formElem);
});
