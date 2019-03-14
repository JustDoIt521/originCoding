import Vue from "vue"
import Router from "vue-router"

//引入组件
import company from "@/views/company.vue"
import huawei from "@/views/huawei.vue"
import mac from "@/views/mac.vue"
import apple from "@/views/apple.vue"
import ipad from "@/views/ipad.vue"
import iphone from "@/views/iphone.vue"
//路由引入
Vue.use(Router);

const router = new Router({
  routes:[
  {
    name: "company", //路由名称
    path: "/company", //路由路径
    component: company, //路由对应组件
    children:[
      {
        name: "apple",
        path: "apple",
        component: apple,
        children: [
          {
            name: "mac",
            path: "mac",
            component: mac
          },
          {
            name: "iphone",
            path: "iphone",
            component: iphone
          },
          {
            name: "ipad",
            path: "ipad",
            component: ipad
          },
        ]
      },
      {
        name: "huawei",
        path: "huawei",
        component: huawei
      }
    ]
  },
  {
    path: "/",   //主路由重定向至company组件
    redirect: "/company"
  }]
})

//将路由组件暴露出去
export default router;
