import Vue from 'vue';
import Router from 'vue-router';

const Layout = r=>require.ensure([],()=>r(require("./pages/layout/layout.vue")),"Layout");
const Input = r=>require.ensure([],()=>r(require("./pages/comps/input.vue")),"Input");

Vue.use(Router);

const routers = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        children:[
            {
                path: '/input',
                name: 'input',
                component: Input
            }
        ]
    }
];

const _router = new Router({
    routes: routers
});

export default _router;
