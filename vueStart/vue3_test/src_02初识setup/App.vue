<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>


export default {
  name: 'App',
  // 测试setup暂时不考虑响应式
  setup(){
    let name = 'Jesse'
    let age = 18

    function  sayHello() {
        console.log(`Hello, my name is ${name} and my age is ${age}`)
    }
// 返回一个对象（常用）
    return {
      name,
      age,
      sayHello
    }
  }
}
</script>


