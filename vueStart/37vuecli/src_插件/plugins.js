export default {
    install(Vue){
        // 定义一个全局混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }
        })
    }
}

//export default obj//默认暴露