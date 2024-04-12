import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/components/MainPage.vue";
import AddProductPage from "@/components/AddProductPage.vue";
import ProductReview from "@/components/ProductReview.vue";
import UserRegister from "@/components/UserRegister.vue";
import UserLogin from '../components/UserLogin.vue';
import UserProfile from "@/components/UserProfile.vue";
import NavBar from "@/components/NavBar.vue";

const routes = [
  {
    path: "/Navbar",
    name: "NavBar",
    component: NavBar,
  },
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
    component: UserRegister,
  },
  {
    path: "/login",
    name: "UserLogin",
    component: UserLogin
  },
  {
    path: "/profile",
    name: "userProfile",
    component: UserProfile
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
