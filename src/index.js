
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router/index.js';

import AjaxService from "./core/tool/fetch-install.js";

// import LeComponents from "@CoreUILib/le-components.min.js?v1=1";
import LeComponents from "./core/comps/leComponents.js";

Vue.use(AjaxService);
Vue.use(LeComponents);
Vue.use(Vuex);

router.afterEach(function(to, from, next){
  
});

export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
