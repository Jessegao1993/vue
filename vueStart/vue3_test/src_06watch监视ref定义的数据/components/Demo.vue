<template>
   <h2>当前求和为：{{sum}}</h2>
   <button @click="sum++">点我加一</button>
   <hr>
   <h2>当前的信息为{{msg}}</h2>
   <button @click="msg+='!'">修改信息</button>
</template>

<script>
import {ref,watch } from 'vue'
export default {
    name:'Demo',
    // vue2监视写法
    // watch:{
    //     // 简单写法
    //     // sum(){
    //     //     console.log('sum改变了')
    //     // }
    //     // 完整写法
    //     sum:{
    //         immedeiate:true,//立即监听
    //         deep:true,//深度监视
    //         handler(newValue,oldValue){
    //             console.log('sum改变了',newValue,oldValue) 
    //         }
    //     }
    // },
    setup(){
        let sum = ref(0)
        let msg = ref('hello')

        // vue3监视写法一：监视ref定义的一个响应式数据
        // watch(sum,(newValue,oldValue)=>{
        // console.log('sum改变了',newValue,oldValue)
        // },{immediate:true})

        // vue3监视写法二：监视ref定义的多个响应式数据
        watch([sum,msg],(newValue,oldValue)=>{
        console.log('sum或msg改变了',newValue,oldValue)
        })

    // 返回一个对象（常用）
        return {
        sum,
        msg
        }
  }
}
</script>

