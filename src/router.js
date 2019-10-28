import Vue from 'vue';
import Router from 'vue-router';
import menus from "./pages/data.js";

const Layout = r=>require.ensure([],()=>r(require("./pages/layout/layout.vue")),"Layout");
const Base = r=>require.ensure([],()=>r(require("./pages/comps/base.vue")),"Base");

Vue.use(Router);

// function getMenus(){
//     let res = [];
//     for(let x in menus){
//         for(let item of menus[x].childs){
//             res.push(
//                 {path:`/:${x}/:${item.name}`,component:Base}
//             )
//         }
//     }
//     return res;
// }

// const routers = [
//     {
//         path: '/',
//         name: 'layout',
//         component: Layout,
//         children:getMenus()
//     }
// ];

const _router = new Router({
    routes: [
        {
            path:'/',
            component:Layout,
            children:[
                {path:':group/:item',component:Base}
            ]
        }
    ]
});

export default _router;
