<template>
    <ul>
        <!-- <li>消息编号：{{$route.params.id}}</li>
        <li>消息标题：{{$route.params.title}}</li> -->
        <li>消息编号：{{id}}</li>
        <li>消息标题：{{title}}</li>
    </ul>
</template>

<script>
export default {
    name:'Detail',
    // props:['a','b']
    props:['id','title']
}
</script>

<style>

</style>