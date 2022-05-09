<template>
    <div>
        <Student name="Joe" sex="female" :age="18"/>
    </div>
</template>

<script>
    import Student from './components/Student.vue'

    export default {
        name:'App',
        components:{
            Student
        },
        data(){
            return{
                msg:'欢迎学习vue'
            }
        }
    }
</script>

<style>

</style>