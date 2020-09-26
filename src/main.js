import Vue from 'vue'
import app from './app'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  render: h => h(app)
}).$mount('#app')
