<template>
    <div class="demo">
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>  
</template>

<script>
    export default{//直接暴露组件的配置对象，省略Vue.extend()
        name:'Student',//组件名，与文件名一致
        data(){
            return {
                msg:'我是一个上班族',
                name:'Jesse',
                sex:'male'
            }
        }
    }
    
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>