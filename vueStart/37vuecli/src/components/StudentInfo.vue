<template>
    <div class="demo">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="showAge">点我提示年龄</button>
    </div>  
</template>

<script>
    export default{//直接暴露组件的配置对象，省略Vue.extend()
        name:'StudentInfo',//组件名，与文件名一致
        data(){
            return {
                name:'Jesse',
                age:30
            }
        },
        methods:{
            showAge(){
                alert(this.age)
            }
        }
    }
    
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>