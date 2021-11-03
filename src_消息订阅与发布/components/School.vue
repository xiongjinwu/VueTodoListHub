<template>
  <div class="school">
      <h2>学校名：{{name}}</h2>
      <h2>地址：{{address}}</h2>
  </div>
</template>

<script>
   //接受数据的组件，引入第三方消息订阅库
   import pubsub from 'pubsub-js'
    export default {
        name:'School',
        data(){
          return {
            name:'清华大学',
            address:'北京' 

          }
        },
        methods: {
          //写个方法接受学生的名字 带参数，或在生命周期mounted中 用箭头函数接受数据局
          // getName(data){
          //   console.log('School组件收到学生姓名是：',data)
          // },
        },
        mounted() {
          // this.$bus.$on('stuName',this.getName) //方法定义到了methods中
          //通过消息订阅，收数据
         this.pubId = pubsub.subscribe('stuName',(eventName,data)=>{
           
            console.log('收到了学生名字',data)
          })
        },

        //解绑发送学生名字的事件 
        beforeDestroy(){
          // this.$bus.$off('stuName') //全局事件总线的销毁
          pubsub.unsubscribe(this.pubId) //订阅消息的销毁
        }
        
    }
</script>

<style lang="less">
   .school{
     background-color: #cccccc;
   }
</style>