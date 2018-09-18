import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

//Filters the content and displays in uppercase
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
})
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
