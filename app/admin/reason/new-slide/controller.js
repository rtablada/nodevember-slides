import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save({stuff: content}) {
      this.store.createRecord('slide', {
        reason: this.model,
        content,
        order: this.model.get('slides.length'),
      }).save()
        .then(() => {
          this.transitionToRoute('admin.reason.detail', this.model);
        });
    }
  }
});
