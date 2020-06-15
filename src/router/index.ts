import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Error from '../views/404.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pokemon/:id',
        name: 'Pokemon',
        component: () =>
            import(/* webpackChunkName: "pokemon" */ '../views/Pokemon.vue')
    },
    {
        path: '*',
        name: 'Error',
        component: Error
    }
];

const router = new VueRouter({
    routes,
    base: process.env.BASE_URL,
    mode: 'history'
});

export default router;
