import Ember from 'ember';
import inject from 'ember-service/inject';

export default Ember.Component.extend({
  clock: inject(),

  tagName: '',
});
