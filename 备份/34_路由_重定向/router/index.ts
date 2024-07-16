// 创建一个路由器，并暴露出去

//  第二步，引入createRouter
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";

//  第二步，创建路由器
const router = createRouter({
  history: createWebHistory(), // 路由器的工作模式
  routes: [
    //  第三步，配置路由
    {
      path: "/home",
      name: "homePage",
      component: Home,
    },
    {
      path: "/news",
      name: "newsPage",
      component: News,
      children: [
        {
          path: "detail", // 子集不用写：”/“，加"?"表示可选，可传可不传
          name: "newsDetail",
          component: () => import("@/pages/Detail.vue"),
          // 第一种写法：将路由收到的所有params参数作为props传给路由组件
          // props: true,
          // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
          props(route) {
            return route.query;
          },
          // 第三种写法：对象写法，可以自己决定将什么作为props给路由组件
          /*  props: {
             id: "id",
             title: "title",
          } */
        },
      ],
    },
    {
      path: "/about",
      name: "aboutPage",
      component: About,
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});

// 暴露出去router
export default router;
