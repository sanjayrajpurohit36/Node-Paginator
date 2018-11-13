// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
window.$ = require('jquery')
global.JQuery = require('jquery')
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
require('../node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
