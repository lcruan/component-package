import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Container from '../components/container/src/index.vue'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Container,
        children: [
            {
                path: '/',
                component: Home
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router