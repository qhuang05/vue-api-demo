// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
// 导入axios
import axios from 'axios'
import vueaxios from 'vue-axios'
Vue.use(vueaxios,axios)
// 导入自定义vue插件
import utils from '@/assets/js/utils'
Vue.use(utils)
// 导入公用样式
import '@/assets/css/reset.css'
import '@/assets/css/common.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
