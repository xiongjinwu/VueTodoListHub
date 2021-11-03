<template>
   <div>
       <p>全局事件总线学习，在main.js中创建$bus放到Vue的原型对象中通过生命周期beforeCreate</p>
       <h1>{{msg}}</h1>
       <h1>姓名：{{name}}</h1>
       <h1>性别：{{sex}}</h1>
      
   </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return {
                msg:'“全局事件总线”收到学校组件的学校名称，在控制台打印出名字',
                name:'李四',
                sex:'男',
                
            }
        },
        methods: {
            getSchoolName(data){
                console.log('获取了学校名：',data)
            },
            
        },
        //在生命周期挂载之后，接受数据  
        mounted() {
            this.$bus.$on('demo',this.getSchoolName)
        },
        //最后建议  在接受数据的组件解绑事件
        beforeDestroy(){
            this.$bus.$off('demo')
        }
    }
</script>

<style>

</style>