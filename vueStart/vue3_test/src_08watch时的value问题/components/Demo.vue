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
   
    setup(){
        let sum = ref(0)
        let msg = ref('hello')
        let person = ref({
            name:'Jesse',
            age:30,
            job:{
                j1:{
                    salary:20
                }
            }
        })
    
    watch(sum,() => {
        console.log('sum变了')
    })

// 监测 ref 生成的响应式对象数据两种方法
    // watch(person.value,() => {
    //     console.log('person里的数据变了')
    // })

    watch(person,() => {
        console.log('person里的数据变了')
    },{deep:true})

    // 返回一个对象（常用）
        return {
        sum,
        msg,
        person
        }
  }
}
</script>

