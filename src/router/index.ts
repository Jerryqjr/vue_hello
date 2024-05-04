//创建一个路由器,并暴露出去
import { createRouter, createWebHistory } from "vue-router"

//第一歩:引入createRouter
//引入一个一个可能要呈现的组件
import Home from "@/pages/HomePage.vue"
import About from "@/pages/AboutPage.vue"
import News from "@/pages/NewsPage.vue"
import Detail from "@/pages/Detail.vue"

const router = createRouter({
  history: createWebHistory(), //路由器的工作模式(history模式)
  //history: createWebHashHistory(), //hash模式
  routes: [
    {
      name: "home",
      path: "/home",
      component: Home,
    },
    {
      name: "about",
      path: "/about",
      component: About,
    },
    {
      name: "news",
      path: "/news",
      component: News,
      children: [
        {
          path: "detail",
          component: Detail,
        },
      ],
    },
  ],
})

///暴露router
export default router
