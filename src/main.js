import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

//Filters the content and displays in uppercase
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
})
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
