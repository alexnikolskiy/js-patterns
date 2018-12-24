class Subject {
  constructor() {
    this.observers = new Set();
  }
  
  addObserver(observer) {
    observer.subject = this;
    this.observers.add(observer);
  }
  
  removeObserver(observer) {
    this.observers.delete(observer);
  }
  
  notify(context) {
    for (let observer of this.observers) {
      observer.update(context);
    }
  }

  static create(obj) {
    const subject = new Subject();

    return extend(obj, subject);
  }
}

function extend(obj, extension) {
  for(let key in extension) {
    obj[key] = extension[key];
  }

  const proto = Object.getPrototypeOf(extension);
  const props = Object.getOwnPropertyNames(proto);

  props.forEach(key => obj[key] = proto[key]);

  return obj;
}

document.addEventListener('DOMContentLoaded', () => {

  const main = Subject.create(document.getElementById('main'));
  const btn = document.getElementById('btn');
  const list = document.getElementById('list');

  main.addEventListener('click', (ev) => {
    console.log(ev.currentTarget.checked);
    main.notify(ev.currentTarget.checked);
  });

  btn.addEventListener('click', (ev) => {
    const check = document.createElement('input');

    check.type = 'checkbox';
    check.update = (value) => check.checked = value;
    main.addObserver(check);
    list.appendChild(check);
  })
});
