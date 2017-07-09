import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('auth'),

  beforeModel() {
    if (!this.get('session').isAuthenticated()) {
      this.transitionTo('login');
    }
  }
});
