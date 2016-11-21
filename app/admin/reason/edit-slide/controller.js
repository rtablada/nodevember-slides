import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save({stuff: content}) {
      this.model.setProperties({content});

      this.model.save()
        .then(() => {
          this.transitionToRoute('admin.reason.detail', this.get('model.reason.id'));
        });
    }
  }
});
