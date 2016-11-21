import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('slide-mode', { path: '/' }, function() {
    this.route('slide', { path: '/:reason_id' }, function() {
      this.route('view', { path: '/:slide_id' });
    });
  });

  this.route('admin', function() {
    this.route('reason', function() {
      this.route('new');
      this.route('detail', { path: '/:reason_id' });

      this.route('edit', { path: '/:reason_id/edit' });

      this.route('new-slide', { path: '/:reason_id/new-slide' });
      this.route('edit-slide', { path: '/:id/edit-slide/:slide_id' });
    });
  });
});

export default Router;
