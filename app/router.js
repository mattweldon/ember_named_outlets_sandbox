import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('page-a', { path: '/page-a' });
  this.route('page-b', { path: '/page-b' });
});

export default Router;
