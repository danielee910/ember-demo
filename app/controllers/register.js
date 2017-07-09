import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('auth'),
  username: 'test',
  password: 'test1234',

  actions: {
    register() {
      let {username, password} = this.getProperties('username', 'password');
      this.get('session').registerUser(username, password).then(() => {
        this.set('message', 'User registered');
      }).catch(() => {
        this.set('message', 'Reigsteration Failed');
      });
    }
  }
});
