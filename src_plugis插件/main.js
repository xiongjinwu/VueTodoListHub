import Vue from 'vue' //引入vue
import App from './App.vue'

//引入插件
import plugins from './plugis';
import MyHeader from './components/MyHeader'


Vue.config.productionTip=false;

Vue.use(plugins);

Vue.component('my-header',MyHeader)//全局组件，也可以在App文件中引入

new Vue({
  el:'#app',
  render: h => h(App)
});