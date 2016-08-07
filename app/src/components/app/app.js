import template from './app.html';
import style from './app.scss';

export default {
  template,
  // controllerAs: 'app',
  controller() {
    this.style = style;
    this.pets = [
      {name: 'Kobi'},
      {name: 'BuckWheat'},
      {name: 'Mr.Ted'},
    ];
  },
};
