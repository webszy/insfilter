import Vue from 'vue'
import App from './App.vue'
import './assets/instagram-filter.css'
Vue.config.productionTip = false
import html2canvas from 'html2canvas';
import {
  saveAs
} from 'file-saver'
Vue.prototype.$html2canvas = html2canvas
Vue.prototype.$save = saveAs
new Vue({
  render: h => h(App),
}).$mount('#app')
