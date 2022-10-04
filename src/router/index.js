import { createRouter, createWebHistory } from 'vue-router';

import RegisterUser from "@/components/register-user";
import AuthenticateUser from "@/components/authenticate-user";
import HomePage from "@/components/home-page";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/auth',
        name: 'AuthenticateUser',
        component: AuthenticateUser
    },
    {
        path: '/register',
        name: 'RegisterUser',
        component: RegisterUser
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
