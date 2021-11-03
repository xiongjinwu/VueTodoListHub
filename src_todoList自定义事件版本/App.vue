<template>
  <div id="app">
    <div class="todo-container">
    <div class="todo-wrap">
      <my-header @showData="showData"></my-header>
      <list :todos="todos" :checkTodo="checkTodo" :deleteItem="deleteItem"></list>
      <my-footer :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></my-footer>
    </div>
  </div>

  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import List from "./components/List.vue";
import MyFooter from './components/MyFooter.vue'
export default {
  name:'App',
  components: { MyHeader,MyFooter,List},
  data() {
        return {
            // todos:[
            //     // {id:'001',title:'读书',done:true},
            //     // {id:'002',title:'跑步',done:false},
            //     // {id:'003',title:'学习',done:true}
            // ],
            todos:JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    //添加本地存储，通过watch
  watch:{
     todos:{
       deep:true,//开启深度监视 不能用简写
       handler(newVal){
        localStorage.setItem('todos',JSON.stringify(newVal))
       }
     }
  },
  methods: {
      //获取Listz中的数据方法  子传父
      showData(datas){
        console.log('我是父元素，收到了子的数据',datas);
        //拿到数据，在数组开头加入
        this.todos.unshift(datas);
      },
      //勾选或者取消一个todo项
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.done = !todo.done;
        });
      },
      //删除用户选中的Item项 运用过滤的方法更新数组 过滤完的数据在付给数组
      deleteItem(id){
         this.todos = this.todos.filter((todo)=>{
          return todo.id !== id;
        })
      },
      //Footer页面的全选or取消勾选
      checkAllTodo(done){
        this.todos.forEach((todo)=>{
          todo.done = done; //不管现在每一项的状态是什么，都听传来的done值
        })
      },
      //清除已完成的todo
      clearAllTodo(){
        this.todos = this.todos.filter((todo)=>{
           return !todo.done;
        })
      }
   }
};
</script>

<style>
  /*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>
