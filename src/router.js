import Vue from 'vue';
import Router from 'vue-router';

const Layout = r=>require.ensure([],()=>r(require("./pages/layout/layout.vue")),"Layout");
const DemoPage = r=>require.ensure([],()=>r(require("./pages/demopage.vue")),"DemoPage");

Vue.use(Router);

const routers = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children:[
            {
                path: '/demoPage',
                name: 'DemoPage',
                component: DemoPage
            }
        ]
    }
];

const _router = new Router({
    routes: routers
});

export default _router;
