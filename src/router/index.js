import { createRouter, createWebHistory } from 'vue-router'
import ControlMain from '../views/ControlMain';
import ControlLogin from '../views/ControlLogin';

const routes = [
    {
        path: '/controlmain',
        name: 'ControlMain',
        component: ControlMain
    },
    {
        path: '/controllogin',
        name: 'ControlLogin',
        component: ControlLogin
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router