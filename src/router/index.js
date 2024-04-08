import { createWebHistory, createRouter } from 'vue-router';
import MainPage from '@/components/MainPage.vue';
import AddProductPage from '@/components/AddProductPage.vue';
import ProductReview from '@/components/ProductReview.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/AddProductPage',
    name: 'AddProductPage',
    component: AddProductPage,
  },
  {
    path: '/getProductReview/:id',
    name: 'ProductReview',
    component: ProductReview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
