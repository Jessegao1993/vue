import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 应用vuex插件
Vue.use(Vuex)
// 创建vuex中的store
// 准备actions，响应组件中动作
const actions = {
    // add(context,value){
    //     context.commit('ADD',value)
    // },
    // minus(context,value){
    //     context.commit('MINUS',value)
    // },
    addOdd(context,value){
        if (context.state.sum%2) {
            context.commit('ADD',value)
        }
    },
    addWait(context,value){
        setTimeout(()=>{
            context.commit('ADD',value)
        },500)
    }
   
}
// 准备mutations，操作数据state
const mutations = {
    ADD(state,value){
        state.sum += value
    },
    MINUS(state,value){
        state.sum -= value
    },
   
}
// 准备state，存储数据
const state = {
    sum:0, //当前的和
    name:'Jesse',
    city:'Beijing'
}

// 准备getters ,加工state中数据
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

// 创建store并暴露
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
