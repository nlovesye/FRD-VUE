import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ViewUI from 'view-design'
import './assets/theme/index.less'

Vue.config.productionTip = false

Vue.use(ViewUI, {
  size: 'small'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
