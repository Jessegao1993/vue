<template>
   <h2>姓名：{{person.name}}</h2>
   <h2>年龄：{{person.age}}</h2>
   <h2>薪资：{{person.job.j1.salary}}</h2>
   <button @click="person.name+='gao'">修改姓名</button>
   <button @click="person.age+=1">修改年龄</button>
    <button @click="person.job.j1.salary+=1">修改薪资</button>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
    name:'Demo',
   
    setup(){
        let person = ref({
            name:'Jesse',
            age:30,
            job:{
                j1:{
                    salary:20
                }
            }
        })
    

    // 返回一个对象（常用）
        return {
        person
        }
  }
}
</script>

