import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 应用vuex插件
Vue.use(Vuex)
// 创建vuex中的store
// 准备actions，响应组件中动作
const actions = {}
// 准备mutations，操作数据state
const mutations = {}
// 准备state，存储数据
const state = {}


// 创建store并暴露
export default new Vuex.Store({
    actions,
    mutations,
    state,
})
