<template>
     <ul class="todo-main">
       <item 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todoObj="todoObj"
        :checkTodo="checkTodo"
        :deleteItem="deleteItem"
        >
        </item>
      </ul>
</template>

<script>
import Item from './Item.vue'
export default {
    name:'List',
    components:{Item},
    props:["todos","checkTodo","deleteItem"],//接受app传来的数据,和中转item所需要的checkTodo
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
    /*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>