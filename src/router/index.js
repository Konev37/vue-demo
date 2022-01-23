import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/list',
            name:'list',
            component:()=>import("@/components/list")
        },
        {
            path:'/test/test1',
            // 一定要写name, params必须用name来识别路径
            name:'test1',
            component:()=>import("@/components/part/test1"),
        },
        {
            path:'/test/test2',
            name:'test2',
            component:()=>import("@/components/part/test2")
        },
        {
            path:'/echarts',
            name:'echarts',
            component:()=>import("@/components/echarts")
        }
    ]
})