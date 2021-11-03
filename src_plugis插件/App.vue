<template>
  <div id="app">
   
    <img alt="Vue logo" src="./assets/logo.png" />
   
    <hr>
    <h4>插件的学习 plugis</h4>
    <school/>
    <student/>
    <my-header/>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from './components/Student.vue'
export default {
  name:'App',
  components: { School ,Student},
  data() {
    return {
     
    };
  },
  methods: {
   
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
