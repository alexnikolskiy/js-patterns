const Menu = require('./menu');
const MenuItem = require('./menu-item');

const menu = new Menu('Design patterns');
const creationalMenu = new Menu('Creational');
const structuralMenu = new Menu('Structural');
const behavioralMenu = new Menu('Behavioral');

creationalMenu
  .add(new MenuItem('Module'))
  .add(new MenuItem('Singleton'))
  .add(new MenuItem('Factory'));

structuralMenu
  .add(new MenuItem('Facade'))
  .add(new MenuItem('Decorator'))
  .add(new MenuItem('Adapter'));

behavioralMenu
  .add(new MenuItem('Observer'))
  .add(new MenuItem('Pub-Sub'))
  .add(new MenuItem('Mediator'));

menu
  .add(creationalMenu)
  .add(structuralMenu)
  .add(behavioralMenu)
  .render();
