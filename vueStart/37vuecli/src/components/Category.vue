<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义作用域插槽 -->
    <slot :games="games"></slot>
  </div>
</template>

<script>
    export default {
        name:'Category',
        props:['listData','title'],
        	 data(){
          return{
           
            games:['redalert','minecraft','csgo','bingo'],
           
          }
        },
    }
</script>

<style>
  .category{
    background-color: skyblue;
    width: 200px;
    height:400px;
  }
  h3{
    text-align: center;
    background-color: orange;
  }
  img{
    width: 100%;

  }
</style>



   