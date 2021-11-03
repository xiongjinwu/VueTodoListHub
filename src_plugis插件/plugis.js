// const obj = {
//     install(){
//         console.log(111)
//     }
// };

// export default obj;
//直接导出
export default {
    install(Vue){
       // console.log(1111,Vue);//vue 指的是vm的构造这Vue

        //过滤器
        Vue.filter('myslice',(value)=>{
            //console.log("过滤器回调函数的形参指的是原来的值plugis",value);
            return value.slice(0,4)
        });
        //自定义指令
        Vue.directive('myfocus',{
            bind(element,binding){},
           inserted(element,binding){
               element.focus()
           }
        });
        //混合定义
        Vue.mixin({
            data() {
                return {
                    x:1,
                    y:10
                }
            },
        });
    }
}