import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/components/MainPage.vue";
import AddProductPage from "@/components/AddProductPage.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/AddProductPage",
    name: "AddProductPage",
    component: AddProductPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
