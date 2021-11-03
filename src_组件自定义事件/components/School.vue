<template>
  <div class="school">
      <h2>学校名：{{name |myslice}}</h2>
      <h2>地址：{{address}}</h2>
      自动获取焦点来自插件：<input type="text" v-myfocus> <br>
      <button @click="sendName">点击给</button>
      
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
        },
        mounted() {
            this.$bus.$on('',(data)=>{
               console.log('我是学校组件，收到学生名字：',data)
            })
        },
    }
</script>

<style lang="less">
   .school{
     background-color: #cccccc;
   }
</style>