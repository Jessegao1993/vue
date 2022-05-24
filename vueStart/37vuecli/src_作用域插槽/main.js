import Vue from 'vue'
import App from './App.vue'
// 引入插件
//import plugins from './plugins'
//引入插件 
import vueResource from 'vue-resource'
// 关闭vue的生产提示
Vue.config.productionTip = false

// 应用插件
//Vue.use(plugins)
Vue.use(vueResource)

new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this //注册全局事件总线
  }
})
