// 创建一个路由器，并暴露出去

//  第二步，引入createRouter
import { createRouter, createWebHistory } from "vue-router";
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
    },
    {
      path: "/about",
      name: "aboutPage",
      component: About,
    },
  ],
});

// 暴露出去router
export default router;
