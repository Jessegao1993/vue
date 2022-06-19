<template>
   <h2>姓名：{{name}}</h2>
   <h2>年龄：{{age}}</h2>
   <h2>薪资：{{salary}}</h2>
   <button @click="name+='gao'">修改姓名</button>
   <button @click="age+=1">修改年龄</button>
   <button @click="salary+=1">修改薪资</button>
</template>

<script>
import {reactive,toRef,toRefs} from 'vue'
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
    //纯字符串，丢失响应式
    // const name1 = person.name
    // console.log('@@@@@',name1)

    // 带响应式的数据
    // const name2 = toRef(person,'name')
    // console.log('$$$$$$',name2)


    // 返回一个对象（常用）
        return {
        //person
        name:toRef(person,'name'),
        age:toRef(person,'age'),
        salary:toRef(person.job.j1,'salary')

        //...toRefs(person)//只转换第一层对象
        }
  }
}
</script>

