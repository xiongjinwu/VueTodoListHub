<template>
  <li>
    <label>

      <input @change="handleCheck(todoObj.id)" type="checkbox"  :checked="todoObj.done"/>
      <span v-show=" !todoObj.isEdit">{{todoObj.title}}</span>
      <input 
      type="text"
      v-my-focus
      ref="inputTitle"
      @blur="bandBlur(todoObj,$event)" 
      v-show="todoObj.isEdit"  
      :value="todoObj.title">

    </label>
    <button @click="handDelete(todoObj.id)" class="btn btn-danger" >删除</button>
    <button v-show=" !todoObj.isEdit" @click="handEdit(todoObj)" class="btn btn-edit" >编辑</button>
    
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Item",
  props:['todoObj'],
  data() {
      return {
          
      }
  },
  //自定义指令，让文本框自动获得焦点
       directives:{
        'my-focus':{
           inserted(element,binding){
            element.focus();
         }
        }
       },
  methods: {
      handleCheck(id){
          console.log('当前点击的ID是：',id)
          //调用一下，通过跋山涉水从App传过来的方法
          // this.checkTodo(id) //不调用方式发送数据了，改为全局事件总线
          this.$bus.$emit('checkTodo',id)
      },
      //删除一项
      handDelete(id){
          if(confirm('确定删除吗？')){
              console.log('当前要删除的id是：',id)
              // this.deleteItem(id);  //不调用方式发送数据了，改为全局事件总线
              // this.$bus.$emit('deleteItem',id)//全局事件总线
              pubsub.publish('deleteItem',id) //发布消息订阅 传参给App组件
          }
       },
       //编辑的方法
       handEdit(todoObj){
         if(todoObj.hasOwnProperty('isEdit')){
           todoObj.isEdit = true;
         }else{
          this.$set(todoObj,'isEdit','true') //给data中的对象添加一个属性，用$set()
         }
           this.$nextTick(function(){
             this.$refs.inputTitle.focus();
           });
       },
       //失去焦点
       bandBlur(todoObj,e){
         todoObj.isEdit = false;//失去焦点改变isEdit的状态，并且更改修改后的值，给App传过去
          console.log('失去焦点，编辑后的新值和对应的id：',todoObj.id,e.target.value)
          if ( ! e.target.value.trim()) return alert('修改内容不能为空！')
        this.$bus.$emit('updateTodo',todoObj.id,e.target.value)
       }
    },
  
}
</script>

<style scoped>
   /*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li:hover{
    background-color: #cccccc;
}
li:hover button {
    display: block;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>