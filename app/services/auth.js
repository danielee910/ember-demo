import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Service.extend({

  users: [],
  token: '',

  init() {
    this.loadUsers();
    this.loadToken();
  },

  isAuthenticated() {
    return this.get('token');
  },

  setToken(token) {
    this.set('token', token);
    this.saveToken();
  },

  registerUser(username, password) {
    return new RSVP.Promise((resolve, reject) => {
      if (!username || !password
          || this.get('users').any((user) => user.name === username && user.password === password)) {
        reject();
      } else {
        let users = this.get('users');
        users.pushObject({name: username, password});
        this.saveUsers();
        resolve({name: username, password});
      }
    });
  },

  authenticate(username, password) {
    return new RSVP.Promise((resolve) => {
      if (this.get('users').any((user) => user.name === username && user.password === password)) {
        const token = username + Date.now();
        this.setToken('token', token);
        resolve({token});
      } else {
        reject();
      }
    });
  },

  logout() {
    return new RSVP.Promise((resolve, reject) => {
      this.setToken('');
      resolve();
    })
  },

  saveUsers() {
    let users = this.get('users');
    localStorage.setItem('cos_users', JSON.stringify(users));
  },

  loadUsers() {
    let users = JSON.parse(localStorage.getItem('cos_users'));
    if (users) {
      this.set('users', users);
    } else {
      this.set('users', [])
    }
  },

  saveToken() {
    localStorage.setItem('cos_token', this.get('token'));
  },

  loadToken() {
    let token = localStorage.getItem('cos_token');
    this.set('token', token);
  }

});
