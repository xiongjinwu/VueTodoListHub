<template>
  <div class="school">
      <h2>学校名：{{name |myslice}}</h2>
      <h2>地址：{{address}}</h2>
      自动获取焦点来自插件：<input type="text" v-myfocus> <br>
      <button @click="show">点击按钮查看学校地址</button>
      
  </div>
</template>

<script>
   
    export default {
        name:'School',
        data(){
          return {
            name:'清华大学qinghuadaxue',
            address:'北京' 
          }
        },
        methods:{
          show(){
            alert(this.address);
          }
        }
    }
</script>

<style lang="less">
   .school{
     background-color: #cccccc;
   }
</style>