<template>
    <div class="demo">
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{myAge}}</h2>
        <button @click="addAge">点我长一岁</button>
    </div>  
</template>

<script>
    export default{//直接暴露组件的配置对象，省略Vue.extend()
        name:'Student',//组件名，与文件名一致
        data(){
            return {
                msg:'我是一个上班族',
                myAge:this.age
            }
        },
        props:['name','sex','age'], //简单声明接收
        // props:{ //接收的同时对数据进行类型限制
        //     name:String,
        //     sex:String,
        //     age:Number
        // }
        // props:{//接收的同时对数据进行类型限制+默认指定+必要限制
        //     name:{
        //         type:String,
        //         required:true
        //     },
        //     age:{
        //         type:Number,
        //         default:99,//默认配置项
        //     },
        //     sex:{
        //         type:String,
        //         required:true
        //     }
        // },
        methods:{
            addAge(){
                this.myAge++;
            }
        }
    }
    
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>