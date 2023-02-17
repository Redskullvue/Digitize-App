
import { createRouter, createWebHistory } from 'vue-router'
import homePage from "../components/container.vue";
import SingleProduct from "../views/singleproduct.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homePage
  },
  {
    path: '/product',
    name : "SingleProduct",
    component: SingleProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router