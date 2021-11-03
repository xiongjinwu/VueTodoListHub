<template>
  <div class="school">
      <h2>学校名：{{name}}</h2>
      <h2>地址：{{address}}</h2>
     <button @click="sendName">点击按钮发送学校名</button>
  </div>
</template>

<script>
   
    export default {
        name:'School',
        data(){
          return {
            name:'清华大学',
            address:'北京' 

          }
        },
        methods: {
          //发送数据  这里通过点击事件发给学生
          sendName(){
            this.$bus.$emit('demo',this.name)
          }
        },
    }
</script>

<style lang="less">
   .school{
     background-color: #cccccc;
   }
</style>