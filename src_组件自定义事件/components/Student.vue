<template>
   <div>
       <h1>{{msg}}</h1>
       <h1>姓名：{{name}}</h1>
       <h1>性别：{{sex}}</h1>
       <h1>年龄：{{myAge}}</h1>
       <button @click="show">点击查看年龄</button>
      
   </div>
</template>

<script>
    export default {
        name:'Student',
       
        data(){
            return {
                msg:'一个学生的信息',
                name:'李四',
                sex:'男',
                myAge:12
            }
        },
        methods:{
            show(){
                alert(this.age)
            },
            
        },
        
    }
</script>

<style>

</style>