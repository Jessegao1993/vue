<template>
    <div class="student">
        <h1>{{msg}}</h1>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生姓名给app</button>
        <button @click="unbind">解绑jesse事件</button>
    </div>  
</template>

<script>
// 引入一个混合
    import {mixin} from '../mixin'
    export default{//直接暴露组件的配置对象，省略Vue.extend()
        name:'Student',//组件名，与文件名一致
        data(){
            return {
                msg:'我是一个上班族',
                name:'Jesse',
                sex:'male'
            }
        },
        mixins:[mixin],
        methods:{
            sendStudentName(){
                //触发Student组件实例身上的jesse事件
                this.$emit('jesse',this.name)
                this.$emit('gao')
            },
            unbind(){
                this.$off('jesse')//只适用于解绑一个自定义事件
                //this.$off(['jesse','gao'])//解绑多个自定义事件
                //this.$off()//解绑所有自定义事件
            }
        }
    }
    
</script>

<style>
    .student{
        background-color: seagreen;
    }
</style>