<template>
  <div class="app">
    <h3>我是APP组件（祖）{{name}}--{{price}}</h3>
    <Child></Child>
  </div>
</template>

<script>
import {reactive,toRefs,provide} from 'vue'
import Child from './components/Child.vue'
export default {
  name: 'App',
  components:{Child},
  setup(){
    let car = reactive({
      name:'honda',
      price:10
    })
    provide('car',car)//给自己的后代组件传递数据
    return{...toRefs(car)}
  }
}
</script>

<style scoped>
  .app{
    background-color: gray;
    padding:10px;
  }
</style>
