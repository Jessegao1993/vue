<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="testHello">测试触发demo组件的hello事件</button>
</template>

<script>
import {reactive} from 'vue'
export default {
    name:'Demo',
    props:['msg','school'],
    emits:['hello'],
    setup(props,context){
        let person = reactive({
            name:'Jesse',
            age:18
        })

        function testHello(){
            context.emit('hello',666)
        }
    // 返回一个对象（常用）
    return {
        person,
        testHello
    }
  }
}
</script>

<style>

</style>