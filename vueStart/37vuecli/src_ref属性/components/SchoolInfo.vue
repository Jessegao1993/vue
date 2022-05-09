<template>
    <div class="demo">
        <h2>居住名称：{{houseName}}</h2>
        <h2>居住地址：{{houseAddress}}</h2>
        <button @click="showName">点我提示居住名称</button>
    </div>  
</template>

<script>
    export default{//直接暴露组件的配置对象，省略Vue.extend()
        name:'SchoolInfo',//组件名，与文件名一致
        data(){
            return {
                houseName:'xinying',
                houseAddress:'tongzhou'
            }
        },
        methods:{
            showName(){
                alert(this.houseName)
            }
        }
    }
    
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>