<template>
  <div class="school">
      <h2>学校名：{{name}}</h2>
      <h2>地址：{{address}}</h2>
      <button @click="show">点击按钮查看学校地址</button>
      
      <!-- student组件 -->
      <student name="张三" :age="15" sex="男"/>
      <hr>
  </div>
</template>

<script>
   import Student from './Student.vue'
    export default {
        name:'School',
        components:{Student},
        data(){
          return {
            name:'清华大学',
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

<style>
   .school{
     background-color: #cccccc;
   }
</style>