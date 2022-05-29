import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 应用vuex插件
Vue.use(Vuex)
// 创建vuex中的store

// 求和功能相关的配置
const countOptions = {
    namespaced:true,//开启命名空间
    actions:{
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
    },
    mutations:{
        ADD(state,value){
            state.sum += value
        },
        MINUS(state,value){
            state.sum -= value
        }
    },
    state:{
        sum:0, //当前的和
        name:'Jesse',
        city:'Beijing',
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}

// 人员管理功能相关的配置
const personOptions = {
    namespaced:true,
    actions:{},
    mutations:{
        ADD_PERSON(state,personObj){
            state.personList.push(personObj)
        }
    },
    state:{

    personList:[
        {id:'001',name:'Adom'},
        {id:'002',name:'Bob'}
    ]
    },
    getters:{}
}

// 创建store并暴露
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})
