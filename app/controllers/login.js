import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  session: Ember.inject.service('auth'),

  form: {
    username: 'test',
    password: 'test1234'
  },

  validations: {
    'form.username': {
      presence: { message: 'The username can\'t be blank'}
    },
    'form.password': {
      length: { minimum: 8, messages: { tooShort: 'The password should be at least 8 characters' }}
    }
  },

  actions: {
    login() {
      this.validate().then(()=>{
        let {username, password} = this.get('form');
        this.get('session').authenticate(username, password).then(() => {
          this.transitionToRoute('dashboard');
        }).catch(() => {
          this.set('message', 'Login Failed');
        })
      }).catch(()=>{
        this.set('showErrors', true);
      })
    }
  }
});
