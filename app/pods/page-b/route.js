import Ember from 'ember';

var PageBRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('page-b.header', {
      outlet: 'header'
    });
    this.render();
  }
});

export default PageBRoute;
