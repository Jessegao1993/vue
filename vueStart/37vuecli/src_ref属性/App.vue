<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDom">点我输出上方DOM元素</button>
        <SchoolInfo ref="sch"></SchoolInfo>
    </div>
</template>

<script>
    import SchoolInfo from './components/SchoolInfo.vue'

    export default {
        name:'App',
        components:{
            SchoolInfo
        },
        data(){
            return{
                msg:'欢迎学习vue'
            }
        },
        methods:{
            showDom(){
                console.log(this.$refs.title)//真实DOM元素
                console.log(this.$refs.btn)//真实DOM元素
                console.log(this.$refs.sch)//School组件实例对象 VC
            }
        }
    }
</script>

<style>

</style>