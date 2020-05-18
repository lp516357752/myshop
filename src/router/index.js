import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const Cart = () => import('views/cart/Cart');
const Profile = () => import('views/profile/Profile');



Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    name: 'Home',
    path: '/home',
    component: Home
  },
  {
    name: 'Profile',
    path: '/profile',
    component: Profile
  },
  {
    name: 'Cart',
    path: '/cart',
    component: Cart
  },
  {
    name: 'Category',
    path: '/category',
    component: Category
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;