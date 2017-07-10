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

  registerUser(info) {
    return new RSVP.Promise((resolve, reject) => {
      if (!info || this.get('users').any((user) => user.name === info.username)) {
        reject();
      } else {
        const users = this.get('users');
        let { username, company, country_code, mobile, password, email } = info;
        users.pushObject({
          username,
          company,
          password,
          email,
          mobile: country_code.substr(1) + mobile
        });
        this.saveUsers();
        resolve({name: username, password});
      }
    });
  },

  authenticate(username, password) {
    return new RSVP.Promise((resolve, reject) => {
      if (this.get('users').any((user) => user.username === username && user.password === password)) {
        const token = username + Date.now();
        console.log(token);
        this.setToken('token', token);
        resolve({token});
      } else {
        reject();
      }
    });
  },

  logout() {
    return new RSVP.Promise((resolve) => {
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
