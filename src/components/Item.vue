<template>
  <li>
    <label>
      <input @change="handleCheck(todoObj.id)" type="checkbox"  :checked="todoObj.done"/>
      <span>{{todoObj.title}}</span>
    </label>
    <button @click="handDelete(todoObj.id)" class="btn btn-danger" >删除</button>
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
                pubsub.publish('deleteItem',id)
          }
      },
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