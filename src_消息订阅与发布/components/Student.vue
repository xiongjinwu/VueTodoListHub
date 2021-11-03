<template>
   <div>
       <p>消息订阅与发布 学习</p>
       <h1>{{msg}}</h1>
       <h1>姓名：{{name}}</h1>
       <h1>性别：{{sex}}</h1>
       <!-- <button @click="sendName">点击发送学生名给学校</button> -->
       <button @click="sendName2">点击发送姓名给学校 </button>
   </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'Student',
        data(){
            return {
                msg:'',
                name:'李四',
                sex:'男',
                
            }
        },
        methods: {
            //发送学生名字给学校
            // sendName(){
            //     this.$bus.$emit('stuName',this.name)
            // },
            //通过消息订阅 发送数据
            sendName2(){
                pubsub.publish('stuName',this.name)
            }
        },
    }
</script>

<style>

</style>