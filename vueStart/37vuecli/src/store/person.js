// 人员管理功能相关的配置
export default{
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if (value.name.indexOf('王')===0) {
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
        }
    },
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
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}