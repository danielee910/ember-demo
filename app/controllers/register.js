import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  session: Ember.inject.service('auth'),
  
  form: {
    username: '',
    company: '',
    country_code: '+1',
    mobile: '',
    acceptTerms: false,
    password: '',
    confirmPassword: ''
  },
  accept: Ember.computed('form.acceptTerms', function() {
    return !this.get('form.acceptTerms');
  }),
  confirmPassword: Ember.computed('form.password', 'form.confirmPassword', function() {
    if (this.get('form.password') !== this.get('form.confirmPassword')) {
      return ['Password does not match'];
    } else {
      return null;
    }
  }),

  validations: {
    'form.username': {
      presence: { message: "Username is required" }
    },
    'form.email': {
      presence: { message: "Email is required" },
      format: { with: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, allowBlank: true, message: 'Invalid Email' }
    },
    'form.company': {
      presence: { message: "Company is required" }
    },
    'form.mobile': {
      presence: { message: "Mobile phone is required" }
    },
    'form.password': {
      length: { minimum: 8, messages: { tooShort: "Password should be at least 8 characters"} }
    },
  },

  actions: {
    register() {
      this.validate().then(()=>{
        if (!this.get('confirmPassword')) {
          this.set('showErrors', false);
          this.get('session').registerUser(this.get('form')).then(() => {
            this.transitionToRoute('login');
          }).catch(() => {
            this.set('message', 'Reigsteration Failed');
          });
        } else {
          this.set('showErrors', true);
        }
      }).catch(() => {
        this.set('showErrors', true);
      });
    }
  }
});
