import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('auth'),

  actions: {
    logout() {
      this.get('session').logout().then(() => {
        this.transitionToRoute('login');
      });
    }
  }
});
