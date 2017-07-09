import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('auth'),

  actions: {
    login() {
      let {username, password} = this.getProperties('username', 'password');
      this.get('session').authenticate(username, password).then(() => {
        this.transitionToRoute('dashboard');
      }).catch(() => {
        this.set('message', 'Login Failed');
      })
    }
  }
});
