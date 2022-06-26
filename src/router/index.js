import { createRouter, createWebHashHistory } from 'vue-router'
import ControlMain from '../views/ControlMain';
import ControlLogin from '../views/ControlLogin';
import UserControl from '../components/UserControl';
import PileControl from '../components/PileControl';
const routes = [
    {
        path: '/controlmain',
        name: 'ControlMain',
        component: ControlMain
    },
    {
        path: '/controllogin',
        name: 'ControlLogin',
        component: ControlLogin,
        // children: [
        //     {
        //         path: 'usercontrol',
        //         name: 'UserControl',
        //         component: UserControl
        //     },
        //     {
        //         path: 'pilecontrol',
        //         name: 'PileControl',
        //         component: PileControl
        //     }
        // ]
    },
    {
        path: '/usercontrol',
        name: 'UserControl',
        component: UserControl
    },
    {
        path: '/pilecontrol',
        name: 'PileControl',
        component: PileControl
    }
]
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})
export default router