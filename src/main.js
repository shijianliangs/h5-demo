import Vue from 'vue'

//
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import router from "@/router";

//
import VueResource from 'vue-resource'

Vue.use(VueResource)

// mui
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

//mint-ui
import {Header, Swipe, SwipeItem} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import 'mint-ui/lib/style.css';

import App from './App.vue'

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
