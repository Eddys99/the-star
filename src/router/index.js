import { createRouter, createWebHistory } from 'vue-router';

import HomePage from "@/components/home-page";
import RegisterUser from "@/components/register-user";
import AuthenticateUser from "@/components/authenticate-user";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/register',
        name: 'RegisterUser',
        component: RegisterUser
    },
    {
        path: '/authenticate',
        name: 'AuthenticateUser',
        component: AuthenticateUser
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
