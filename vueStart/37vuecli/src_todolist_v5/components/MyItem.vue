<template>
    <transition name="todo" appear>
        <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
            v-show="todo.isEdit" 
            type="text" 
            :value="todo.title" 
            @blur="handleBlur(todo,$event)"
            ref="inputTitle"
            >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button class="btn btn-danger" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
        </li>
    </transition>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    // 声明接收todo对象
    props:['todo'],
    methods:{
        handleCheck(id){
            // 通知App组件将todo对应的done值取反
            //this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
        },
        handleDelete(id){
            if (confirm('确定删除吗？')) {
                //this.deleteTodo(id)
                //this.$bus.$emit('deleteTodo',id)//事件总线
                // 重写handleDelete用消息订阅与发布
                pubsub.publish('deleteTodo',id)//发布
            }
        },
        handleEdit(todo){
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            } else {
                this.$set(todo,'isEdit',true)
            } 
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            }) 
        },
        // 失去焦点回调（真正执行修改逻辑）
        handleBlur(todo,e){
            todo.isEdit = false
            if(!e.target.value.trim()) return alert('输入不能为空')
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
        }
    }
}
</script>

<style scoped>
    /*item*/
    .todo-enter-active{
        animation: atguigu 0.5s linear;
    }
    .todo-leave-active{
        animation: atguigu 0.5s reverse;
    }
    @keyframes atguigu{
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    }
    li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }

    li label {
    float: left;
    cursor: pointer;
    }

    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }

    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }

    li:before {
    content: initial;
    }

    li:last-child {
    border-bottom: none;
    }

    li:hover{
    background-color: #ddd;
    }

    li:hover button{
    display: block;
    }
</style>