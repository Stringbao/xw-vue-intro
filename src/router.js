import Vue from 'vue';
import Router from 'vue-router';

const Layout = r=>require.ensure([],()=>r(require("./pages/layout/layout.vue")),"Layout");
const Base = r=>require.ensure([],()=>r(require("./pages/comps/base.vue")),"Base");

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
                component: Base
            },
            {
                path: '/textarea',
                name: 'textarea',
                component: Base
            }
        ]
    }
];

const _router = new Router({
    routes: routers
});

export default _router;
