<template>
    <div class="demo">
        <h2 @click="showName">公司名称：{{name}}</h2>
        <h2>公司地址：{{address}}</h2>
    </div>  
</template>

<script>
// 引入一个混合
    import {mixin} from '../mixin'  
    export default{//直接暴露组件的配置对象，省略Vue.extend()
        name:'Company',//组件名，与文件名一致
        data(){
            return {
                name:'dtgt',
                address:'chaoyang'
            }
        },
        mixins:[mixin]
    }
    
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>