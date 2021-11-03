
//minxin 混合 School1组件和Student1组件公用一个配置项 显示名字的方法
const mixin = {
    methods:{
        showName(){
          alert(this.name);
        }
      },
      data() {
        return {
          x:222,
          y:123
        }
      },
};
//抛出 默认暴露
export default mixin;