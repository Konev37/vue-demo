import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/hello',
            component:()=>import("@/components/HelloWorld")
        },
        {
            path:'/test/test1',
            component:()=>import("@/components/part/test1")
        },
        {
            path:'/test/test2',
            component:()=>import("@/components/part/test2")
        }
    ]
})