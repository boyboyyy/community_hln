/*
 * @Author: tianleiyu 
 * @Date: 2024-04-22 15:36:51
 * @LastEditTime: 2024-05-16 13:20:42
 * @LastEditors: tianleiyu
 * @Description: 
 * @FilePath: /organization1/src/router/index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from './../views/HomeView.vue'
//引入token， 获取token
import { GET_TOKEN } from "@/utils/cookie";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: HomeView,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          name: '主页'
        }
      },
      {
        path: '/activityManagement',
        name: 'activityManagement',
        component: () => import(/* webpackChunkName: "about" */ '../views/activity/activityManagement.vue'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          name: '活动页面'
        }
      },
      {
        path: '/activity/:id',
        name: 'activity',
        component: () => import(/* webpackChunkName: "about" */ '../views/activity/activity.vue'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
      },
      {
        path: '/associationActivityManagement',
        name: 'associationActivityManagement',
        component: () => import(/* webpackChunkName: "about" */ '../views/activity/associationActivityManagement.vue'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import(/* webpackChunkName: "about" */ '../views/message/notice.vue'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: 'signIn',
        name: 'signIn',
        component: () => import(/* webpackChunkName: "about" */ '../views/message/signIn.vue'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: 'userInfo',
        name: 'userInfo',
        component: () => import(/* webpackChunkName: "about" */ '@/views/user/index.vue'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: 'userManage',
        name: 'userManage',
        component: () => import(/* 社团管理用户信息 */ '@/views/assosiation/userManage.vue'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  //用户登录界面
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  //用户注册界面
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: () => import(/* webpackChunkName: "about" */ '@/components/HelloWorld.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 全局守卫：登录拦截 本地没有存token,请重新登录
// router.beforeEach((to, from, next) => {
//   const token = (GET_TOKEN())
//   if (token) {
//     //已经登录了，如果想继续登录和注册都不可以
//     if (to.path == "/login" || to.path == "/register") {
//       //已经登录了，不让去登录。停留在首页
//       return next('/home')
//     } else {
//       //登录了，去的不是登录页面。放行
//       return next();
//     }
//   } else {
//     return router.push('/login')
//     //回到登录页面
//     console.log("未登录");
//     // return next('/login')
//   }
//一开始没登陆获取token的时候放行。
// next()
// router.beforeEach((to, from, next) => {
//   if (to.path == '/login') return next();
//   if (to.path == '/register') return next();
//   const tokenStr = GET_TOKEN()
//   if (!tokenStr) return next('/login')
//   next()
// })
// })

export default router
