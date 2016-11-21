import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  time: null,
  init() {
    this.set('time', moment());

    window.setInterval(() => {
      this.set('time', moment());
    }, 500);
  }
});
