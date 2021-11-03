<template>
  <div id="app">
    <div class="todo-container">
    <div class="todo-wrap">
      <my-header @showData="showData"></my-header>

      <list :todos="todos" ></list>
      
      <my-footer :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></my-footer>
    </div>
  </div>

  </div>
</template>

<script>
import pubsub from 'pubsub-js' //引入第三方库，消息订阅与发布
import MyHeader from "./components/MyHeader.vue";
import List from "./components/List.vue";
import MyFooter from './components/MyFooter.vue'
export default {
  name:'App',
  components: { MyHeader,MyFooter,List},
  data() {
        return {
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
      //获取List中的数据方法  子传父
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
      deleteItem(_,id){
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
      //编辑后的新值
      updataTodo(id,title){
        this.todos.forEach((todo)=>{
         if(todo.id === id) todo.title = title; 
        })
      },
      //清除已完成的todo项
      clearAllTodo(){
        this.todos = this.todos.filter((todo)=>{
           return !todo.done;
        })
      }
   },
   //生命周期
   mounted() {
    this.$bus.$on('checkTodo',this.checkTodo)// 接收到了 item传来的Id判断取消或勾选
    this.$bus.$on('updateTodo',this.updataTodo)  //收到了编辑后的新值
    // this.$bus.$on('deleteItem',this.deleteItem)  //通过ID 删除一项  全局事件总线方式
     this.pubId = pubsub.subscribe('deleteItem',this.deleteItem) //消息订阅与发布

   },
   beforeDestroy(){
     this.$bus.$off(['checkTodo','deleteItem'])//销毁全局事件总线
     this.$bus.$off('updateTodo')
     pubsub.unsubscribe(this.pubId) //销毁消息订阅与发布
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

.btn-edit {
  color: #fff;
  background-color: #66da49;
  border: 1px solid #5cbd2f;
  margin-right: 5px;
}

.btn-edit:hover {
  color: #fff;
  background-color: #5cbd2f;
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
