import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import("@/pages/Home/index"),
        meta: {
            show: true
        }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: () => import("@/pages/Search/index"),
        meta: {
            show: true
        },
    },
    {
        path: '/register',
        component: () => import("@/pages/Register/index"),
        meta: {
            show: false
        }
    },
    {
        path: '/login',
        component: () => import("@/pages/Login/index"),
        meta: {
            show: false
        }
    }

]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
