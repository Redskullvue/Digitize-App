
import { createRouter, createWebHistory } from 'vue-router'
import homePage from "../components/mainPage.vue";
import SingleProduct from "../components/singleproduct.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homePage,
  },
  {
    path: '/product/:data',
    name : "SingleProduct",
    component: SingleProduct,
    props: true,
    meta : {title : "Mobile"}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router