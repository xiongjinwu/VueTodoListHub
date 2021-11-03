<template>
     <div class="todo-footer" v-show="total">
        <label>
          <!-- <input :checked="isAll" @change="checkAll" type="checkbox"/> -->
          <input v-model="isAll" type="checkbox"/>
        </label>
        <span>
          <span>已完成{{doneTodo}}</span> / 全部{{total}}
        </span>
        <button @click="clearAll" class="btn btn-danger">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    name:'Footer',
    props:['todos'],
    data() {
      return {
         myTodos:[]
      }
    },
    methods: {
      clearAll(){
          // this.clearAllTodo();
          this.$emit('clearAllTodo');  //换成子给父传值的方法，不需要在调用父的方法了
      },
      //该方法，已通过v-model解决
      // checkAll(e){
      //    console.log('Footer方法',e.target.checked); //获取当前元素的checked的值 true或false
      //    //调用父中的方法
      //    this.checkAllTodo(e.target.checked);
      // }
    },
    //计算属性
    computed: {
      //全部
      total(){
        return this.todos.length;
      },
      //已完成的
      doneTodo(){
        // let i = 0;
        // this.todos.forEach( todo => {
        //    if(todo.done){
        //        i++;
        //    }
        // });
        // return i
        //使用数组中的汇总函数
         return this.todos.reduce((pre,todo)=>{
          //console.log("@",pre,todo)
          return pre + (todo.done ? 1 : 0)
        },0)
      },
      //复选框当全部选中时，打上勾
      isAll:{
        get(){
           return this.doneTodo === this.total && this.total>0;
        },
        set(value){
          // this.checkAllTodo(value);
          this.$emit('checkAllTodo',value)
        }
      }
    }
}
</script>

<style scoped>
    /*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>