import Ember from 'ember';

export default Ember.Service.extend({
  time: null,
  init() {
    this._super(...arguments);

    this.set('currentTime', moment());

    window.setInterval(() => {
      this.set('currentTime', moment());
    }, 500);
  },
});
