<template>
  <Demo @hello="showHello" msg="hello" school="atguigu">
    <span>尚硅谷</span>
  </Demo>
</template>

<script>

import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components:{Demo},
  setup(){
    function showHello(){
      alert('你触发了hello事件')
    }

    return{
      showHello
    }
  }
}
</script>


