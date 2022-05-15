import { createRouter, createWebHashHistory } from "vue-router";
// importing different components to navigate without reloading the page
import Home from '../components/Home.vue';
//import Wallet from '../components/Wallet.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/wallet',
        name: 'Wallet',
        //component: Wallet
        component: () => import('../components/Wallet.vue')
    },
    {
        path: '/transfers',
        name: 'Transfers',
        component: () => import('../components/Transfers.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../components/Profile.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;