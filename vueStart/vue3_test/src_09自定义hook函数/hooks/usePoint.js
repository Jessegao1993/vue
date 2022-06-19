import {reactive,onMounted,onBeforeUnmount} from 'vue'
export default function(){
    // 实现显示鼠标坐标点的数据
    let point = reactive({
        x: 0,
        y: 0
    })

    // 方法
    function savePoint(event){
        
            point.x = event.pageX
            point.y = event.pageY
        
    }
    // 生命周期
    onMounted(() => {
        window.addEventListener('click',savePoint)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click',savePoint)
    })

    return point
}