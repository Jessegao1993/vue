// 求和功能相关的配置
export default{
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
