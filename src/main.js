import Vue from 'vue'
import store from './store';
import App from './App'
import './styles/index.scss';

Vue.prototype.$store = store;
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
