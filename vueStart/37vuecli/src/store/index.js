import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
// 应用vuex插件
Vue.use(Vuex)
// 创建vuex中的store

// 创建store并暴露
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})
