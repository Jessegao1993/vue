<template>
  <div class="app">
    <h3>我是APP组件（祖）{{name}}--{{price}}</h3>
  </div>
</template>

<script>
import {ref,reactive,toRefs,readonly,isRef,isReactive,isReadonly,isProxy} from 'vue'
export default {
  name: 'App',
  
  setup(){
    let car = reactive({
      name:'honda',
      price:10
    })
    
    let sum = ref(0)

    let car2 = readonly(car)

    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car))  

    return{...toRefs(car),sum}
  }
}
</script>


