import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(form) {
      this.store.createRecord('reason', form).save()
        .then(() => {
          this.transitionToRoute('admin.reason.index');
        });
    }
  }
});
