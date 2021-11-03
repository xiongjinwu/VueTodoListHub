import Vue from 'vue' //引入vue
import App from './App.vue'
//引入插件
//import plugins from './plugis';

//import MyHeader from './components/MyHeader'//引入MyHeader组件


//Vue.use(plugins); //引入插件 全局使用

//Vue.component('my-header',MyHeader)//全局组件，也可以在App文件中引入

Vue.config.productionTip=false;
new Vue({
  el:'#app',
  render: h => h(App),
  // 创建全局事件总线，在vue的原型对象中
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
});