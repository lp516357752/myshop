import Vue from 'vue'
import App from './App.vue'
import router from './router'

//关闭浏览器控制台关于环境的相关提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


