<template>
    <h2>当前x值是：{{x.y}}</h2>
    <button @click="x.y++">x增加</button>
    <hr>
   <h2>姓名：{{name}}</h2>
   <h2>年龄：{{age}}</h2>
   <h2>薪资：{{job.j1.salary}}</h2>
   <button @click="name+='gao'">修改姓名</button>
   <button @click="age+=1">修改年龄</button>
   <button @click="job.j1.salary+=1">修改薪资</button>
</template>

<script>
import {ref,reactive,toRef,toRefs,shallowRef,shallowReactive} from 'vue'
export default {
    name:'Demo',
   
    setup(){
        let person = reactive({
            name:'Jesse',
            age:30,
            job:{
                j1:{
                    salary:20
                }
            }
        })
 
        let x = shallowRef({//shallowRef不处理对象类型的响应式数据
            y:0
        })

    // 返回一个对象（常用）
        return {
        x,
        ...toRefs(person)
        }
  }
}
</script>

