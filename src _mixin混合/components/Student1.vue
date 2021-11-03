<template>
   <div>
       <h1 @click="showName">姓名：{{name}}</h1>
       <h1>性别：{{sex}}</h1>
       <h1>年龄：{{myAge}}</h1>
   </div>
</template>
<script>
 import mixin from '../mixin'
    export default {
        name:'Student',
        mixins:[mixin],//注册
        data(){
            return {
                name:'张三',
                sex:'男',
                myAge:12
            }
        },
        
        
    }
</script>

<style>

</style>