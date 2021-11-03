<template>
  <div class="school">
      <h2 @click="showName">学校名：{{name}}</h2>
      <h2>地址：{{address}}</h2>
      
  </div>
</template>

<script>
//引入混合
import mixin from '../mixin'
    export default {
        name:'School',
        mixins:[mixin],
        data(){
          return {
            name:'清华大学',
            address:'北京' 
          }
        },
        
    }
</script>

<style>
   .school{
     background-color: #cccccc;
   }
</style>