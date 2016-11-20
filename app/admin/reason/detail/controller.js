import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sortEndAction() {
      this.get('model.slides').forEach((slide, index) => {
        if (slide.get('order') != index) {
          slide.set('order', index);
          slide.save();
        }
      });
    }
  }
});
