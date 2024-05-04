//创建一个路由器,并暴露出去
import { createRouter, createWebHistory } from "vue-router"

//第一歩:引入createRouter
//引入一个一个可能要呈现的组件
import Home from "@/components/HomePage.vue"
import About from "@/pages/AboutPage.vue"
import News from "@/pages/NewsPage.vue"

const router = createRouter({
  history: createWebHistory(), //路由器的工作模式(history模式)
  //history: createWebHashHistory(), //hash模式
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/news",
      component: News,
    },
  ],
})

///暴露router
export default router
