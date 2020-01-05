import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: () => import('@/layouts/main.vue'),
        children: [
            {
                path: '/',
                redirect: '/dashboard'
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes, 
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
})

export default router;