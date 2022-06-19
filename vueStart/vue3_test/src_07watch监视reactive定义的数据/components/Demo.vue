<template>
   <h2>当前求和为：{{sum}}</h2>
   <button @click="sum++">点我加一</button>
   <hr>
   <h2>当前的信息为{{msg}}</h2>
   <button @click="msg+='!'">修改信息</button>
   <hr>
   <h2>姓名：{{person.name}}</h2>
   <h2>年龄：{{person.age}}</h2>
   <button @click="person.name+='gao'">修改姓名</button>
   <button @click="person.age+=1">修改年龄</button>
</template>

<script>
import {ref,reactive,watch} from 'vue'
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
        let person = reactive({
            name:'Jesse',
            age:30,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        // vue3监视写法一：监视ref定义的一个响应式数据
        // watch(sum,(newValue,oldValue)=>{
        // console.log('sum改变了',newValue,oldValue)
        // },{immediate:true})

        // vue3监视写法二：监视ref定义的多个响应式数据
        // watch([sum,msg],(newValue,oldValue)=>{
        // console.log('sum或msg改变了',newValue,oldValue)
        // })

         /* 
         vue3监视写法三：监视reactive定义的一个响应式数据全部属性，但
            无法正确获得oldValue 
            强制开启深度监视无法关闭
         */
        //  watch(person,(newValue,oldValue) => {
        //     console.log('person改变了',newValue,oldValue)
        //  })   
        
        //vue3监视写法四：监视reactive定义的数据中的一个属性
        //  watch(()=>person.age,(newValue,oldValue) => {
        //     console.log('person年龄改变了',newValue,oldValue)
        //  }) 

         //vue3监视写法五：监视reactive定义的数据中的多个属性
        //  watch([()=>person.age,()=>person.name],(newValue,oldValue) => {
        //     console.log('person年龄或姓名改变了',newValue,oldValue)
        //  }) 

        // 特殊情况
        // watch(()=>person.job,(newValue,oldValue)=>{
        //     console.log('person薪资改变了',newValue,oldValue)
        // },{deep:true})//deep配置有效

    // 返回一个对象（常用）
        return {
        sum,
        msg,
        person
        }
  }
}
</script>

