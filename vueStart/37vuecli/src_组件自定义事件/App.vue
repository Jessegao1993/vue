<template>
    <div class="app">
        <h1>{{msg}}-{{studentName}}</h1>
        <!-- 通过父组件给子组件绑定一个自定义事件的方式实现：子组件给父组件传递数据 （第一种写法，使用@或v-on）-->
        <Student v-on:jesse="getStudentName" v-on:gao="demo"/>

        <!-- 通过父组件给子组件绑定一个自定义事件的方式实现：子组件给父组件传递数据（第二种写法，使用ref） -->
        <!-- <Student ref="student"/> -->


        <!-- 通过父组件给子组件传递函数类型的props的方式实现：子组件给父组件传递数据 -->
        <Company :getCompanyName="getCompanyName" @click.native="show"/>
    </div>
</template>

<script>
import Company from './components/Company.vue'
import Student from './components/Student.vue'

    export default {
        name:'App',
        data(){
            return{
                msg:'hello',
                studentName:''
            }
        },
        components:{
            Student,
            Company
        },
        methods:{
            getCompanyName(name){
                console.log("app收到了company组件的name",name)
            },
            getStudentName(name){
                console.log('getStudentName被调用了',name)
                this.studentName = name
            },
            demo(){
                console.log('demo被调用了')
            },
            show(){
                alert('123')
            }
        },
        // mounted(){
        //     this.$refs.student.$on('jesse',this.getStudentName)
        // }
    }
</script>

<style>
    .app{
        background-color: bisque;
    }
</style>