<template>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName"><br>
    名：<input type="text" v-model="person.lastName"> <br>
    <span>全名：{{fullName}}</span>
</template>

<script>
import {reactive} from 'vue'
export default {
    name:'Demo',
    computed:{
        fullName(){
            return this.person.firstName+'-'+this.person.lastName
        }
    },
    setup(){
        let person = reactive({
            firstName:'Jesse',
            lastName:'Gao'
        })

      
    // 返回一个对象（常用）
    return {
        person
    }
  }
}
</script>

<style>

</style>