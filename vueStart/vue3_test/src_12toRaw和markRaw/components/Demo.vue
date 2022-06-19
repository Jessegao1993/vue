<template>
   <h2>姓名：{{person.name}}</h2>
   <h2>年龄：{{person.age}}</h2>
   <h2>薪资：{{person.job.j1.salary}}</h2>
   <h2 v-show="person.car">汽车：{{person.car}}</h2>
   <button @click="person.name+='gao'">修改姓名</button>
   <button @click="person.age+=1">修改年龄</button>
   <button @click="person.job.j1.salary+=1">修改薪资</button>
   <button @click="showRawPerson">输出最原始的person</button>
   <button @click="addCar">给人添加一台车</button>
</template>.

<script>
import {reactive,toRaw,markRaw} from 'vue'
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
 
       function showRawPerson(){
            const p = toRaw(person) //只能处理reactive()的响应式数据
            console.log(p)
       }

        function addCar(){
            let car = {name:'honda',price:32}
            person.car = markRaw(car
        }
    // 返回一个对象（常用）
        return {
            person,
            showRawPerson,
            addCar
        }
  }
}
</script>

