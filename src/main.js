// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import $ from 'jquery'
import lodash from 'lodash'
Object.defineProperty(Vue.prototype, '$_', { value: lodash })
global.$ = $
// eslint-disable-next-line
import Popper from "vue-popperjs";
// eslint-disable-next-line
import "vue-popperjs/dist/css/vue-popper.css";
global.Popper = Popper
// eslint-disable-next-line
let Bootstrap = require("bootstrap");
// eslint-disable-next-line
import "bootstrap/dist/css/bootstrap.css";
// eslint-disable-next-line
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
