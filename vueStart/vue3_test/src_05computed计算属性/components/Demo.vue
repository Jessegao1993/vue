<template>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName"><br>
    名：<input type="text" v-model="person.lastName"> <br>
    <span>全名：{{person.fullName}}</span><br>
    完整姓名：<input type="text" v-model="person.fullName">
</template>

<script>
import {reactive,computed} from 'vue'
export default {
    name:'Demo',
    setup(){
        let person = reactive({
            firstName:'Jesse',
            lastName:'Gao'
        })

    // 计算属性-简写（不考虑计算属性被修改的情况）
    // person.fullName = computed(()=>{
    //     return person.firstName+'-'+person.lastName
    // })
    // 计算属性-完整写法
     person.fullName = computed({
        get(){
            return person.firstName+'-'+person.lastName
        },
        set(value){
            const nameArr = value.split('-')
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
        }
     })
      
    // 返回一个对象（常用）
    return {
        person,
    }
  }
}
</script>

<style>

</style>