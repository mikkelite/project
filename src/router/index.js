import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/components/MainPage.vue";
import AddProductPage from "@/components/AddProductPage.vue";
import ProductReview from "@/components/ProductReview.vue";
import UserPage from "@/components/UserPage.vue";

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
  {
    path: "/getProductReview/:id",
    name: "ProductReview",
    component: ProductReview,
  },
  {
    path: "/AccountCreation",
    name: "AccountCreation",
    component: UserPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
