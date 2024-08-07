// 创建一个路由器，并暴露出去

//  第二步，引入createRouter
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import News from "@/components/News.vue";
import About from "@/components/About.vue";

//  第二步，创建路由器
const router = createRouter({
  history: createWebHistory(), // 路由器的工作模式
  routes: [
    //  第三步，配置路由
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

// 暴露出去router
export default router;
