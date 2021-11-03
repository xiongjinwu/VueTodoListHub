<template>
   <div>
       <h1>{{msg}}</h1>
       <h1>姓名：{{name}}</h1>
       <h1>性别：{{sex}}</h1>
       <h1>年龄：{{myAge}}</h1>
       <button @click="show">点击查看年龄</button>
       <button @click="updateAge">点击年龄加一</button>
   </div>
</template>

<script>
    export default {
        name:'Student',
        props:['name','age','sex'],
        data(){
            return {
                msg:'一个学生的信息',
                myAge:this.age //间接修改props中的年龄值
            }
        },
        methods:{
            show(){
                alert(this.age)
            },
            updateAge(){
                this.myAge++;
            }
        },
        
    }
</script>

<style>

</style>