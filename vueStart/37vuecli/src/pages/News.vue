<template>
    <ul>
        <li :style="{opacity}">欢迎学习vue</li>
        <li>news001</li><input type="text" name="" id="">
        <li>news002</li><input type="text" name="" id="">
        <li>news003</li><input type="text" name="" id="">
    </ul>
</template>

<script>
export default {
    name:'News',
    data(){
        return{
            opacity:1
        }
    },
    activated(){
            this.timer = setInterval(() => {
            this.opacity -= 0.01
            if(this.opacity<=0) this.opacity = 1
        }, 16);
    },
    deactivated(){
         clearInterval(this.timer)
    }
    // mounted(){
    //     this.timer = setInterval(() => {
    //         this.opacity -= 0.01
    //         if(this.opacity<=0) this.opacity = 1
    //     }, 16);
    // },
    // beforeDestroy(){
    //     clearInterval(this.timer)
    // }
}
</script>

<style>

</style>