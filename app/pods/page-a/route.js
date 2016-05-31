import Ember from 'ember';

var PageARoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('page-a.header', {
      outlet: 'header'
    });
    this.render();
  }
});

export default PageARoute;
