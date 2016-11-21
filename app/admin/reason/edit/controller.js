import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(form) {
      this.model.setProperties(form);

      this.model.save()
        .then(() => {
          this.transitionToRoute('admin.reason.detail', this.model);
        });
    }
  }
});
