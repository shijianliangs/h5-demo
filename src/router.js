import VueRouter from 'vue-router';
import Home from "@/components/tabbar/Home";
import Member from "@/components/tabbar/Member";
import ShopCar from "@/components/tabbar/ShopCar";
import Search from "@/components/tabbar/Search";

let router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/member', component: Member},
        {path: '/shopcar', component: ShopCar},
        {path: '/search', component: Search},
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的类router-link-active
});

export default router;