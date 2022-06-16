<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h3>工作种类：{{person.job.type}}</h3>
  <h3>工作薪水：{{person.job.salary}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'App',
  setup(){
    let person = reactive({
      name:'Jesse',
      age:18,
      job:{
        type:'FE',
        salary:'30K'
      },
      hobby:['art','movie']
    })

    function changeInfo(){
      person.name= 'Bob'
      person.age= 40
      person.job.type = 'UI designer'
      person.job.salary = '40K'
    }
// 返回一个对象（常用）
    return {
     person,
    changeInfo
    }
  }
}
</script>


