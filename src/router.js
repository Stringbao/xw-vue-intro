import Vue from 'vue';
import Router from 'vue-router';

const Layout = r=>require.ensure([],()=>r(require("./pages/layout/layout.vue")),"Layout");

Vue.use(Router);

const routers = [
    {
        path: '/',
        name: 'Layout',
        component: Layout
    }
];

const _router = new Router({
    routes: routers
});

export default _router;
