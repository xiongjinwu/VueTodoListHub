<template>
  <div id="app">
    <!-- vue中获取DOM元素的方法  ref  -->
    <p v-text="msg" ref="p"></p>
    <button @click="heide">点击按钮让上方文字消失</button>
    <br />
    <img alt="Vue logo" src="./assets/logo.png" />
    <school ref="shc"></school>
    <hr>
    <h4>Minxin 混合学习</h4>
    <shhool1/>
    <student1/>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Shhool1 from './components/School1.vue'
import Student1 from './components/Student1.vue'
export default {
  name:'App',
  components: { School ,Shhool1,Student1},
  data() {
    return {
      msg: "显示文字"
    };
  },
  methods: {
    heide() {
      console.log(111,this.$refs)
      console.log(222,this.$refs.shc)//School组件实例对象
      this.msg = "";
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
