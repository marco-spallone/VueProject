import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
    {
        path:'/home',
        name:'home',
        component:HomeView
    }
];

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes:routes
});

export default router;