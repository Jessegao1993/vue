<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>

import {ref,customRef} from 'vue'
export default {
  name: 'App',
  setup(){
    let timer
    // 自定义一个名为myRef的ref
    function myRef(value,delay){
      return customRef((track,trigger) => {
        return {
          get(){
            track()//通知vue追踪value数据的变化
            return value
          },
          set(newValue){
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger()//通知vue重新解析模版
            },delay)
          }
        }
      })
     
    }
    // let keyWord = ref('hello')//使用vue提供的内置ref
    let keyWord = myRef('hello',500)//使用自定义的ref
    return{keyWord}
  }
}
</script>


