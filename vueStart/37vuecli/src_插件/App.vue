<template>
    <div>
        <Student/>
        <Company/>
    </div>
</template>

<script>
import Company from './components/Company.vue'
import Student from './components/Student.vue'

    export default {
        name:'App',
        components:{
            Student,
            Company
        },
    }
</script>

<style>

</style>