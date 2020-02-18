import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import ProductList from '../views/product/index.vue';

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: '/',
    name: 'list',
    component: ProductList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
