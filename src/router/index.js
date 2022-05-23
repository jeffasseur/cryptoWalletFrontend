import { createRouter, createWebHashHistory } from "vue-router";

// importing different components to navigate without reloading the page
import Home from '../views/Home.vue';
import Wallet from '../views/Wallet.vue';
import Transfers from '../views/Transfers.vue';
import Profile from '../views/Profile.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Send from '../components/Send.vue';
 
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/wallet',
        name: 'Wallet',
        component: Wallet
    },
    {
        path: '/transfers',
        name: 'Transfers',
        component: Transfers
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/send',
        name: 'Send',
        component: Send
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;