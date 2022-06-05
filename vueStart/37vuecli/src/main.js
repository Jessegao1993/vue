import Vue from 'vue'
import App from './App.vue'
// 引入插件
//import plugins from './plugins'
// 引入路由插件
import VueRouter from 'vue-router'
//import vueConfig from 'vue.config'
// 引入路由器
import router from './router'

//使用路由插件
Vue.use(VueRouter)

// 关闭vue的生产提示
Vue.config.productionTip = false


new Vue({
  el:'#app',
  render: h => h(App), 
  router:router
})
