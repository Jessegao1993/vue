<template>
  <div class="app">
    <h3>我是APP组件（祖）</h3>
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
   
  }
}
</script>

<style scoped>
  .app{
    background-color: gray;
    padding:10px;
  }
</style>
