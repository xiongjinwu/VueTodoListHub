<template>
  <div>
    <div class="todo-header">
      <input @keyup.13="add" v-model="title" type="text" placeholder="请输入你的任务名称，按回车键确认" />
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid"; //下载安装 随机生成不同的字符
export default {
  name: "MyHeader",
  
  data() {
    return {
      title: ""
    };
  },
  methods: {
    //通过事件获取当前输入框的value值,或者v-model
    add() {
      //console.log(111,e.target.value)
      if (!this.title.trim()) return alert("内容不能为空！");
      const todoObj = { id: nanoid(), title: this.title, done: false };

      //在子准备好数据后，通过$emit() 和自定义事件
      this.$emit('showData',todoObj)
      //清空输入框
      this.title = "";
    }
  }
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>