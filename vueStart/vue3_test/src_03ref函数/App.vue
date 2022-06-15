<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>工作种类：{{job.type}}</h3>
  <h3>工作薪水：{{job.salary}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    // 非响应式数据
    // let name = 'Jesse'
    // let age = 18

    // 响应式数据，基本类型
    let name = ref('Jesse')
    let age = ref(18)
     // 响应式数据，引用类型
    let job = ref({
      type:'FE',
      salary:'30K'
    })

    function changeInfo(){
      name.value = 'Bob'
      age.value = 40
      job.value.type = 'UI designer'
      job.value.salary = '40K'
    }
// 返回一个对象（常用）
    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>


